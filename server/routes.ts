import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message in memory
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification using Resend
      await resend.emails.send({
        from: "TEXtv Studios <info@studios.textv.com>",
        to: ["randylcline@icloud.com", "jb@textv.com"],
        replyTo: [validatedData.email],
        subject: `Studio inquiry message from ${validatedData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #00bcd4; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
              ${validatedData.requestCallback ? '<p><strong>Callback Requested:</strong> <span style="color: #00bcd4; font-weight: bold;">YES</span></p>' : ''}
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                ${validatedData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              This message was sent from the TEXtv Studios contact form.
            </p>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}${validatedData.phone ? `\nPhone: ${validatedData.phone}` : ''}${validatedData.requestCallback ? '\nCallback Requested: YES' : ''}

Message:
${validatedData.message}

---
This message was sent from the TEXtv Studios contact form.
        `
      });
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again or contact us directly." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

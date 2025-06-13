import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Booking() {
  const bookingUrl = "https://studios.textv.com";

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Book Your Session</h1>
          <p className="text-lg text-gray-600 mb-6">
            Schedule your studio time directly through our booking system below.
          </p>
          
          {/* Fallback link for browsers that don't support iframe */}
          <div className="mb-4">
            <Button 
              asChild 
              variant="outline"
              className="inline-flex items-center gap-2"
            >
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Open in New Tab
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Embedded booking system */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={bookingUrl}
            className="w-full border-0"
            style={{ height: "800px", minHeight: "600px" }}
            title="TEXtv Studios Booking System"
            allow="fullscreen"
            loading="lazy"
          />
        </div>
        
        {/* Note about the embedded system */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Having trouble with the booking system? You can{" "}
            <a 
              href={bookingUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textv-cyan hover:underline"
            >
              open it in a new tab
            </a>{" "}
            or contact us directly.
          </p>
        </div>
      </div>
    </div>
  );
}

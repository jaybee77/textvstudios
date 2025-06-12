import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Booking() {
  const bookingUrl = process.env.VITE_BOOKING_URL || "#";

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Book Your Session</h1>
        <p className="text-lg text-gray-600 mb-12">
          Ready to create? Use our online booking system to reserve your studio time.
        </p>

        <div className="bg-gray-50 rounded-xl p-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-texas-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Online Booking System</h3>
              <p className="text-gray-600 mb-6">Schedule your session through our partner booking platform</p>
            </div>
            
            <Button 
              asChild 
              className="bg-texas-red text-white px-8 py-4 text-lg font-semibold hover:bg-texas-red/90 transition-colors w-full"
            >
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                Book Your Session
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            
            <p className="text-sm text-gray-500 mt-4">
              You'll be redirected to our secure booking platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

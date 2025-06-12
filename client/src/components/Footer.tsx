import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">TEXtv Studios</h3>
            <p className="text-gray-400 mb-4">
              Professional recording, podcast, and broadcast facilities in the heart of Texas.
            </p>
            <p className="text-gray-400">
              Where Texas Talent Meets World-Class Technology
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/"><a className="hover:text-white transition-colors">Home</a></Link></li>
              <li><Link href="/studios"><a className="hover:text-white transition-colors">Studios</a></Link></li>
              <li><Link href="/gallery"><a className="hover:text-white transition-colors">Gallery</a></Link></li>
              <li><Link href="/booking"><a className="hover:text-white transition-colors">Booking</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@textvstudios.com</li>
              <li>XXX-XXX-XXXX</li>
              <li>Mon–Sat, 9am–9pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TEXtv Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">TEXtv Studios</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Professional recording, podcast, and broadcast facilities in the heart of Texas.
            </p>
            <p className="text-gray-400 dark:text-gray-500">
              Where Texas Talent Meets World-Class Technology
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><Link href="/"><span className="hover:text-textv-cyan transition-colors cursor-pointer">Home</span></Link></li>
              <li><Link href="/studios"><span className="hover:text-textv-cyan transition-colors cursor-pointer">Studios</span></Link></li>
              <li><Link href="/gallery"><span className="hover:text-textv-cyan transition-colors cursor-pointer">Gallery</span></Link></li>
              <li><a href="https://studios.textv.com" target="_blank" rel="noopener noreferrer"><span className="hover:text-textv-cyan transition-colors cursor-pointer">Booking</span></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>info@textvstudios.com</li>
              <li>469-966-9286</li>
              <li>Mon–Sat, 8am–11pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>© 2025 TEXtv Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

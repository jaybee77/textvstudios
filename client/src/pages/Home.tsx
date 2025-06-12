import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import control_room_thumb_2 from "@assets/control-room-thumb-2.jpg";

import broadcast_thumb from "@assets/broadcast-thumb.jpg";

import home_recording from "@assets/home-recording.jpg";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-black dark:bg-gray-950 text-white overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              TEXtv Studios
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 dark:text-gray-300 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Where Texas Talent Meets World-Class Technology
            </p>
            <a href="https://studios.textv.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-textv-cyan text-black px-8 py-4 text-lg font-semibold hover:bg-textv-cyan/90 transition-colors drop-shadow-lg">
                Book a Session
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* Intro Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            TEXtv Studios is a high-tech media production facility in the heart of Texas. Whether you're producing an album, launching a podcast, or streaming a live event, we provide the professional environment and technical expertise to make it happen.
          </p>
        </div>
      </div>
      {/* Studio Cards */}
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">Our Studios</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Recording Studio Card */}
            <Card className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img 
                src={home_recording} 
                alt="Recording Studio" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🎙️ Recording Studio</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Professional audio suite with isolation booths and live tracking space for musical precision.</p>
                <Link href="/studios">
                  <Button variant="link" className="text-textv-cyan font-semibold hover:text-textv-cyan/80 transition-colors p-0">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Podcast Studio Card */}
            <Card className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Podcast Studio" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🎧 Podcast Studio</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Accommodates up to six hosts with individual stations and multi-cam coverage.</p>
                <Link href="/studios">
                  <Button variant="link" className="text-textv-cyan font-semibold hover:text-textv-cyan/80 transition-colors p-0">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Broadcast Studio Card */}
            <Card className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img 
                src={broadcast_thumb} 
                alt="Broadcast Studio" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">📡 Broadcast Studio</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Fully equipped for live event production. Perfect for concerts and arena broadcasts.</p>
                <Link href="/studios">
                  <Button variant="link" className="text-textv-cyan font-semibold hover:text-textv-cyan/80 transition-colors p-0">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

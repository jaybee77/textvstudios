import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              TEXtv Studios
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Where Texas Talent Meets World-Class Technology
            </p>
            <Link href="/booking">
              <Button className="bg-texas-red text-white px-8 py-4 text-lg font-semibold hover:bg-texas-red/90 transition-colors">
                Book a Session
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
            TEXtv Studios is a high-tech media production facility in the heart of Texas. Whether you're producing an album, launching a podcast, or streaming a live event, we provide the professional environment and technical expertise to make it happen.
          </p>
        </div>
      </div>

      {/* Studio Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Studios</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Recording Studio Card */}
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Recording Studio" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">🎙️ Recording Studio</h3>
                <p className="text-gray-600 mb-4">Professional audio suite with isolation booths and live tracking space for musical precision.</p>
                <Link href="/studios">
                  <Button variant="link" className="text-texas-red font-semibold hover:text-texas-red/80 transition-colors p-0">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Podcast Studio Card */}
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Podcast Studio" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">🎧 Podcast Studio</h3>
                <p className="text-gray-600 mb-4">Accommodates up to six hosts with individual stations and multi-cam coverage.</p>
                <Link href="/studios">
                  <Button variant="link" className="text-texas-red font-semibold hover:text-texas-red/80 transition-colors p-0">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Broadcast Studio Card */}
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551731409-43eb3e517a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Broadcast Studio" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">📡 Broadcast Studio</h3>
                <p className="text-gray-600 mb-4">Fully equipped for live event production. Perfect for concerts and arena broadcasts.</p>
                <Link href="/studios">
                  <Button variant="link" className="text-texas-red font-semibold hover:text-texas-red/80 transition-colors p-0">
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

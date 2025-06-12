import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import mixing from "@assets/mixing.jpg";

import arena3 from "@assets/arena3.jpg";

import podcast3 from "@assets/podcast3.jpg";

import podcasters from "@assets/podcasters.jpg";

export default function Studios() {
  return (
    <div>
      {/* Studios Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Studios Designed for Creators</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Professional facilities equipped with cutting-edge technology for every type of production.</p>
        </div>
      </div>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Recording Studio */}
          <div id="recording" className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={mixing} 
                alt="Recording Studio Interior" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">🎙️ Recording Studio</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our flagship audio suite features multiple isolation booths, a professionally tuned control room, and a live tracking space built for musical precision. Ideal for full-band sessions, vocal tracking, voiceovers, sound design, and more.
              </p>
              <div className="p-6 rounded-lg mb-6" style={{backgroundColor: '#1a1a1a'}}>
                <p className="text-2xl font-bold text-textv-cyan mb-2">$100/hr + engineer fees</p>
                <p className="text-gray-300">Professional engineering services available</p>
              </div>
              <Link href="/booking">
                <Button className="bg-textv-cyan text-black px-8 py-3 font-semibold hover:bg-textv-cyan/90 transition-colors">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Podcast Studio */}
          <div id="podcast" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img 
                src={podcasters} 
                alt="Podcast Studio Setup" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold mb-6">🎧 Podcast Studio</h2>
              <p className="text-lg text-gray-700 mb-6">
                Accommodates up to six hosts or guests with individual mic/headphone stations, multi-cam coverage, and optional automated video switching triggered by audio input. Streamlined for quality and speed.
              </p>
              <div className="p-6 rounded-lg mb-6" style={{backgroundColor: '#1a1a1a'}}>
                <p className="text-2xl font-bold text-textv-cyan mb-2">$100/hr + engineer fees</p>
                <p className="text-gray-300">Video and audio production included</p>
              </div>
              <Link href="/booking">
                <Button className="bg-textv-cyan text-black px-8 py-3 font-semibold hover:bg-textv-cyan/90 transition-colors">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Broadcast Studio */}
          <div id="broadcast" className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={arena3} 
                alt="Broadcast Control Room" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">📡 Broadcast Studio</h2>
              <p className="text-lg text-gray-700 mb-6">
                Fully equipped for live or recorded event production. Operates like a TV truck—without the truck. Perfect for concerts, plays, conventions, or arena broadcasts when paired with our theater or arena space.
              </p>
              <div className="p-6 rounded-lg mb-6" style={{backgroundColor: '#1a1a1a'}}>
                <p className="text-2xl font-bold text-textv-cyan mb-2">$100/hr + engineer fees</p>
                <p className="text-gray-300">Live streaming and recording capabilities</p>
              </div>
              <Link href="/booking">
                <Button className="bg-textv-cyan text-black px-8 py-3 font-semibold hover:bg-textv-cyan/90 transition-colors">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

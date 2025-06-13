import { Award, Users, Building, DollarSign } from "lucide-react";

import mision from "@assets/mision.jpg";

import mision2 from "@assets/mision2.jpg";

export default function About() {
  const differentiators = [
    {
      icon: Award,
      title: "Cutting-edge Equipment",
      description: "Industry-standard gear maintained to the highest specifications"
    },
    {
      icon: Users,
      title: "Expert Engineers",
      description: "Experienced professionals to help bring your vision to life"
    },
    {
      icon: Building,
      title: "Versatile Multi-Studio Setups",
      description: "Three distinct environments for every type of production"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear $100/hr rate for all studio rentals"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About TEXtv Studios</h1>
        </div>

        {/* Mission */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TEXtv Studios was built to empower creators—from musicians to media producers—by providing access to industry-grade facilities in a welcoming, professional environment. We believe that great content comes from great tools and great support.
            </p>
          </div>
          <div>
            <img 
              src={mision2} 
              alt="Studio Exterior" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Differentiators */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-textv-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

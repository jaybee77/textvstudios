import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function Gallery() {
  const galleryImages = [
    {
      images: ["/tracking-1.jpg", "/tracking-2.jpg", "/tracking-3.jpg", "/tracking-4.jpg", "/tracking-5.jpg"],
      alt: "TEXtv tracking rooms",
      caption: "Tracking Rooms"
    },
    {
      images: ["/control-1.jpg", "/control-2.jpg", "/control-3.jpg", "/control-4.jpg"],
      alt: "TEXtv Studios Control Room",
      caption: "Control Room"
    },
    {
      images: ["/podcast-1.jpg", "/podcast-2.jpg", "/podcast-3.jpg", "/podcast-4.jpg"],
      alt: "TEXtv Studios Podcast Room",
      caption: "Podcast Studio"
    },
    {
      images: ["/equipment-1.jpg", "/equipment-1.jpg", "/equipment-1.jpg", "/equipment-1.jpg"],
      alt: "TEXtv Studios Professional Audio Equipment",
      caption: "Professional Equipment"
    },
    {
      images: ["/broadcast-1.jpg", "/broadcast-2.jpg", "/broadcast-3.jpg"],
      alt: "TEXtv Studios Broadcast Control Room",
      caption: "Broadcast Control"
    },
    {
      images: ["/projects-1.jpg", "/projects-1.jpg", "/projects-1.jpg"],
      alt: "TEXtv Studios Projects",
      caption: "Projects"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Gallery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A rotating collection of studio pics, behind-the-scenes shots, and equipment in action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map(({ images, alt, caption }, index) => {
            const [visibleIndex, setVisibleIndex] = useState(0);
            const [nextIndex, setNextIndex] = useState(0);
            const [isTransitioning, setIsTransitioning] = useState(false);

            useEffect(() => {
              const delay = 6000 + Math.random() * 7000;

              const interval = setTimeout(() => {
                const next = (visibleIndex + 1) % images.length;
                setNextIndex(next);
                setIsTransitioning(true);

                // After fade transition, swap visible image
                const fadeDuration = 700;
                const timeout = setTimeout(() => {
                  setVisibleIndex(next);
                  setIsTransitioning(false);
                }, fadeDuration);

                return () => clearTimeout(timeout);
              }, delay);

              return () => clearTimeout(interval);
            }, [visibleIndex, images.length]);

            return (
              <Card key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="w-full h-64 relative">
                  {/* Base image (visibleIndex stays until transition is done) */}
                  <img
                    src={images[visibleIndex]}
                    alt={alt}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000"
                  />

                  {/* Fade-in image sits on top during transition */}
                  {isTransitioning && (
                    <img
                      src={images[nextIndex]}
                      alt={alt}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeIn"
                    />
                  )}
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-900 dark:text-white font-medium">{caption}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

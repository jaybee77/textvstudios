import { Card, CardContent } from "@/components/ui/card";

export default function Gallery() {
  const galleryImages = [
    {
      src: "/recording-arena.jpg",
      alt: "TEXtv Studios Recording Arena",
      caption: "Recording Session"
    },
    {
      src: "/control-room.jpg",
      alt: "TEXtv Studios Control Room",
      caption: "Control Room"
    },
    {
      src: "/podcast-room.jpg",
      alt: "TEXtv Studios Podcast Room",
      caption: "Podcast Studio"
    },
    {
      src: "/equipment.jpg",
      alt: "TEXtv Studios Professional Audio Equipment",
      caption: "Professional Equipment"
    },
    {
      src: "/broadcast-control.jpg",
      alt: "TEXtv Studios Broadcast Control Room",
      caption: "Broadcast Control"
    },
    {
      src: "/live-session.jpg",
      alt: "TEXtv Studios Live Recording Session",
      caption: "Live Session"
    },
    {
      src: "/arena2.jpg",
      alt: "TEXtv Studios Recording Space",
      caption: "Studio Space"
    },
    {
      src: "/mixing.jpg",
      alt: "TEXtv Studios Mixing Setup",
      caption: "Mixing Console"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Gallery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A rotating collection of in-studio moments, behind-the-scenes shots, and equipment in action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <p className="text-gray-900 dark:text-white font-medium">{image.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

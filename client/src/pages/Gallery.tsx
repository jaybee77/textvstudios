import { Card, CardContent } from "@/components/ui/card";

export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Recording Session",
      caption: "Recording Session"
    },
    {
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Mixing Console",
      caption: "Control Room"
    },
    {
      src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Podcast Recording",
      caption: "Podcast Studio"
    },
    {
      src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Studio Microphone",
      caption: "Professional Equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Broadcast Studio",
      caption: "Broadcast Control"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Live Recording",
      caption: "Live Session"
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

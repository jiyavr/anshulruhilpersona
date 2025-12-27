import { useState } from 'react';
import { X } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

type Category = 'All' | 'Professional' | 'Ventures' | 'Speaking' | 'Community' | 'Media';

interface GalleryImage {
  id: number;
  category: Category;
  title: string;
  description: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const categories: Category[] = ['All', 'Professional', 'Ventures', 'Speaking', 'Community', 'Media'];

  const images: GalleryImage[] = [
    { id: 1, category: 'Professional', title: 'LexisNexis Leadership Summit', description: 'Annual technology leadership conference' },
    { id: 2, category: 'Ventures', title: 'Halo Homes Launch', description: 'First sustainable community project' },
    { id: 3, category: 'Speaking', title: 'Tech Innovation Conference', description: 'Keynote on AI and digital transformation' },
    { id: 4, category: 'Community', title: 'Startup Mentorship Program', description: 'Mentoring session with early-stage founders' },
    { id: 5, category: 'Media', title: 'Top 100 Canadian Immigrant Award', description: 'Recognition ceremony 2022' },
    { id: 6, category: 'Professional', title: 'Global Technology Team', description: 'Annual team offsite and strategy session' },
    { id: 7, category: 'Ventures', title: 'HealthSync Platform Demo', description: 'Product launch event' },
    { id: 8, category: 'Speaking', title: 'Entrepreneurship Panel', description: 'Discussion on zero-debt business models' },
    { id: 9, category: 'Community', title: 'CIF Board Meeting', description: 'Strategic planning session' },
    { id: 10, category: 'Media', title: 'Business Magazine Feature', description: 'Cover story on sustainable entrepreneurship' },
    { id: 11, category: 'Ventures', title: 'Gyansetu Education Initiative', description: 'Launching digital learning platform' },
    { id: 12, category: 'Professional', title: 'Technology Innovation Award', description: 'Industry recognition ceremony' },
  ];

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="bg-white">
      <section className="min-h-[60vh] flex items-center justify-center px-6 pt-24">
        <div className="max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="text-7xl font-bold mb-6 tracking-tight">Gallery</h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-2xl text-gray-600">
              Moments of Leadership, Innovation, and Impact
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 font-medium transition-all duration-400 ${
                    selectedCategory === category
                      ? 'bg-[#15E0FB] text-black'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <AnimatedSection key={image.id} delay={index * 50}>
                <div
                  onClick={() => setLightboxImage(image)}
                  className="group cursor-pointer relative overflow-hidden bg-gray-300 aspect-square hover:scale-[1.02] transition-all duration-400"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-400 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-center p-4">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-full text-gray-600">
                    {image.title}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-6 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#15E0FB] transition-colors duration-300"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full animate-[scaleIn_0.4s_ease-out]">
            <div className="bg-gray-300 aspect-video flex items-center justify-center text-gray-600 text-2xl mb-6">
              {lightboxImage.title}
            </div>
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-4">{lightboxImage.title}</h2>
              <p className="text-lg text-gray-300">{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

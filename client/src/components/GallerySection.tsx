/**
 * GallerySection - Portfolio showcase
 * Design: Noir Atelier - masonry-style grid with hover effects
 */
import { useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/gallery-1-8pezt9PJhVDdUD5E6Tbnxj.webp",
    title: "Studio Atmosphere",
    category: "Photography",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/gallery-2-AAzbJ6eUvezLfgyL7RTTEJ.webp",
    title: "The Art of Detail",
    category: "Still Life",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/gallery-3-BJ9RmXrhbxUgSz7qmMjhCU.webp",
    title: "Set Design",
    category: "Production",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/gallery-4-EsRJowWFz2fGhrZ63GDe6D.webp",
    title: "Light as Art",
    category: "Abstract",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/gallery-5-gUJSX8WRHSiym6DszChpxG.webp",
    title: "Cinema Equipment",
    category: "Filmmaking",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720720477/YjKXh3QDF6EajMvUx7ATRV/camera-detail-SraswSpccpwUsVJzqoeagv.webp",
    title: "Precision Optics",
    category: "Filmmaking",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-36">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-[var(--font-nav)] text-xs tracking-[0.4em] uppercase text-gold/70 mb-4">
            Our Work
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Portfolio
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-[var(--font-body)] text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our studio environment and the quality of production we deliver.
            Client work is never shared without explicit written consent.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
              onClick={() => setLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-[var(--font-nav)] text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
                    {item.category}
                  </p>
                  <p className="font-[var(--font-display)] text-xl font-semibold text-foreground">
                    {item.title}
                  </p>
                </div>
              </div>
              {/* Border on hover */}
              <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/30 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center mt-10 font-[var(--font-body)] text-base text-muted-foreground italic">
          These images showcase our studio environment and equipment. Client portfolio samples are available upon request during consultation.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <img
            src={galleryItems[lightbox].src}
            alt={galleryItems[lightbox].title}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="font-[var(--font-nav)] text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
              {galleryItems[lightbox].category}
            </p>
            <p className="font-[var(--font-display)] text-xl font-semibold text-foreground">
              {galleryItems[lightbox].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

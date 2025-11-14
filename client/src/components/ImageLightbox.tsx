import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageLightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const ImageLightbox = ({ images, isOpen, onClose, initialIndex = 0 }: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
        onClick={onClose}
        data-testid="lightbox-overlay"
      >
        {/* Close button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
          onClick={onClose}
          data-testid="button-close-lightbox"
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Previous button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          data-testid="button-previous-image"
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>

        {/* Next button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          data-testid="button-next-image"
        >
          <ChevronRight className="w-8 h-8" />
        </Button>

        {/* Image counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-lg font-medium z-10">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Image container */}
        <div
          className="relative w-full h-full flex items-center justify-center p-16"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Photo ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full object-contain rounded-lg"
              data-testid={`lightbox-image-${currentIndex}`}
            />
          </AnimatePresence>
        </div>

        {/* Thumbnail strip at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90%] px-4 py-2 bg-black/50 rounded-lg">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? 'border-white scale-110'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              data-testid={`thumbnail-${idx}`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageLightbox;

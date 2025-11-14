import { useState } from 'react';
import { motion } from 'framer-motion';
import { Images } from 'lucide-react';
import DomeGallery from './DomeGallery';
import ImageLightbox from './ImageLightbox';
import { Button } from '@/components/ui/button';

// Local pre-debut photos
import prenup1 from '@assets/pre-debut1_1763041921343.jpg';
import prenup2 from '@assets/pre-debut2_1763041921343.jpg';
import prenup3 from '@assets/pre-debut3_1763041921344.jpg';
import prenup4 from '@assets/pre-debut4_1763041921345.jpg';
import prenup5 from '@assets/pre-debut5_1763041921345.jpg';
import prenup6 from '@assets/pre-debut6_1763041921346.jpg';
import prenup7 from '@assets/pre-debut7_1763041921346.jpg';
import prenup8 from '@assets/pre-debut8_1763041921347.jpg';
import prenup10 from '@assets/pre-debut10_1763041921347.jpg';
import prenup11 from '@assets/pre-debut11_1763041921348.jpg';
import prenup12 from '@assets/pre-debut12_1763041921348.jpg';
import cover1 from '@assets/cover1_1762962621134.jpg';

const MemorableMomentsSection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = [
    cover1,
    prenup1,
    prenup2,
    prenup3,
    prenup4,
    prenup5,
    prenup6,
    prenup7,
    prenup8,
    prenup10,
    prenup11,
    prenup12,
    'https://res.cloudinary.com/dpze6fsio/image/upload/v1763137202/dsss_ttjpxr.jpg'
  ];

  return (
    <motion.section 
      id="prenup-photos" 
      className="section-hard-blue bg-white relative overflow-hidden py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-5xl font-display font-light italic text-gold-bright mb-8" data-testid="text-prenup-photos-title">
            Save the Date Photos
          </h2>
          <p className="text-xl font-script italic max-w-2xl mx-auto leading-relaxed text-[#0d0d0d]">
            Captured moments before forever begins
          </p>
          
          {/* View All Photos Button */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button
              onClick={() => setIsLightboxOpen(true)}
              variant="outline"
              className="gap-2"
              data-testid="button-view-all-photos"
            >
              <Images className="w-4 h-4" />
              View All Photos
            </Button>
          </motion.div>
        </motion.div>

        {/* Dome Gallery */}
        <motion.div 
          className="w-full h-[600px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
        >
          <DomeGallery 
            images={images}
            fit={0.6}
            minRadius={500}
            maxRadius={800}
            segments={35}
            imageBorderRadius="20px"
            openedImageBorderRadius="20px"
            grayscale={false}
          />
        </motion.div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={images}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        initialIndex={0}
      />
    </motion.section>
  );
};

export default MemorableMomentsSection;

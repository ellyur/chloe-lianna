import { useState } from 'react';
import { motion } from 'framer-motion';
import { Images } from 'lucide-react';
import DomeGallery from './DomeGallery';
import ImageLightbox from './ImageLightbox';
import { Button } from '@/components/ui/button';

const MemorableMomentsSection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = [
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374885/DSC09821_acr1es.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374885/DSC09843_ewbz9r.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374866/DSC09767_tjmoud.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374838/DSC09764_zs57jb.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374807/DSC09708_dvs5le.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374806/DSC09526_xfbel5.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374806/DSC09298_gg8alm.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374807/DSC09757_t7xzpc.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374806/DSC09554_q27tx4.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374806/DSC09310_doi0s0.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374807/DSC09657_xxdi22.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374806/DSC09633_aldkvt.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374805/DSC09175_lw9t7n.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374806/DSC09284_szwbp6.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374805/DSC09330_rrp0if.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374805/DSC09197_qcogzw.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374804/DSC09236_vvomo7.jpg',
    'https://res.cloudinary.com/dwvcp9otb/image/upload/v1763374803/DSC09086_jptnqz.jpg'
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

        {/* View All Photos Button - After Dome Gallery */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
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

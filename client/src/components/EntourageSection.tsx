import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import the 18 things images (Chloe photos)
import lanternsChloeImage from '@assets/18-lanters-chloe_1763042970043.jpg';
import rosesChloeImage from '@assets/18roses-chloe_1763042970044.jpg';
import toastChloeImage from '@assets/18toast-chloe_1763042970044.jpg';
import treasuresChloeImage from '@assets/18-treasures-chloe_1763042970045.jpg';

// Import the name list images (green cards with gold text)
import lanternsListImage from '@assets/LANTERNS_1763044819112.png';
import rosesListImage from '@assets/ROSES_1763044812029.jpg';
import toastListImage from '@assets/TOAST_1763044812030.png';
import treasuresListImage from '@assets/TREASURES_1763044812031.png';

interface ImageItem {
  type: 'chloe' | 'list';
  src: string;
  alt: string;
  testId: string;
}

// Flatten the array into alternating Chloe → List pattern
const imageSequence: ImageItem[] = [
  { type: 'chloe', src: rosesChloeImage, alt: 'Chloe - 18 Roses', testId: 'img-chloe-roses' },
  { type: 'list', src: rosesListImage, alt: '18 Roses', testId: 'img-list-roses' },
  { type: 'chloe', src: treasuresChloeImage, alt: 'Chloe - 18 Treasures', testId: 'img-chloe-treasures' },
  { type: 'list', src: treasuresListImage, alt: '18 Treasures', testId: 'img-list-treasures' },
  { type: 'chloe', src: toastChloeImage, alt: 'Chloe - 18 Toasts', testId: 'img-chloe-toast' },
  { type: 'list', src: toastListImage, alt: '18 Toasts', testId: 'img-list-toast' },
  { type: 'chloe', src: lanternsChloeImage, alt: 'Chloe - 18 Lanterns', testId: 'img-chloe-lanterns' },
  { type: 'list', src: lanternsListImage, alt: '18 Lanterns', testId: 'img-list-lanterns' },
];

const EntourageSection = () => {
  return (
    <section className="bg-background relative" data-testid="section-entourage">
      {/* Header with container */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">
            18 Treasured Moments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating with the special people in my life
          </p>
        </motion.div>
      </div>

      {/* Full-width alternating images - no container */}
      {imageSequence.map((item, index) => (
        <FullWidthImage key={`${item.testId}-${index}`} item={item} index={index} />
      ))}
    </section>
  );
};

const FullWidthImage = ({ item, index }: { item: ImageItem; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="bg-white relative w-full overflow-hidden">
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          src={item.src}
          alt={item.alt}
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'center',
            margin: 0,
            padding: 0
          }}
          data-testid={item.testId}
        />
      </div>
    </section>
  );
};

export default EntourageSection;

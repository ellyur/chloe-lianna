import { useAnimationContext } from '@/contexts/AnimationContext';
import lantersChloe from '@assets/18-lanters-chloe_1763134041151.jpg';
import rosesChloe from '@assets/18roses-chloe_1763134041152.jpg';
import treasuresChloe from '@assets/18-treasures-chloe_1763134041153.jpg';
import cover1 from '@assets/cover1_1763134041154.jpg';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  
  // Array of images to loop through
  const images = [
    { src: lantersChloe, alt: '18 Lanterns' },
    { src: rosesChloe, alt: '18 Roses' },
    { src: treasuresChloe, alt: '18 Treasures' },
    { src: cover1, alt: 'Cover' },
  ];

  // Repeat the image set multiple times for continuous loop
  const repeatedImages = Array(4).fill(images).flat();

  return (
    <section id="imageLoop" className="section-hard-blue bg-white w-full overflow-hidden py-8">
      <div className="invitation-loop-container">
        <div className={`${animationsEnabled ? 'invitation-loop-track' : 'invitation-loop-track-static'}`}>
          {/* First set */}
          {repeatedImages.map((image, index) => (
            <div key={`set1-${index}`} className="invitation-loop-item">
              <img 
                src={image.src}
                alt={image.alt}
                className="h-48 sm:h-56 md:h-64 lg:h-72 w-auto object-cover rounded-md"
                data-testid={`img-loop-${index}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {repeatedImages.map((image, index) => (
            <div key={`set2-${index}`} className="invitation-loop-item">
              <img 
                src={image.src}
                alt={image.alt}
                className="h-48 sm:h-56 md:h-64 lg:h-72 w-auto object-cover rounded-md"
                data-testid={`img-loop-dup-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;

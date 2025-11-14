import { useAnimationContext } from '@/contexts/AnimationContext';
import prenup6 from '@assets/prenup6_1762584613686.jpg';
import prenup8 from '@assets/prenup8_1762584613686.jpg';
import prenup10 from '@assets/prenup10_1762584613687.jpg';
import prenup12 from '@assets/prenup12_1760518054638.jpg';
import cover3 from '@assets/cover3_1762962621136.jpg';
import giftGuide from '@assets/giftGuide_1763041381821.jpg';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  
  // Array of images to loop through
  const images = [
    { src: prenup6, alt: 'Prenup 6' },
    { src: prenup8, alt: 'Prenup 8' },
    { src: prenup10, alt: 'Prenup 10' },
    { src: prenup12, alt: 'Prenup 12' },
    { src: cover3, alt: 'Cover 3' },
    { src: giftGuide, alt: 'Gift Guide' },
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

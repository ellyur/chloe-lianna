import DomeGallery from './DomeGallery';
import cover1Image from '@assets/cover1_1762962621134.jpg';
import cover2Image from '@assets/cover2_1762962621135.jpg';
import cover3Image from '@assets/cover3_1762962621136.jpg';
import lanternsImage from '@assets/18-lanters-chloe_1763042970043.jpg';
import rosesImage from '@assets/18roses-chloe_1763042970044.jpg';
import toastImage from '@assets/18toast-chloe_1763042970044.jpg';
import treasuresImage from '@assets/18-treasures-chloe_1763042970045.jpg';
import ceremonyImage from '@assets/ceremony_1762584476279.png';

const SaveTheDatePhotos = () => {
  const galleryImages = [
    cover1Image,
    cover2Image,
    cover3Image,
    lanternsImage,
    rosesImage,
    toastImage,
    treasuresImage,
    ceremonyImage
  ];

  return (
    <section className="bg-white relative w-full overflow-hidden py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl text-center text-primary mb-8"
          style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
          data-testid="text-save-the-date-photos-title"
        >
          Save the Date Photos
        </h2>
        
        <div className="w-full h-[600px]">
          <DomeGallery 
            images={galleryImages}
            fit={0.6}
            minRadius={500}
            maxRadius={800}
            segments={35}
            imageBorderRadius="20px"
            openedImageBorderRadius="20px"
            grayscale={false}
          />
        </div>
      </div>
    </section>
  );
};

export default SaveTheDatePhotos;

import { Heart } from 'lucide-react';
import flower1Image from '@assets/flower1_1759854441524.png';
import flowerImage from '@assets/flower_1759854441531.png';
import backgroundImage from '@assets/first_page_bg.jpg';

// Polaroid images
import eleganceImage from '@assets/pre-debut8_1762962945662.jpg';
import graceImage from '@assets/pre-debut7_1762962945662.jpg';
import dreamsImage from '@assets/pre-debut9_1762962945663.jpg';

interface RusticInvitationRevealProps {
  animationsEnabled: boolean;
}

const RusticInvitationReveal = ({ animationsEnabled }: RusticInvitationRevealProps) => {
  const polaroids = [
    { src: eleganceImage, alt: 'Elegance' },
    { src: graceImage, alt: 'Grace' },
    { src: dreamsImage, alt: 'Dreams' }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-20 px-4">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Modern Minimalist Invitation */}
      <div
        className="relative z-10 max-w-2xl w-full mb-20"
        data-testid="invitation-paper"
      >
        {/* Layered background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-lg transform rotate-1" />
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-lg transform -rotate-1" />
        
        {/* Main Container */}
        <div 
          className="relative bg-white p-12 md:p-16 shadow-green rounded-sm overflow-hidden"
        >
          
          {/* Decorative Flowers on Edges */}
          <img 
            src={flower1Image} 
            alt="" 
            className="absolute top-4 left-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float pointer-events-none"
            data-testid="decoration-flower-invitation-topleft"
          />
          <img 
            src={flowerImage} 
            alt="" 
            className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float-delayed pointer-events-none"
            data-testid="decoration-flower-invitation-topright"
          />
          <img 
            src={flower1Image} 
            alt="" 
            className="absolute bottom-4 left-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float-delayed pointer-events-none transform rotate-45"
            data-testid="decoration-flower-invitation-bottomleft"
          />
          <img 
            src={flowerImage} 
            alt="" 
            className="absolute bottom-4 right-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float pointer-events-none transform -rotate-12"
            data-testid="decoration-flower-invitation-bottomright"
          />

          {/* Content */}
          <div className="text-center relative z-10 space-y-8">
            {/* Heart Icon with modern styling */}
            <div className="flex justify-center">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 animate-pulse" />
                <div className="relative w-full h-full rounded-full bg-white border-2 border-primary/20 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary fill-primary" />
                </div>
              </div>
            </div>

            {/* Modern divider above title */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>

            <span 
              className="text-5xl md:text-6xl text-primary relative block"
              style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
            >
              You're Invited
              {/* Subtle underline accent */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </span>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"/>

            <p 
              className="text-lg md:text-xl text-foreground leading-relaxed max-w-xl mx-auto font-light"
            >
              Join us as Lianna Chloe celebrates her journey into adulthood and the beginning of her brightest chapter
            </p>

            {/* Stylized divider */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="w-12 h-px bg-primary/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <div className="w-12 h-px bg-primary/30" />
            </div>

            <div className="text-base md:text-lg text-muted-foreground italic space-y-2">
              <p>An evening of elegance,</p>
              <p>celebration, and new beginnings</p>
            </div>

            {/* Modern Hearts decoration */}
            <div className="flex items-center justify-center gap-3 pt-6">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Polaroid Photos */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-8 max-w-6xl">
        {polaroids.map((polaroid, index) => (
        <div
          key={index}
          className="relative group"
          data-testid={`polaroid-${index}`}
        >
          {/* Modern Minimalist Frame with Accent */}
          <div className="relative">
            {/* Decorative background layer */}
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Main card */}
            <div 
              className="relative bg-white p-6 shadow-green hover:shadow-2xl transition-all duration-300 rounded-sm"
            >
              
              <div className="relative overflow-hidden bg-gray-50 rounded-sm" style={{ width: '240px', height: '240px' }}>
                <img
                  src={polaroid.src}
                  alt={polaroid.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </div>
              
              {/* Modern caption with accent */}
              <div className="mt-4 text-center relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <p className="text-foreground text-sm font-medium tracking-wider uppercase">
                  {polaroid.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default RusticInvitationReveal;

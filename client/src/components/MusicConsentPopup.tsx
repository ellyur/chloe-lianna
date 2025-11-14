import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import backgroundImage from '@assets/first_page_bg.jpg';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
  isVisible: boolean;
}

const MusicConsentPopup = ({ onConsent, isVisible }: MusicConsentPopupProps) => {
  const handleConsent = (consent: boolean) => {
    onConsent(consent);
  };

  return (
    <Dialog open={isVisible} onOpenChange={() => {}}>
      <DialogPortal>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100]"
            >
              {/* Background image overlay */}
              <img
                src={backgroundImage}
                alt=""
                className="fixed inset-0 w-full h-full object-cover z-[100]"
                data-testid="background-image"
              />
              <div className="fixed inset-0 bg-black/40 z-[101]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Centered dialog content */}
        <div className="fixed left-[50%] top-[50%] z-[102] translate-x-[-50%] translate-y-[-50%] w-full max-w-2xl px-4">
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="p-8 md:p-12"
                data-testid="invitation-dialog"
              >
                <div className="flex flex-col items-center justify-center space-y-6">
                  {/* Envelope image */}
                  <motion.img
                    src="https://res.cloudinary.com/dweesccy9/image/upload/v1762959623/image-removebg-preview_yjclna.png"
                    alt="Invitation Envelope"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      scale: { duration: 0.5 },
                      opacity: { duration: 0.5 },
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }
                    }}
                    className="w-full max-w-md drop-shadow-2xl"
                    data-testid="envelope-image"
                  />

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
                  </div>

                  {/* Button */}
                  <Button
                    onClick={() => handleConsent(true)}
                    className="py-6 px-12 text-lg font-bold"
                    data-testid="button-open-invitation"
                  >
                    Open Invitation
                  </Button>

                  {/* Text */}
                  <p className="text-white text-base italic font-serif text-center drop-shadow-lg">
                    You're invited to celebrate with us
                  </p>

                  {/* Decorative hearts */}
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <Heart className="w-3 h-3 text-primary fill-primary opacity-70" />
                    <div className="w-1 h-1 rounded-full bg-primary opacity-70"></div>
                    <Heart className="w-3 h-3 text-primary fill-primary opacity-70" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogPortal>
    </Dialog>
  );
};

export default MusicConsentPopup;

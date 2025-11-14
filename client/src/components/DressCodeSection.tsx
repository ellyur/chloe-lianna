import { motion } from 'framer-motion';
import attireImage from '@assets/image_1763049471464.png';

const DressCodeSection = () => {
  const colorPalette = [
    { name: 'Ivory', color: '#FFFFF0', hex: '#FFFFF0' },
    { name: 'Cream White', color: '#FCFBF4', hex: '#FCFBF4' },
    { name: 'Soft Warm White', color: '#FAF0E6', hex: '#FAF0E6' },
    { name: 'Vanilla White', color: '#F6EEE5', hex: '#F6EEE5' },
    { name: 'Beige White', color: '#F2EBE2', hex: '#F2EBE2' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue bg-white relative overflow-hidden mt-[10px] py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2 className="font-display font-light italic text-gold mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
          <motion.p 
            className="text-lg md:text-xl font-body text-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.0 }}
          >
            Dress to impress in semi-formal or formal attire. Let's make the night extra special by coming in your best-dressed selves. No slippers, jeans or casual wear, please.
          </motion.p>
        </motion.div>

        {/* Attire Image */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.2 }}
        >
          <img 
            src={attireImage}
            alt="Formal attire for women and men"
            className="w-full h-auto object-contain rounded-2xl shadow-green"
            data-testid="img-attire-guide"
          />
        </motion.div>

        {/* Attire Guidelines Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
        >
          {/* Women's Attire */}
          <div className="bg-white shadow-green rounded-xl p-8 hover-elegant transition-all duration-500">
            <h3 className="text-2xl font-display font-medium text-foreground mb-4 text-center">
              For Women
            </h3>
            <p className="text-base text-foreground text-center leading-relaxed">
              Elegant dresses, cocktail dresses, or formal gowns in semi-formal or formal style. Dress length should be above the knee or over the knee, but not too long.
            </p>
          </div>

          {/* Men's Attire */}
          <div className="bg-white shadow-green rounded-xl p-8 hover-elegant transition-all duration-500">
            <h3 className="text-2xl font-display font-medium text-foreground mb-4 text-center">
              For Men
            </h3>
            <div className="text-base text-foreground text-center leading-relaxed space-y-2">
              <p className="font-semibold">Top:</p>
              <p>White, Cream, or Snow White long sleeve or short sleeve polo</p>
              <p className="font-semibold mt-4">Bottom:</p>
              <p>Black slacks or Cream slacks</p>
            </div>
          </div>
        </motion.div>

        {/* Color Palette */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.6 }}
        >
          <div className="bg-white shadow-green rounded-xl p-8">
            <h3 className="text-2xl font-display font-medium text-foreground mb-6 text-center">
              Color Palette
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {colorPalette.map((colorItem, index) => (
                <div key={index} className="text-center group">
                  <div 
                    className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-xl border-2 border-border shadow-soft group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: colorItem.color }}
                  ></div>
                  <p className="text-base font-semibold text-foreground mt-3">{colorItem.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{colorItem.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;
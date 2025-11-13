import { motion } from 'framer-motion';
import storyImage from '@assets/pre-debut6_1762962987901.jpg';
import { Heart } from 'lucide-react';

const StorySection = () => {
  return (
    <motion.section 
      id="story" 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
      data-testid="section-story"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center text-foreground mb-3" data-testid="text-story-title">
          HER JOURNEY
        </h2>
        <p className="text-center text-sm sm:text-base text-foreground/60 italic">Celebrating eighteen years of grace, growth, and dreams</p>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
        >
          {/* Left Side - Text Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 relative">
            {/* Decorative Icon */}
            <div className="mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>

            {/* Complete Story */}
            <div className="space-y-4 text-base text-foreground/90 leading-relaxed" data-testid="text-story-content">
              <p>
                Eighteen years ago, a beautiful journey began. From her first steps to her first day of school, Lianna Chloe has graced our lives with joy, laughter, and endless love.
              </p>
              
              <p>
                Through the years, she has grown into a remarkable young woman — intelligent, compassionate, and full of dreams. Her kindness touches everyone she meets, and her determination inspires us every day.
              </p>
              
              <p>
                As she steps into this new chapter of adulthood, we celebrate not just her eighteenth birthday, but the incredible person she has become and the bright future that awaits her. This is her moment to shine.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-first lg:order-last">
            <img
              src={storyImage}
              alt="Lianna Chloe's Journey"
              className="w-full h-auto rounded-2xl shadow-green"
              data-testid="img-story-background"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;

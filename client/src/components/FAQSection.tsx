import { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Clock, Users, MessageCircle, MapPin, Hotel } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "When should I RSVP?",
      icon: Clock,
      answer: "If you are able to RSVP as soon as you receive your invitation, that would be extremely helpful! We ask that you RSVP before November 30, 2025. After that, unfortunately, any unanswered invites will have to be marked as 'not attending'."
    },
    {
      question: "Do we really need to RSVP? We already said 'YES'",
      icon: MessageCircle,
      answer: "Yes, please. We will be needing your formal RSVP to consolidate guest details and finalize the headcount for catering and seating purposes."
    },
    {
      question: "What if I RSVP'd but cannot attend?",
      icon: MessageCircle,
      answer: "We would love to have you at my debut, but we understand that there are circumstances beyond our control. However, please let us know as soon as possible so we can reallocate your seat/s. Give us a toast from afar."
    },
    {
      question: "I said 'NO' to the RSVP but I had a change of plans - I can attend now! What should I do?",
      icon: MessageCircle,
      answer: "Please check with us first. Unfortunately, we have a strict guest list. Kindly inform us if your schedule clears up, so we can try to accommodate you. If seats become available, we will let you know as soon as possible. Please do not attend unannounced, as we may not have any available seats for you."
    },
    {
      question: "May I invite a 'PLUS ONE' to the event?",
      icon: Users,
      answer: "As much as we would love to accommodate all our friends and family, we have a limited number of guests. Please understand that this event is strictly by invitation only. Kindly check our invitation to know the number of seats allotted for you. Guests not found on the guestlist provided will not be allowed to enter."
    },
    {
      question: "Is there parking space available for my car?",
      icon: MapPin,
      answer: "Yes, there is parking available for everyone at the venue. However, please take note that it is first come, first served basis, so you might not want to be late."
    }
  ];

  return (
    <motion.section 
      className="section-pastel-blue bg-white py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 11.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 11.8 }}
        >
          <h2 className="text-5xl font-display font-light italic text-primary mb-8" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-body text-foreground max-w-2xl mx-auto">
            We've compiled answers to the most common questions about the debut celebration. 
            If you have additional questions, please don't hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-green rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 12.1 + (index * 0.1) }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gold/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xl text-foreground font-body font-semibold">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-border mb-4"></div>
                  <p className="text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;

"use client";;
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

import receptionImage from "@assets/venue_1763040280912.jpg";

const VenueSection = () => {
  const venue = {
    title: 'Grand Reception',
    name: 'Artan Garden',
    address: 'Manila, Philippines',
    image: receptionImage,
    mapUrl: 'https://maps.app.goo.gl/m5RjpgL45ocukpnj8',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3573347851784!2d121.0328!3d14.5884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9f9c9c9c9c9%3A0x9c9c9c9c9c9c9c9c!2sArtan%20Garden!5e0!3m2!1sen!2sph!4v1234567890',
    description: 'Join us at Artan Garden for Lianna Chloe\'s debut celebration. This elegant venue will host an unforgettable evening of celebration and new beginnings.'
  };

  return (
    <motion.section 
      id="venue" 
      className="section-pastel-blue bg-background py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 6.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 6.8 }}
        >
          <h1 className="text-4xl font-display font-light mb-2 text-primary" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 6.8 }}
        >
          {/* Modern Creative Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Decorative background layers */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl opacity-60" />
            <div className="absolute -inset-2 bg-card/30 backdrop-blur-sm rounded-xl" />
            
            {/* Main Content Card */}
            <div className="relative bg-white rounded-xl shadow-green overflow-hidden">
              {/* Header with decorative elements */}
              <div className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-8">
                
                <div className="text-center relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 7.0 }}
                  >
                    <h2 className="font-display text-foreground mb-2 text-2xl md:text-3xl" data-testid="text-grand-reception-title">
                      {venue.title}
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className="w-8 h-px bg-primary/40" />
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="w-8 h-px bg-primary/40" />
                    </div>
                    <h3 className="font-body text-primary font-semibold text-lg md:text-xl" data-testid="text-venue-name">
                      {venue.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mt-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <p className="text-sm font-body text-muted-foreground" data-testid="text-venue-address">
                        {venue.address}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Image Section with Modern Frame */}
              <div className="relative p-6 md:p-8">
                <div className="relative overflow-hidden rounded-lg">
                  {/* Image frame decoration */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg" />
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="relative w-full h-72 md:h-96 object-cover rounded-lg shadow-xl"
                    loading="lazy"
                    data-testid="img-venue"
                  />
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8 px-6 md:px-8 pb-6">
                {/* Left Column - Description */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-primary rounded-full" />
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">About the Venue</h4>
                    </div>
                    <p className="text-base font-body leading-relaxed text-foreground/90" data-testid="text-venue-description">
                      {venue.description}
                    </p>
                  </div>
                </div>

                {/* Right Column - Map */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Location Map</h4>
                  </div>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-xl">
                    <iframe
                      src={venue.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      data-testid="map-venue-embed"
                    />
                  </div>
                </div>
              </div>

              {/* Footer with Directions */}
              <div className="relative bg-gradient-to-r from-primary/5 via-transparent to-primary/5 px-6 md:px-8 py-6">
                <div className="flex justify-center">
                  <a
                    href={venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
                    data-testid="button-venue-location"
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold">Get Directions</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VenueSection;
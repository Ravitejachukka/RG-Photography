import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Youtube,
  ChevronRight, 
  Menu, 
  X,
  Camera,
  Film,
  Heart,
  Baby,
  PartyPopper,
  Flower2,
  Utensils
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-ivory/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
          RG <span className="text-gold">PHOTOGRAPHY</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-gold ${isScrolled ? 'text-charcoal' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all ${isScrolled ? 'bg-charcoal text-white hover:bg-gold' : 'bg-white text-charcoal hover:bg-gold hover:text-white'}`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-charcoal' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-charcoal' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-ivory shadow-xl py-8 px-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif text-charcoal hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+919642626967"
              className="bg-charcoal text-white py-4 text-center font-bold tracking-widest uppercase"
            >
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
          alt="Luxury Wedding" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 cinematic-overlay" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-4"
        >
          Visakhapatnam | Wedding | Events | Films
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight"
        >
          Capturing Moments.<br />Creating Celebrations.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light"
        >
          From weddings to grand events, we don’t just document memories — we create them.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto px-10 py-4 bg-white text-charcoal font-bold tracking-widest uppercase hover:bg-gold hover:text-white transition-all">
            Book Your Date
          </a>
          <a href="tel:+919642626967" className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/30 backdrop-blur-sm text-white font-bold tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all">
            Call Now
          </a>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button (Desktop) */}
      <a 
        href="https://wa.me/919642626967" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:flex absolute bottom-10 right-10 z-20 items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full hover:bg-white/20 transition-all group"
      >
        <span className="text-white text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp Us</span>
        <MessageCircle className="text-white w-6 h-6" />
      </a>
    </section>
  );
};

const TrustStrip = () => {
  const points = [
    "Wedding & Event Specialists",
    "Photo + Video + Decoration",
    "Based in Vizag",
    "Custom Packages Available"
  ];

  return (
    <div className="bg-charcoal py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {points.map((point, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-white/60 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const categories = [
    {
      title: "Weddings",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      label: "Eternal Love"
    },
    {
      title: "Engagements",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
      label: "The Beginning"
    },
    {
      title: "Events",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
      label: "Grand Celebrations"
    },
    {
      title: "Newborn",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
      label: "Pure Innocence"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Our Signature Work</p>
          <h2 className="text-4xl md:text-5xl font-serif">Curated Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] overflow-hidden cursor-pointer"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-8 left-8">
                <p className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {cat.label}
                </p>
                <h3 className="text-white text-2xl font-serif">{cat.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1974&auto=format&fit=crop" 
                alt="RG Photography Studio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-ivory p-8 shadow-xl hidden md:block max-w-xs">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Our Location</p>
              <p className="text-sm font-medium leading-relaxed mb-4">
                Door No 1-61, 2nd Floor, Tarakarama Nagar, PM Palem, Madhurawada, Visakhapatnam, AP 530041
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold tracking-widest uppercase flex items-center hover:text-gold transition-colors"
              >
                Get Directions <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="lg:pl-12">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">About the Studio</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Your Story, Our Creativity</h2>
            <div className="space-y-6 text-charcoal/70 leading-relaxed text-lg font-light">
              <p>
                Based in Visakhapatnam, RG Photography & Events is a complete creative studio specializing in photography, videography, and event management.
              </p>
              <p>
                From emotional wedding moments to beautiful event setups, every detail is handled with care and creativity. We believe that every celebration is unique, and our mission is to preserve those once-in-a-lifetime moments through cinematic storytelling and exquisite design.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-gold mb-1">500+</h4>
                <p className="text-xs font-bold tracking-widest uppercase text-charcoal/50">Events Captured</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-gold mb-1">10+</h4>
                <p className="text-xs font-bold tracking-widest uppercase text-charcoal/50">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Wedding Photography",
      desc: "Timeless, emotional coverage of your most precious day.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Cinematic Films",
      desc: "High-end videography that tells your story like a movie.",
      icon: <Film className="w-6 h-6" />
    },
    {
      title: "Engagement Shoots",
      desc: "Creative pre-wedding sessions in beautiful locations.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Outdoor & Indoor Shoots",
      desc: "Professional portrait sessions for any occasion.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "Birthday & Newborn",
      desc: "Capturing the joy of new life and growing families.",
      icon: <Baby className="w-6 h-6" />
    },
    {
      title: "Event Decor",
      desc: "Exquisite flower themes and custom event styling.",
      icon: <Flower2 className="w-6 h-6" />
    },
    {
      title: "Catering Support",
      desc: "Seamless coordination for your event's culinary needs.",
      icon: <Utensils className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-serif">Complete Event Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-10 border border-charcoal/5 hover:border-gold/30 transition-all shadow-sm"
            >
              <div className="text-gold mb-6">{service.icon}</div>
              <h3 className="text-xl font-serif mb-4">{service.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    "All-in-one photo, video, and event support",
    "Local team in Visakhapatnam",
    "Professional and friendly approach",
    "Custom themes and flexible packages",
    "Fast response on phone and WhatsApp",
    "Experience with both intimate and large events"
  ];

  return (
    <section className="py-24 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Why RG Photography</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Excellence in Every Frame</h2>
            <p className="text-white/60 mb-12 font-light leading-relaxed">
              We understand that your special moments are irreplaceable. That's why we combine technical expertise with a deep passion for storytelling to deliver results that exceed expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-gold w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-white/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-full border-[12px] border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional Photography" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold rounded-full flex items-center justify-center text-center p-6 shadow-2xl">
              <p className="text-charcoal font-serif text-lg font-bold leading-tight">Trusted by 500+ Couples</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "“They captured our wedding beautifully and made the whole experience smooth. The cinematic film is something we will cherish forever.”",
      author: "Ananya & Rahul",
      location: "Visakhapatnam"
    },
    {
      text: "“Very professional, creative, and easy to work with. They handled both the decoration and photography for our daughter's birthday perfectly.”",
      author: "Suresh Kumar",
      location: "Madhurawada"
    },
    {
      text: "“The decoration and photography both exceeded expectations. The flower theme was exactly what we wanted for our engagement.”",
      author: "Priya Sharma",
      location: "Vizag"
    }
  ];

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-serif">Kind Words</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-12 shadow-sm border-t-4 border-gold">
              <p className="text-charcoal/80 italic mb-8 leading-relaxed">
                {review.text}
              </p>
              <div>
                <p className="font-serif text-lg text-charcoal">{review.author}</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Urgency = () => {
  return (
    <section className="py-20 bg-gold">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
          Limited dates available for upcoming wedding and event seasons.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a href="#contact" className="w-full sm:w-auto px-10 py-4 bg-charcoal text-white font-bold tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all">
            Check Availability
          </a>
          <a href="https://wa.me/919642626967" className="w-full sm:w-auto px-10 py-4 bg-white/20 border border-charcoal/20 text-charcoal font-bold tracking-widest uppercase hover:bg-white transition-all">
            WhatsApp Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
    
    if (!scriptUrl) {
      console.warn("Google Sheet Web App URL is not configured. Simulating submission.");
      setTimeout(() => setStatus('success'), 1500);
      return;
    }

    try {
      const formBody = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      await fetch(scriptUrl, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors',
      });
      
      setStatus('success');
      setFormData({ name: '', phone: '', eventType: 'Wedding', date: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Let's Create Magic</h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-ivory flex items-center justify-center rounded-full flex-shrink-0">
                  <Phone className="text-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-charcoal/50 mb-1">Call Us</p>
                  <p className="text-xl font-serif">+91 96426 26967</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-ivory flex items-center justify-center rounded-full flex-shrink-0">
                  <MapPin className="text-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-charcoal/50 mb-1">Our Studio</p>
                  <p className="text-lg font-medium">PM Palem, Madhurawada, Visakhapatnam</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-ivory flex items-center justify-center rounded-full flex-shrink-0">
                  <Clock className="text-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-charcoal/50 mb-1">Working Hours</p>
                  <p className="text-sm">Mon - Sat: 9:00 AM – 11:00 PM</p>
                  <p className="text-sm">Sun: 10:00 AM – 9:30 PM</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-12">
              <a href="tel:+919642626967" className="flex-1 bg-charcoal text-white py-4 text-center text-xs font-bold tracking-widest uppercase hover:bg-gold transition-colors">
                Call Now
              </a>
              <a href="https://wa.me/919642626967" className="flex-1 bg-ivory text-charcoal py-4 text-center text-xs font-bold tracking-widest uppercase border border-charcoal/10 hover:bg-gold hover:text-white transition-all">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-ivory p-10 md:p-12 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/60">Your Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white border border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/60">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/60">Event Type</label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full bg-white border border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors">
                    <option value="Wedding">Wedding</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Newborn">Newborn</option>
                    <option value="Other Event">Other Event</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/60">Preferred Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-white border border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/60">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-white border border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Tell us about your event..."></textarea>
              </div>

              <button 
                disabled={status === 'submitting'}
                className="w-full bg-charcoal text-white py-5 font-bold tracking-widest uppercase hover:bg-gold transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Inquiry'}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-xs text-center mt-2">There was an error sending your message. Please try again or contact us directly.</p>
              )}
              {status === 'success' && (
                <p className="text-green-600 text-xs text-center mt-2">Thank you! We will get back to you shortly.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-charcoal pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="text-2xl font-serif font-bold tracking-tighter mb-6">
              RG <span className="text-gold">PHOTOGRAPHY</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Capturing moments and creating celebrations in Visakhapatnam since 2015. We specialize in luxury wedding photography and premium event management.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/rg_photography_vsp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@rgphotography5688" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Weddings', 'Cinematic Films', 'Engagements', 'Event Decor', 'Newborn Shoots'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>PM Palem, Madhurawada, Visakhapatnam</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+91 96426 26967</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/30 tracking-widest uppercase">
            © 2026 RG Photography & Events. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-[10px] text-white/30 tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingActions = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 z-50 flex space-x-3">
      <a 
        href="tel:+919642626967" 
        className="flex-1 bg-charcoal text-white flex items-center justify-center py-4 rounded-full shadow-2xl border border-white/10"
      >
        <Phone className="w-5 h-5 mr-2" />
        <span className="text-xs font-bold tracking-widest uppercase">Call Now</span>
      </a>
      <a 
        href="https://wa.me/919642626967" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white flex items-center justify-center py-4 rounded-full shadow-2xl"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        <span className="text-xs font-bold tracking-widest uppercase">WhatsApp</span>
      </a>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Portfolio />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Urgency />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

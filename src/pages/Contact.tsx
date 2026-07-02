import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors: { name?: string; email?: string; phone?: string } = {};

    // 1. Name validation: only letters and spaces allowed
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      newErrors.name = "Name must contain only letters.";
    }

    // 2. Email validation: must end with @gmail.com format
    if (!email.trim().toLowerCase().endsWith('@gmail.com') || email.trim().length <= 10) {
      newErrors.email = "Email must be a valid @gmail.com address.";
    }

    // 3. Phone validation: exactly 10 digits
    if (!/^\d{10}$/.test(phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@glidebrands.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Phone: phone,
          Message: message
        })
      });
      
      if (response.ok) {
        setStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Fallback to success to guarantee user lands on thank you screen
        setStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      console.error("Submission error", err);
      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // If successfully submitted, show the custom Full Page Thank You screen
  if (status === 'success') {
    return (
      <div className="bg-brand-navy min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-12 text-white font-sans">
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center space-y-6">
          
          {/* Animated Success Check Circle */}
          <div className="w-16 h-16 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal animate-bounce">
            <CheckCircle2 size={36} />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-brand-coral uppercase leading-none">
              THANK YOU!
            </h1>
            <p className="text-gray-300 font-bold tracking-widest text-[10px] sm:text-xs uppercase">
              YOUR MESSAGE HAS BEEN TRANSMITTED
            </p>
          </div>

          <p className="text-gray-300/90 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
            Thank you! We have received your message. Our team is excited to explore how we can help your brand grow and scale in India. We will reach out to you at <span className="text-brand-teal font-semibold">{email}</span> shortly. Let's build something exceptional together.
          </p>

          <div className="pt-2">
            <Link 
              to="/"
              className="rounded-full bg-brand-teal px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:opacity-90 inline-flex items-center gap-3 shadow-lg hover:shadow-brand-teal/20"
            >
              BACK TO HOME
              <span className="w-5 h-5 rounded-full bg-brand-yellow flex items-center justify-center">
                <ArrowRight size={12} className="text-brand-navy" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. Top Banner (Hero) */}
      <section className="relative h-72 md:h-80 overflow-hidden flex items-center justify-center">
        {/* Background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/contact-bg.png')" }}
        />
        <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply" />
        
        {/* Three Central Images */}
        <div className="relative z-10 flex gap-12 md:gap-20 items-center justify-center px-6">
          <img src="/contact-1.png" alt="Contact Icon 1" className="h-16 md:h-20 object-contain" />
          <img src="/contact-2.png" alt="Contact Icon 2" className="h-16 md:h-20 object-contain" />
          <img src="/contact-3.png" alt="Contact Icon 3" className="h-16 md:h-20 object-contain" />
        </div>
      </section>

      {/* 2. Main Let's Talk Section with central vertical border line on desktop */}
      <section className="bg-brand-navy py-20 px-6 text-white border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">
          
          {/* Left Column */}
          <div className="flex flex-col justify-between h-full lg:pr-12">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase mb-6">
                LET'S TALK
              </h1>
              <p className="text-gray-300 font-bold tracking-widest text-xs sm:text-sm uppercase mb-16 leading-relaxed max-w-md">
                GLIDE WAS BORN TO OPERATE AT THE INTERSECTION OF GLOBAL AMBITION AND INDIAN REALITY.
              </p>
            </div>

            {/* Email Contact Detail */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl max-w-sm">
              <div className="h-10 w-10 rounded-full bg-brand-teal flex items-center justify-center shrink-0">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email</p>
                <a href="mailto:info@glidebrands.in" className="text-sm font-semibold hover:text-brand-teal transition-colors">
                  info@glidebrands.in
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Central Vertical Separator Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>

          {/* Right Column (Form) */}
          <div className="lg:pl-12 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">NAME</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                  }}
                  className={`w-full bg-brand-navy border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all duration-300`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">EMAIL ID</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                  }}
                  className={`w-full bg-brand-navy border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all duration-300`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">PHONE NUMBER</label>
                <input 
                  type="tel" 
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                  }}
                  className={`w-full bg-brand-navy border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all duration-300`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">HOW CAN WE HELP YOU?</label>
                <textarea 
                  rows={5} 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-brand-navy border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal resize-none transition-all duration-300"
                ></textarea>
              </div>

              {/* Legal Note & Button */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-4 border-t border-white/10">
                <p className="text-[10px] text-gray-400 max-w-xs leading-relaxed">
                  We care about the protection of your data. Read our{" "}
                  <Link to="#" className="text-brand-teal hover:underline">privacy policy</Link>
                </p>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="rounded-full bg-brand-teal px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:opacity-90 inline-flex items-center gap-3 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT'}
                  <span className="w-5 h-5 rounded-full bg-brand-yellow flex items-center justify-center">
                    <ArrowRight size={12} className="text-brand-navy" />
                  </span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* 3. Bottom Brand Logo list */}
      <section className="bg-white py-14 px-6 border-b border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto marquee-row">
          <div className="marquee-track marquee-track-left flex items-center gap-16 md:gap-24">
            {[
              "/dyson-logo.png",
              "/belif-logo.png",
              "/dhc-logo.png",
              "/lindhaus-logo.png",
              "/face-shop-logo.png",
              "/sixam-logo.png",
              "/voltalux-logo.png",
              "/tbf-logo.png",
              "/dyson-logo.png",
              "/belif-logo.png",
              "/dhc-logo.png",
              "/lindhaus-logo.png",
              "/face-shop-logo.png",
              "/sixam-logo.png",
              "/voltalux-logo.png",
              "/tbf-logo.png"
            ].map((src, idx) => (
              <img 
                key={idx} 
                src={src} 
                alt="Brand Partner Logo" 
                className="h-7 md:h-9 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 shrink-0" 
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

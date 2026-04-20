import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-bg-black flex flex-col items-center justify-center px-6 md:px-24 overflow-x-hidden relative">
      {/* Background large text overlay */}
      <h1 className="hidden xl:block absolute text-[20vw] font-heading text-primary-beige/5 leading-none select-none pointer-events-none whitespace-nowrap">
        GET IN TOUCH
      </h1>

      <div className="relative z-10 w-full max-w-4xl grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-accent-gold text-xs uppercase tracking-[0.5em] mb-4 block">Contact</span>
          <h2 className="text-5xl md:text-8xl font-heading text-primary-beige mb-8">LET'S TALK</h2>
          <p className="text-secondary-text font-body text-sm leading-relaxed opacity-70 mb-12">
            Whether you have a project in mind, want to collaborate on something bold,
            or simply want to say hello — my inbox is always open. Let's build something
            remarkable together.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-accent-gold" />
              <span className="text-primary-beige font-body text-xs tracking-widest">rayeessaquib0022@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-accent-gold" />
              <span className="text-primary-beige font-body text-xs tracking-widest">8340270445</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
          action="https://formsubmit.co/rayeessaquib0022@gmail.com"
          method="POST"
        >
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_subject" value="New Contact Message from Portfolio!" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="relative group">
            <input
              type="text"
              name="name"
              required
              placeholder="YOUR NAME"
              className="w-full bg-transparent border-b border-primary-beige/20 py-4 font-body text-xs text-primary-beige outline-none focus:border-accent-gold transition-colors tracking-widest"
            />
          </div>
          <div className="relative group">
            <input
              type="email"
              name="email"
              required
              placeholder="YOUR EMAIL"
              className="w-full bg-transparent border-b border-primary-beige/20 py-4 font-body text-xs text-primary-beige outline-none focus:border-accent-gold transition-colors tracking-widest"
            />
          </div>
          <div className="relative group">
            <textarea
              name="message"
              required
              placeholder="YOUR MESSAGE"
              rows="4"
              className="w-full bg-transparent border-b border-primary-beige/20 py-4 font-body text-xs text-primary-beige outline-none focus:border-accent-gold transition-colors tracking-widest resize-none"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full justify-center items-center gap-4 py-4 px-10 bg-accent-gold text-bg-black font-heading text-xl uppercase tracking-widest rounded-full transition-all hover:bg-primary-beige"
          >
            SEND MESSAGE
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-bg-black group-hover:translate-x-2 transition-transform">
              →
            </span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
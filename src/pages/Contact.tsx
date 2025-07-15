
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/piyush-kumar-459689212',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    // {
    //   name: 'Dribbble',
    //   url: 'https://dribbble.com/sarahjohnson',
    //   icon: (
    //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.807 2.252 4.063 2.411 6.54-1.286-.273-2.866-.4-4.718-.4-.446 0-.895.013-1.336.039-.174-.402-.36-.801-.56-1.193 2.066-.848 3.815-1.946 4.203-2.986zm-7.568 16.05c-2.064 0-3.967-.674-5.51-1.812 1.186-1.39 3.314-2.317 5.51-2.317s4.324.927 5.51 2.317c-1.543 1.138-3.446 1.812-5.51 1.812z"/>
    //     </svg>
    //   )
    // },
    {
      name: 'Behance',
      url: 'https://www.behance.net/piyushkumar_7',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 2.299-4.123 2.299-2.738 0-4.837-1.467-4.837-4.5 0-3.043 1.959-4.5 4.837-4.5 4.512 0 4.814 4.6 2.671 6.886h-5.123c0 2.171 2.623 2.113 3.472 1.115h1.103zm-4.837-8.114c4.063 0 6.837 1.929 6.837 5.5 0 3.486-2.774 5.5-6.837 5.5-4.5 0-6.837-2.014-6.837-5.5 0-3.571 2.337-5.5 6.837-5.5zm-10.5 1.5c.829 0 1.5.672 1.5 1.5s-.671 1.5-1.5 1.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5z"/>
        </svg>
      )
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://instagram.com/sarahjohnson.design',
    //   icon: (
    //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    //     </svg>
    //   )
    // }
  ];

  return (
    <Layout>
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    I'm always open to discussing new opportunities, creative projects, or potential collaborations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">piyush7sonu@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">Bihar, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Follow Me
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Schedule a Call
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Prefer to talk directly? Book a 30-minute consultation call.
                  </p>
                  <a
                    href="https://calendly.com/sarahjohnson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Book a Call
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

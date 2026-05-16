
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = "d6c74c8a-d406-4958-b67d-1306d9317e50";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out! Your message was delivered successfully.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: "Submission failed",
          description: result.message || "An error occurred during submission. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Unable to connect to the mail server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    { icon: <Mail className="h-4 w-4" />, label: "Email", value: "04.aman.raj@gmail.com", href: "mailto:04.aman.raj@gmail.com", color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400" },
    { icon: <Phone className="h-4 w-4" />, label: "Phone", value: "+91 7665570832", href: "tel:+917665770832", color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" },
    { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Rajasthan, India", href: undefined, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex items-center gap-2 mb-6">
          <span className="w-6 h-0.5 bg-primary rounded-full" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Get in touch</p>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">Contact</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Let's connect and build something great</p>

        {/* Quick contact cards — 3-column grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {contactLinks.map(({ icon, label, value, href, color }) => (
            <div key={label}>
              {href ? (
                <a href={href} className={`flex flex-col items-center text-center gap-2 p-3.5 rounded-2xl ${color} border border-current/10 active:scale-95 transition-transform block h-full`}>
                  <div className="flex-shrink-0">{icon}</div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider opacity-70">{label}</p>
                    <p className="text-[11px] font-medium break-all leading-tight">{value}</p>
                  </div>
                </a>
              ) : (
                <div className={`flex flex-col items-center text-center gap-2 p-3.5 rounded-2xl ${color} border border-current/10 h-full`}>
                  <div className="flex-shrink-0">{icon}</div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider opacity-70">{label}</p>
                    <p className="text-[11px] font-medium break-all leading-tight">{value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-3 mb-6">
          <a href="https://www.linkedin.com/in/aman-raj-226875339/" target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-[#0077B5]/10 text-[#0077B5] text-sm font-medium active:scale-95 transition-transform border border-[#0077B5]/20">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://github.com/04amanrajj" target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-gray-900/10 dark:bg-gray-700/40 text-gray-800 dark:text-gray-200 text-sm font-medium active:scale-95 transition-transform border border-gray-900/20 dark:border-gray-600/40">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>

        {/* Message form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">Send a message</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-medium text-gray-600 dark:text-gray-400">Name</label>
                <Input id="name" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} className="h-10 text-sm rounded-xl" />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-medium text-gray-600 dark:text-gray-400">Email</label>
                <Input id="email" name="email" type="email" placeholder="Your email" required value={formData.email} onChange={handleChange} className="h-10 text-sm rounded-xl" />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="subject" className="text-xs font-medium text-gray-600 dark:text-gray-400">Subject</label>
              <Input id="subject" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} className="h-10 text-sm rounded-xl" />
            </div>
            <div className="space-y-1">
              <label htmlFor="message" className="text-xs font-medium text-gray-600 dark:text-gray-400">Message</label>
              <Textarea id="message" name="message" placeholder="Your message" required rows={4} value={formData.message} onChange={handleChange} className="text-sm rounded-xl resize-none" />
            </div>
            <Button type="submit" className="w-full h-11 rounded-xl font-semibold text-sm shadow-md shadow-primary/20" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : <><Send className="h-4 w-4 mr-2" /> Send Message</>}
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, details, link }) => {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
          {icon}
        </div>
        <h3 className="font-medium mb-2">{title}</h3>
        {link ? (
          <a
            href={link}
            className="text-gray-700 hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {details}
          </a>
        ) : (
          <p className="text-gray-700">{details}</p>
        )}
      </CardContent>
    </Card>
  );
};

export const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's connect! Reach out to me through any of these channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animated-section">
          <a href="mailto:04.aman.raj@gmail.com">
            <ContactCard
              icon={<Mail className="h-6 w-6" />}
              title="Email"
              details="04.aman.raj@gmail.com"
              link="mailto:04.aman.raj@gmail.com"
            />
          </a>
          <a href="tel:+917665770832">
            <ContactCard
              icon={<Phone className="h-6 w-6" />}
              title="Phone"
              details="+91 7665570832"
              link="tel:+917665770832"
            /></a>
          <ContactCard
            icon={<MapPin className="h-6 w-6" />}
            title="Location"
            details="Rajasthan, India"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animated-section">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
              <p className="text-gray-600 mb-6">
                Feel free to connect with me on social media or check out my work on GitHub.
                I'm always open to new opportunities and collaborations!
              </p>
              <div className="flex flex-col space-y-4">
                <a
                  href="https://www.linkedin.com/in/aman-raj-226875339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 rounded-md transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-[#0077B5]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/04amanrajj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/10 hover:bg-gray-800/20 rounded-md transition-colors"
                >
                  <Github className="h-5 w-5 text-gray-800" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

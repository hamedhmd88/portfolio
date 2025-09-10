"use client";

// Import necessary dependencies
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Send,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Array of social media links
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hamedhmd88",
    icon: Github,
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hamed-mahjoobi110",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: Instagram,
    color: "hover:text-pink-400",
  },
  {
    name: "Telegram",
    href: "https://t.me/@hamedmahjoobi",
    icon: MessageCircle,
    color: "hover:text-blue-500",
  },
];

// Validation schema for the contact form
const contactSchema = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email({ message: "Please enter a valid email address" }),
  message: z.string().min(1, { message: "This field is required" }),
});

// Type definition for form data
type ContactFormData = z.infer<typeof contactSchema>;

// Main Contact component
export function Contact() {
  // Initialize form with validation
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toast notification hook
  const { toast } = useToast();

  // Form submission handler
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Section for contact with animated background
    <section
      id="contact"
      className="relative py-20 px-6 overflow-hidden mx-auto"
      aria-labelledby="contact-heading"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 40%, rgba(5, 150, 105, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 60%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute inset-0 opacity-100 "
      />

      {/* Large floating bubbles */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/5 w-72 h-72 bg-gradient-to-br from-primary/12 to-secondary/12 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -25, 0],
          scale: [1, 0.85, 1],
        }}
        transition={{
          duration: 11,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, -35, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-2/3 left-1/3 w-52 h-52 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"
      />

      {/* Existing animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-l from-primary/8 to-secondary/8 rounded-full blur-3xl"
      />

      {/* Container for content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Heading section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">
            Let's <span className="text-primary">Connect</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            I'm always interested in new opportunities and collaborations. Feel
            free to reach out if you'd like to work together!
          </motion.p>
        </motion.div>

        {/* Grid for contact info and form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                Ready to start a project or just want to chat? I'd love to hear
                from you.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
                >
                  <a
                    href="mailto:hmdhamed88@gmail.com"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Mail className="w-5 h-5" />
                    hmdhamed88@gmail.com
                  </a>
                </Button>
              </motion.div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10 ${social.color}`}
                    aria-label={`Visit ${social.name} profile`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <motion.div
                        animate={
                          form.formState.errors.name
                            ? { x: [0, -5, 5, -5, 5, 0] }
                            : {}
                        }
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                      </motion.div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Email field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <motion.div
                        animate={
                          form.formState.errors.email
                            ? { x: [0, -5, 5, -5, 5, 0] }
                            : {}
                        }
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                          />
                        </FormControl>
                      </motion.div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Message field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <motion.div
                        animate={
                          form.formState.errors.message
                            ? { x: [0, -5, 5, -5, 5, 0] }
                            : {}
                        }
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or just say hello!"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                      </motion.div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

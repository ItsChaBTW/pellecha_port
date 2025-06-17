"use client";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { toast } = useToast();
  const router = useRouter();

  // EmailJS configuration - Using your provided credentials
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_8ufxiis';
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_s4hu6mc'; // For receiving messages TO you
  const AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID || 'template_nh5mvkl'; // For auto-reply TO user  
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '__e27zb22t71DSt_3';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Initialize EmailJS with public key
      emailjs.init(PUBLIC_KEY);

      // Debug: Log the configuration being used
      console.log('EmailJS Configuration:', {
        SERVICE_ID,
        TEMPLATE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        PUBLIC_KEY: PUBLIC_KEY.substring(0, 5) + '...' // Only show first 5 chars for security
      });

      // Send the main contact email TO YOU (Charlie) with the user's message
      const mainEmailResult = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          // This should be a template that sends the user's message TO your email
          to_name: 'Charlie Pelle',
          to_email: 'charliepelle5@gmail.com',
          from_name: fullName,
          from_email: email,
          user_name: fullName,
          user_email: email,
          message: message,
          subject: `New Contact Form Message from ${fullName}`,
        }
      );

      console.log('Main email sent:', mainEmailResult);

      // Try to send auto-reply email (skip if it fails)
      try {
        const autoReplyResult = await emailjs.send(
          SERVICE_ID,
          AUTO_REPLY_TEMPLATE_ID,
          {
            // Auto-reply template variables (using your template format)
            name: fullName,
            title: message,
            to_name: fullName,
            to_email: email,
            from_name: 'Charlie Pelle',
            from_email: 'charliepelle5@gmail.com',
            subject: 'Thank you for your message!',
          }
        );
        console.log('Auto-reply sent:', autoReplyResult);
      } catch (autoReplyError) {
        console.warn('Auto-reply failed (not critical):', autoReplyError);
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. You should receive a confirmation email shortly, and I'll get back to you as soon as possible.",
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });

      // Clear form
      setFullName("");
      setEmail("");
      setMessage("");

      // Optional: redirect after success
      const timer = setTimeout(() => {
        router.push("/");
        clearTimeout(timer);
      }, 3000);

    } catch (error: any) {
      console.error('EmailJS error:', error);
      
      // Provide more specific error messages
      let errorMessage = "Something went wrong while sending your message. Please try again or contact me directly at charliepelle5@gmail.com";
      
      if (error.status === 400) {
        if (error.text?.includes('template ID not found')) {
          errorMessage = "Email template configuration error. Please contact me directly at charliepelle5@gmail.com";
        } else if (error.text?.includes('service ID not found')) {
          errorMessage = "Email service configuration error. Please contact me directly at charliepelle5@gmail.com";
        }
      } else if (error.status === 401) {
        errorMessage = "Email authentication error. Please contact me directly at charliepelle5@gmail.com";
      }
      
      toast({
        title: "Error sending message",
        description: errorMessage,
        className: cn(
          "top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"
        ),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="min-w-7xl mx-auto sm:mt-4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="fullname">Full name</Label>
          <Input
            id="fullname"
            placeholder="Your Name"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
      </div>
      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="content">Your Message</Label>
        <Textarea
          placeholder="Tell me about your project..."
          id="content"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          I&apos;ll never share your data with anyone else. You&apos;ll receive an automatic confirmation email.
        </p>
      </div>
      <Button
        disabled={loading}
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <p>Sending message...</p>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            Send Message <ChevronRight className="w-4 h-4 ml-4" />
          </div>
        )}
        <BottomGradient />
      </Button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-brand to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent orange-400 to-transparent" />
    </>
  );
};

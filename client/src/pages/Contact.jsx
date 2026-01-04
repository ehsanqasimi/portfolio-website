import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

function Contact() {
  useEffect(() => {
    // Load Tally script for dynamic height handling
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-green-700">
            Get in Touch
          </h1>
          <p className="mt-3 text-green-900 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-green-100 rounded-lg text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <span className="text-green-900 text-lg font-medium">
                info@luckytech.dev
              </span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-green-100 rounded-lg text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <span className="text-green-900 text-lg font-medium">
                Merrylands West, NSW, Australia
              </span>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/mohamad-ehsan-qasemi-07529b2ba"
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-green-200 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/ehsanqasimi"
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-green-200 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right - Tally Form with Branding Crop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-green-100 shadow-lg bg-white"
            /* The height of the container is slightly smaller than the iframe, 
               and overflow-hidden clips the "Made with Tally" badge at the bottom.
            */
            style={{ height: "480px" }}
          >
            <iframe
              data-tally-src="https://tally.so/embed/7RbeR9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="550" // Set height higher than the container to ensure the badge is in the overflow area
              frameBorder="0"
              title="Contact Form"
              className="absolute top-0 left-0"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;

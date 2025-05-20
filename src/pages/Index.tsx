
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Headset, Lightbulb, ChartBar, Handshake, Users, PhoneCall, Mail, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n';

const Index = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-3xl mx-auto"
      >
        <div className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-lg p-8 sm:p-12">
          <motion.div variants={item} className="text-center mb-8">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">
              {t('title')}
              <span className="block text-xl font-normal text-gray-600 mt-2">
                {t('role')}
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            {t('description')}
          </motion.p>

          <motion.div variants={item} className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[
                { icon: MessageSquare, text: "Clear Communication" },
                { icon: Handshake, text: "Building Trust" },
                { icon: Lightbulb, text: "Tech Knowledge" },
                { icon: ChartBar, text: "Sales Results" },
                { icon: Headset, text: "Consultative Approach" },
                { icon: Users, text: "Client Connection" }
              ].map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/90 rounded-lg p-3 shadow-sm">
                  <Icon className="w-5 h-5 text-gray-700" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              {t('experience')}
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={item}
            className="bg-gray-50/80 rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('skills.title')}
            </h2>

            <div className="space-y-6">
              {Object.keys(t('skills.items', { returnObjects: true })).map((key) => (
                <motion.div
                  key={key}
                  className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {t(`skills.items.${key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`skills.items.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/jose-moya-55820974/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/PaulMoya', label: 'GitHub' },
              { icon: Mail, href: 'mailto:josepaulmoya@gmail.com', label: 'Email' },
              { icon: PhoneCall, href: 'https://cal.com/Jose.Moya', label: 'Schedule a Call' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;

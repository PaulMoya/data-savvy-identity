
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneCall, 
  Mail, 
  Github, 
  Linkedin,
  Building,
  Landmark,
  Building2,
  Network,
  Settings
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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

  const industryIcons = [
    { industry: "Banca", icon: Building },
    { industry: "Gobierno", icon: Landmark },
    { industry: "Retail", icon: Building2 },
    { industry: "Telecomunicaciones", icon: Network },
    { industry: "Optimización de Procesos", icon: Settings },
  ];

  // Fix TS errors by properly typing and ensuring systemsThinkingPoints is an object with keys
  const systemsThinkingPointsEntries = Object.entries(t('systemsThinkingPoints', { returnObjects: true }) as Record<string, string>);
  
  // Fix TS errors by ensuring strategicMapItems is an array
  const strategicMapItems = t('strategicMapItems', { returnObjects: true }) as string[];
  
  // Fix TS errors by ensuring objectiveItems is an array
  const objectiveItems = t('objectiveItems', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-3xl mx-auto"
      >
        <div className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex justify-end mb-4">
            <div className="flex space-x-2">
              <button 
                className={`px-3 py-1 rounded-md ${i18n.language === 'en' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <button 
                className={`px-3 py-1 rounded-md ${i18n.language === 'es' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                onClick={() => changeLanguage('es')}
              >
                ES
              </button>
            </div>
          </div>
          
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
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {industryIcons.map(({ industry, icon: Icon }) => (
                <div key={industry} className="flex items-center gap-2 bg-white/90 rounded-lg p-3 shadow-sm">
                  <Icon className="w-5 h-5 text-gray-700" />
                  <span className="text-sm font-medium">{industry}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-center">
              {t('experience')}
            </p>
          </motion.div>

          {/* Systems Thinking Section */}
          <motion.div variants={item} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('systemsThinking')}
            </h2>
            <div className="space-y-3">
              {systemsThinkingPointsEntries.map(([key, value]) => (
                <div key={key} className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-gray-600">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section - Condensed */}
          <motion.div
            variants={item}
            className="bg-gray-50/80 rounded-xl p-6 mb-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('skills.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(t('skills.items', { returnObjects: true }) as Record<string, any>).map((key) => (
                <motion.div
                  key={key}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {t(`skills.items.${key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(`skills.items.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strategic Map Section */}
          <motion.div variants={item} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('strategicMap')}
            </h2>
            <div className="bg-white/90 rounded-lg p-5 shadow-sm">
              <ul className="space-y-3">
                {strategicMapItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 min-w-5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <p className="text-gray-600 text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Objective Section */}
          <motion.div variants={item} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('objective')}
            </h2>
            <div className="bg-white/90 rounded-lg p-5 shadow-sm">
              <ul className="space-y-3">
                {objectiveItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 min-w-5">
                      <LightbulbIcon className="h-4 w-4 text-amber-500" />
                    </div>
                    <p className="text-gray-600 text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex justify-center space-x-6 mb-6"
          >
            <h3 className="sr-only">{t('contactLinks')}</h3>
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

// Custom icons
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 18h6M12 2v5M12 12v1M12 22v-3M8 9a4 4 0 118 0 4 4 0 01-1.302 2.942c-.521.554-.9 1.258-1.078 2.058h-3.24c-.178-.8-.557-1.504-1.078-2.058A4 4 0 018 9z" />
  </svg>
);

export default Index;

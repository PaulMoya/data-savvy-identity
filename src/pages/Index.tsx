
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';
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

          <motion.p
            variants={item}
            className="text-gray-600 mb-8"
          >
            {t('experience')}
          </motion.p>

          <motion.div
            variants={item}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/jose-moya-55820974/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/PaulMoya', label: 'GitHub' },
              { icon: Mail, href: 'mailto:josepaulmoya@gmail.com', label: 'Email' },
              { icon: Calendar, href: 'https://cal.com/Jose.Moya', label: 'Calendar' }
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

          <motion.div
            variants={item}
            className="bg-gray-50/80 rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('consultation.title')}
            </h2>
            <p className="text-gray-700 mb-6">
              {t('consultation.subtitle')}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Free Consultation Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('consultation.options.free.title')}</h3>
                  <p className="text-2xl font-bold text-gray-800 mb-4">{t('consultation.options.free.price')}</p>
                  <p className="text-gray-600">{t('consultation.options.free.description')}</p>
                </div>
                <div className="mt-6">
                  <a
                    href="https://cal.com/jose.moya/30?user=Jose.Moya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200"
                  >
                    {t('consultation.cta.free')}
                  </a>
                </div>
              </div>

              {/* Paid Consultation Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-2 border-gray-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('consultation.options.paid.title')}</h3>
                  <p className="text-2xl font-bold text-gray-800 mb-4">{t('consultation.options.paid.price')}</p>
                  <p className="text-gray-600">{t('consultation.options.paid.description')}</p>
                </div>
                <div className="mt-6">
                  <a
                    href="https://cal.com/Jose.Moya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200"
                  >
                    {t('consultation.cta.paid')}
                  </a>
                </div>
              </div>
            </div>
            
            <h3 className="font-medium text-gray-800 mb-4">{t('consultation.whatYouGet')}</h3>
            <ul className="space-y-3 mb-6">
              {Object.keys(t('consultation.benefits', { returnObjects: true })).map((key) => (
                <motion.li
                  key={key}
                  className="flex items-start gap-2 text-gray-700"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                >
                  <svg className="w-5 h-5 text-green-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t(`consultation.benefits.${key}`)}</span>
                </motion.li>
              ))}
            </ul>
            
            <p className="text-gray-700 mb-6">
              {t('consultation.perfect')}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;

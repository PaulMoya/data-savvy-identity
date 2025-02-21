
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';

const Index = () => {
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
              José P. Moya
              <span className="block text-xl font-normal text-gray-600 mt-2">
                Data Engineer
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            I design and optimize data operations, automate workflows, and create insightful data outputs. 
            Strong in <span className="font-medium">SQL, Python, cloud technologies</span>, and 
            <span className="font-medium"> Visualizations</span>.
          </motion.p>

          <motion.p
            variants={item}
            className="text-gray-600 mb-8"
          >
            Industry Experience: Banking, Government Finance, Retail, Telecommunications, and BPO's.
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
              30 Minutes Data Assessment Call
            </h2>
            <p className="text-gray-700 mb-6">
              This 30-minute consultation is designed to understand your data operations 
              challenges and determine the right next steps for your project.
            </p>
            
            <h3 className="font-medium text-gray-800 mb-4">What You Get:</h3>
            <ul className="space-y-3 mb-6">
              {[
                'A brief discussion about your project goals and challenges',
                'An initial assessment of your data infrastructure and tech stack',
                'Insights on feasibility, scope, and next steps',
                'Clarity on next steps for your project or recommend alternatives'
              ].map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                >
                  <svg className="w-5 h-5 text-green-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            <p className="text-gray-700 mb-6">
              Perfect for startups, businesses, or individuals looking to enhance their 
              data operations strategy efficiently.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="text-center"
          >
            <a
              href="https://cal.com/jose.moya/30?user=Jose.Moya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Schedule a Free Consultation
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;

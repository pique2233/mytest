import { GlobeAltIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

export default function Navbar({ language = 'en', setLanguage }) {
  const navItems = {
    en: ['Contact Lenses', 'Clothing', 'Shoes', 'Bags'],
    zh: ['美瞳', '服装', '鞋', '包']
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {navItems[language].map((item, index) => (
              <a 
                key={index}
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <button 
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center space-x-1 text-gray-600 hover:text-purple-600"
          >
            <GlobeAltIcon className="w-5 h-5" />
            <span>{language === 'en' ? '中文' : 'EN'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  language: PropTypes.oneOf(['en', 'zh']),
  setLanguage: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  language: 'en'
};
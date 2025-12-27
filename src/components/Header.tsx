import { useNavigation } from '../context/NavigationContext';
import { Page } from '../types';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentPage, navigate } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About' },
    { page: 'journey', label: 'Journey' },
    { page: 'achievements', label: 'Achievements' },
    { page: 'gallery', label: 'Gallery' },
    { page: 'blog', label: 'Blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('home')}
            className="hover:opacity-70 transition-opacity duration-400 text-left"
          >
            <h1 className="text-xl font-bold text-black">Anshul Ruhil</h1>
            <p className="text-sm text-gray-600">Technologist & Entrepreneur</p>
          </button>

          <ul className="flex items-center space-x-8">
            {navItems.map(({ page, label }) => (
              <li key={page}>
                <button
                  onClick={() => navigate(page)}
                  className="relative text-sm font-medium tracking-wide group"
                >
                  <span className={currentPage === page ? 'text-black' : 'text-gray-600'}>
                    {label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#15E0FB] transition-all duration-400 ${
                      currentPage === page ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ bottom: '-4px' }}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOCATIONS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      name: 'Best Rings', 
      path: '/best-london-rings',
      dropdown: [
        { name: 'Top 5 Specialists', path: '/best-london-rings' },
        { name: 'Supplier of the Month', path: '/supplier-of-the-month' }
      ]
    },
    { 
      name: 'Locations', 
      path: '/locations',
      dropdown: LOCATIONS.map(loc => ({ name: loc.name, path: `/locations/${loc.slug}` }))
    },
    { 
      name: 'Knowledge Hub', 
      path: '/knowledge-hub',
      dropdown: [
        { name: "The Men's Guide", path: '/knowledge-hub' },
        { name: 'FAQs', path: '/knowledge-hub' },
        { name: 'Guides & Articles', path: '/knowledge-hub' }
      ]
    },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-50 selection:text-amber-900">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100">
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-24 flex items-center justify-between">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl font-semibold tracking-tight text-zinc-900 leading-none group-hover:text-amber-900 transition-colors serif-heading">Luxury Engagement Rings in London</span>
            <span className="text-[9px] uppercase tracking-[0.6em] text-zinc-400 font-bold mt-1.5 ui-label">The Guide</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <div key={item.path} className="nav-group relative h-24 flex items-center">
                <Link
                  to={item.path}
                  className={`text-[10px] ui-label uppercase tracking-[0.3em] font-semibold transition-colors hover:text-amber-900 ${
                    location.pathname.startsWith(item.path) && item.path !== '/' ? 'text-amber-900' : 'text-zinc-400'
                  }`}
                >
                  {item.name}
                </Link>
                
                {item.dropdown && (
                  <div className="nav-dropdown absolute top-[96px] left-[-20px] bg-white border border-zinc-100 shadow-xl min-w-[260px] py-6 rounded-sm">
                    <div className="grid grid-cols-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="px-8 py-3 text-[10px] ui-label uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-amber-900 hover:bg-zinc-50 transition-all"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-zinc-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </nav>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-zinc-100 absolute w-full left-0 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
            <div className="px-8 py-10 space-y-10">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-[11px] ui-label uppercase tracking-[0.25em] font-bold text-zinc-900 border-b border-zinc-50 pb-3 mb-6"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-6 space-y-5">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-[10px] ui-label uppercase tracking-[0.2em] font-medium text-zinc-400 hover:text-amber-800"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-zinc-900 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24 border-b border-zinc-800 pb-24">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-medium tracking-tight mb-8 serif-heading">Luxury Engagement Rings in London</h3>
              <p className="text-zinc-400 text-lg max-w-md leading-relaxed font-light">
                An understated, editorial guide to the city's finest engagement rings. We research and recommend only the highest-tier jewellers for a considered, stress-free path to ownership.
              </p>
            </div>
            <div>
              <h4 className="text-[9px] ui-label uppercase tracking-[0.4em] font-bold text-zinc-500 mb-10">The Guide</h4>
              <ul className="space-y-5">
                <li><Link to="/best-london-rings" className="text-[15px] text-zinc-300 hover:text-amber-400 transition-colors font-light">Best Specialists</Link></li>
                <li><Link to="/locations" className="text-[15px] text-zinc-300 hover:text-amber-400 transition-colors font-light">London Districts</Link></li>
                <li><Link to="/knowledge-hub" className="text-[15px] text-zinc-300 hover:text-amber-400 transition-colors font-light">The Men's Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[9px] ui-label uppercase tracking-[0.4em] font-bold text-zinc-500 mb-10">Editorial</h4>
              <ul className="space-y-5 text-[15px] text-zinc-300 font-light">
                <li><Link to="/about" className="hover:text-amber-400">Our Standards</Link></li>
                <li><Link to="/about" className="hover:text-amber-400">Transparency</Link></li>
                <li><Link to="/about" className="hover:text-amber-400">Discretion</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] ui-label uppercase tracking-[0.3em] text-zinc-600 font-bold">
            <p>&copy; {new Date().getFullYear()} Luxury Engagement Rings London. The Expert Guide.</p>
            <div className="mt-8 md:mt-0 flex space-x-10">
              <span className="hover:text-zinc-400 cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-zinc-400 cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-zinc-400 cursor-pointer transition-colors">Disclosure</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

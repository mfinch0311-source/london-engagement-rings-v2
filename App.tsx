import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import BestRings from './pages/BestRings';
import LocationsHub from './pages/LocationsHub';
import LocationDetail from './pages/LocationDetail';
import KnowledgeHub from './pages/KnowledgeHub';
import SupplierOfMonth from './pages/SupplierOfMonth';
import About from './pages/About';
import { LOCATIONS } from './constants';

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Luxury Engagement Rings in London | The Guide',
    description: 'A considered guide to London\'s finest engagement rings, with practical recommendations for every stage of your search.'
  },
  '/best-london-rings': {
    title: 'Best London Engagement Ring Specialists | Top Jewellers',
    description: 'Explore our editorial shortlist of trusted London engagement ring specialists and compare what makes each one exceptional.'
  },
  '/locations': {
    title: 'Best London Areas to Buy Engagement Rings',
    description: 'Compare London\'s key jewellery districts, from Mayfair to Chelsea, and choose the location that matches your style and budget.'
  },
  '/knowledge-hub': {
    title: 'Engagement Ring Knowledge Hub | Guides & FAQs',
    description: 'Learn the essentials before you buy: diamond quality, ring styles, budgeting, and common engagement ring questions answered clearly.'
  },
  '/supplier-of-the-month': {
    title: 'Supplier of the Month | London Engagement Rings',
    description: 'Each month we highlight one outstanding London jeweller and explain why their service and craftsmanship stand out.'
  },
  '/about': {
    title: 'About Our Editorial Standards | London Ring Guide',
    description: 'Read how we research, rank, and recommend London engagement ring experts with transparency and independence.'
  }
};

const SeoMeta: React.FC = () => {
  const { pathname } = useLocation();

  const locationMatch = matchPath('/locations/:slug', pathname);
  if (locationMatch) {
    const foundLocation = LOCATIONS.find((location) => location.slug === locationMatch.params.slug);
    const locationName = foundLocation?.name ?? 'London';

    return (
      <Helmet>
        <title>{`Best Engagement Ring Jewellers in ${locationName}`}</title>
        <meta
          name="description"
          content={`Discover top-rated engagement ring jewellers in ${locationName}, London, with trusted recommendations and practical buying advice.`}
        />
      </Helmet>
    );
  }

  const metadata = pageMetadata[pathname] ?? pageMetadata['/'];

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Helmet>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <SeoMeta />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best-london-rings" element={<BestRings />} />
          <Route path="/locations" element={<LocationsHub />} />
          <Route path="/locations/:slug" element={<LocationDetail />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/supplier-of-the-month" element={<SupplierOfMonth />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

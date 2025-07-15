import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

// Initialize AOS
try {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
} catch (e) {
  console.error('AOS initialization error:', e);
}

const Root = () => {
  useEffect(() => {
    // Refresh AOS when route changes
    AOS.refresh();
  }, []);

  return <App />;
};

createRoot(document.getElementById("root")!).render(<Root />);

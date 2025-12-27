import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import Achievements from './pages/Achievements';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';

function AppContent() {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'journey':
        return <Journey />;
      case 'achievements':
        return <Achievements />;
      case 'gallery':
        return <Gallery />;
      case 'blog':
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;

import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

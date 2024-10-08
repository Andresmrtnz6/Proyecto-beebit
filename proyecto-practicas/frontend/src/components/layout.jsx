import Header from './header';
import Footer from './footer';
import '../app/styles/globals.css';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-black flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

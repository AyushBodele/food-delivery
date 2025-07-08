import { Outlet } from 'react-router-dom';
import { Nav } from '../components/navigation';
import { Footer } from '../components/layout';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
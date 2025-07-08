import { Outlet } from 'react-router-dom';
import { CategoryNavbar, Footer } from '../components/layout';

const CategoryLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CategoryNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryLayout;
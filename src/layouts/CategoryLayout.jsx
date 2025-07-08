import { Outlet } from 'react-router-dom';
import { CategoryNav } from '../components/navigation';
import { Footer } from '../components/layout';

const CategoryLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CategoryNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryLayout;
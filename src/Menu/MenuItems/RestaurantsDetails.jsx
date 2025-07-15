import { useParams } from 'react-router-dom';
import MenuHeader from './MenuHeader';
import DealsSection from './DealsSection';
import Restaurant from './Restaurant';

const RestaurantDetails = () => {
  const { slug } = useParams();
  const formattedName = slug.replace(/-/g, ' '); // for clean title

  return (
    <div className="px-6 py-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to {formattedName}
      </h1>

      <MenuHeader />
      <DealsSection />
      <Restaurant />
    </div>
  );
};

export default RestaurantDetails;

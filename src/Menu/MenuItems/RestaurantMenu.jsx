import { useParams } from 'react-router-dom';
import Nav from '../Nav';
import Restaurant from './Restaurant';
import DealsSection from './DealsSection';
import MenuHeader from './MenuHeader';
import Footer from '../../components/Footer';

const RestaurantMenu = () => {
  const { id, slug } = useParams();
  
  return (
    <>
      <Nav />
      <div className="pt-20"> {/* Add padding top to account for fixed nav */}
        <Restaurant restaurantId={id} />
        <DealsSection restaurantId={id} />
        <MenuHeader restaurantId={id} />
      </div>
      <Footer />
    </>
  );
};

export default RestaurantMenu;
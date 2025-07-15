import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useCart } from "../../context/CartContext";

const MenuItemCard = ({ item, restaurantId }) => {
  const { addItem, removeItem, getItemQuantity } = useCart();
  
  const {
    id,
    name,
    isBestseller,
    price,
    rating,
    ratingCount,
    description,
    imageId,
    isCustomizable,
  } = item;

  const quantity = getItemQuantity(id);

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price: Math.round(price / 100),
      image: imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}` : null,
      restaurantId
    });
  };

  const handleRemoveFromCart = () => {
    removeItem(id);
  };

  return (
    <div className="py-5">
      <div className="flex justify-between border-b border-gray-300">
        <div className="flex-1 pr-4">
          {isBestseller && (
            <div className="flex items-center text-red-600 text-xs font-semibold mb-1">
              <span className="mr-1">🔥</span>Bestseller
            </div>
          )}
          <h3 className="text-gray-700 font-bold text-[18px] mb-1">{name}</h3>
          <div className="font-bold text-sm mb-1">₹{Math.round(price / 100) || "—"}</div>
          <div className="flex items-center text-green-600 text-sm mb-2">
            ⭐ <span className="ml-1 font-semibold">{rating}</span>
            <span className="ml-1 text-gray-500">({ratingCount})</span>
          </div>
          <p className="text-sm text-gray-400 leading-snug font-bold text-[16px]">
            {description?.slice(0, 100) || ""}...
            <button className="text-gray-500 ml-1 text-[16px] font-bold">more</button>
          </p>
        </div>

        <div className="w-[180px] flex flex-col items-center relative">
          <img
            src={
              imageId
                ? "https://media-assets.swiggy.com/swiggy/image/upload/" + imageId
                : ""
            }
            alt={name}
            className="w-[160px] h-[140px] object-cover rounded-xl"
          />
          {quantity === 0 ? (
            <button 
              onClick={handleAddToCart}
              className="bg-white text-green-600 border font-bold px-10 py-3 rounded-md shadow text-sm relative bottom-6 hover:bg-green-50 transition-colors"
            >
              ADD
            </button>
          ) : (
            <div className="bg-white border rounded-md shadow text-sm relative bottom-6 flex items-center">
              <button 
                onClick={handleRemoveFromCart}
                className="text-green-600 font-bold px-3 py-3 hover:bg-red-50 transition-colors"
              >
                -
              </button>
              <span className="px-4 py-3 font-bold text-green-600">{quantity}</span>
              <button 
                onClick={handleAddToCart}
                className="text-green-600 font-bold px-3 py-3 hover:bg-green-50 transition-colors"
              >
                +
              </button>
            </div>
          )}
          {isCustomizable && (
            <span className="text-[11px] text-gray-500 relative bottom-6">
              Customisable
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const SwiggyMenu = ({ restaurantId = "53419", filters = {} }) => {
  const [menuCategories, setMenuCategories] = useState([]);

  const fetchMenuItems = async () => {
    const url =
      `/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=${restaurantId}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`;

    try {
      const res = await fetch(url);
      const json = await res.json();

      const groupedCard = json?.data?.cards?.find((c) => c?.groupedCard)?.groupedCard;
      const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const categories = regularCards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      const parsed = categories.map((cat) => ({
        title: cat.card.card.title,
        items: cat.card.card.itemCards.map((i) => i.card.info),
        isOpen: false,
      }));

      setMenuCategories(parsed);
    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const toggleCategory = (index) => {
    const updated = [...menuCategories];
    updated[index].isOpen = !updated[index].isOpen;
    setMenuCategories(updated);
  };

  const filterMenuItems = (items) => {
    return items.filter(item => {
      if (filters.isVegOn && item.itemAttribute?.vegClassifier !== "VEG") return false;
      if (filters.isNonVegOn && item.itemAttribute?.vegClassifier === "VEG") return false;
      if (filters.isBestsellerOn && !item.isBestseller) return false;
      if (filters.searchTerm && !item.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) return false;
      return true;
    });
  };

  return (
    <div className="bg-white w-full max-w-3xl mx-auto px-4">
      {menuCategories.length === 0 ? (
        <p className="text-center text-gray-500 py-8">Loading...</p>
      ) : (
        menuCategories.map((cat, idx) => {
          const filteredItems = filterMenuItems(cat.items);
          
          if (filteredItems.length === 0) return null;
          
          return (
            <div key={idx} className="mb-6">
            <button
              className="w-full flex justify-between items-center py-3 px-2 bg-gray-100 rounded cursor-pointer"
              onClick={() => toggleCategory(idx)}
            >
              <h3 className="text-lg font-bold">{cat.title} ({filteredItems.length})</h3>
              <ChevronDown
                className={`transition-transform ${cat.isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {cat.isOpen && (
              <div className="mt-3">
                {filteredItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} restaurantId={restaurantId} />
                ))}
              </div>
            )}
          </div>
          );
        })
      )}
    </div>
  );
};

export default SwiggyMenu;

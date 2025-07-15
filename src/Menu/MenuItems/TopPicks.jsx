import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";
import SwiggyMenu from "./Menu";

export default function TopPicksSlider({ restaurantId = "53419", filters = {} }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [dishes, setDishes] = useState([]);
  const { addItem, getItemQuantity } = useCart();

  const fetchTopPicks = async () => {
    try {
      const res = await fetch(
        `/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=${restaurantId}`
      );
      const data = await res.json();

      const cards =
        data?.data?.cards?.find((c) => c?.groupedCard)?.groupedCard
          ?.cardGroupMap?.REGULAR?.cards || [];

      const topPicksCard = cards.find(
        (card) => card?.card?.card?.title === "Top Picks"
      );

      const carousel = topPicksCard?.card?.card?.carousel || [];

      const topPicks = carousel.map((item, idx) => ({
        id: idx + 1,
        name: item?.dish?.info?.name || `Top Pick ${idx + 1}`,
        image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${item.creativeId}`,
        price: Math.round((item?.dish?.info?.price || 0) / 100),
        originalPrice: item?.dish?.info?.variantsV2?.pricingModels?.[0]?.strikePrice
          ? Math.round(item?.dish?.info?.variantsV2?.pricingModels?.[0]?.strikePrice / 100)
          : null,
        isVeg: item?.dish?.info?.itemAttribute?.vegClassifier === "VEG",
        isBestseller: item?.dish?.info?.isBestseller || false,
      }));

      setDishes(topPicks);
    } catch (err) {
      console.error("Error fetching Top Picks:", err);
    }
  };

  useEffect(() => {
    fetchTopPicks();
  }, []);

  const checkScroll = () => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    setCanScrollLeft(scrollEl.scrollLeft > 0);
    setCanScrollRight(
      scrollEl.scrollLeft + scrollEl.clientWidth < scrollEl.scrollWidth - 10
    );
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const handleAddToCart = (dish) => {
    addItem({
      id: `top-pick-${dish.id}`,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      restaurantId
    });
  };

  const filteredDishes = dishes.filter(dish => {
    if (filters.isVegOn && !dish.isVeg) return false;
    if (filters.isNonVegOn && dish.isVeg) return false;
    if (filters.isBestsellerOn && !dish.isBestseller) return false;
    if (filters.searchTerm && !dish.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto p-4 pl-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Top Picks</h2>
        <div className="space-x-2 hidden sm:flex">
          <button
            onClick={() => scroll("left")}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              canScrollLeft
                ? "bg-gray-200 hover:bg-gray-300"
                : "bg-gray-100 text-gray-400 cursor-default"
            }`}
            disabled={!canScrollLeft}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              canScrollRight
                ? "bg-gray-200 hover:bg-gray-300"
                : "bg-gray-100 text-gray-400 cursor-default"
            }`}
            disabled={!canScrollRight}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar pb-2"
      >
        {filteredDishes.map((dish) => {
          const quantity = getItemQuantity(`top-pick-${dish.id}`);
          return (
          <div
            key={dish.id}
            className="min-w-[300px] bg-white rounded-2xl shadow relative overflow-hidden flex-shrink-0"
          >
            <div
              className="relative h-[300px] bg-cover bg-center"
              style={{ backgroundImage: `url(${dish.image})` }}
            >
              <img
                src={dish.image}
                alt="dish"
                className="w-full h-full object-cover opacity-0"
              />
              <div className="absolute bottom-3 left-3 text-white font-semibold text-base">
                {dish.originalPrice && (
                  <div className="text-xs text-gray-200 line-through">
                    ₹{dish.originalPrice}
                  </div>
                )}
                ₹{dish.price}
              </div>
              <div className="absolute bottom-3 right-3">
                <button 
                  onClick={() => handleAddToCart(dish)}
                  className="bg-white text-green-600 font-bold px-5 py-1 rounded-md text-sm shadow hover:bg-green-50 transition-colors"
                >
                  {quantity > 0 ? `ADD (${quantity})` : 'ADD'}
                </button>
              </div>
            </div>
          </div>
        );
        })}
      </div>

      <div className="w-full h-[12px] bg-gray-200 shadow-md mt-6 mb-6"></div>

      <SwiggyMenu restaurantId={restaurantId} filters={filters} />
    </div>
  );
}

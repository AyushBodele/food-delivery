import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function DealsSlider({ restaurantId = "53419" }) {
  const scrollRef = useRef(null);
  const [offers, setOffers] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    setCanScrollLeft(scrollElement.scrollLeft > 0);
    setCanScrollRight(
      scrollElement.scrollLeft + scrollElement.clientWidth <
        scrollElement.scrollWidth - 10
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

  useEffect(() => {
    const fetchOffers = async () => {
      const res = await fetch(
        `/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=${restaurantId}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`
      );
      const data = await res.json();

      const offerCard = data?.data?.cards.find(
        (c) =>
          c?.card?.card?.gridElements?.infoWithStyle?.offers !== undefined
      );

      const offersList =
        offerCard?.card?.card?.gridElements?.infoWithStyle?.offers || [];

      const formattedOffers = offersList.map((offer) => ({
        title: offer.info.header,
        code: offer.info.couponCode || offer.info.primaryDescription || "",
        image: offer.info.offerLogo
          ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${offer.info.offerLogo}`
          : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
      }));

      setOffers(formattedOffers);
    };

    fetchOffers();
  }, []);

  return (
    <div className="max-w-[850px] mx-auto p-4 ml-85">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Deals for you</h2>
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
        className="flex space-x-4 overflow-x-auto scroll-smooth pb-1 no-scrollbar"
      >
        {offers.map((offer, index) => (
          <div
            key={index}
            className="min-w-[260px] flex items-center space-x-3 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="text-sm font-bold text-gray-900">
                {offer.title}
              </div>
              <div className="text-xs text-gray-500">{offer.code}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

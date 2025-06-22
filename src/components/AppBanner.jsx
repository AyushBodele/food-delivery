import React from 'react';
import { bannerImg } from "../utils/imagesURL";

const AppBanner = () => {
  return (
    <div
      style={{ height: '100%', width: '100%' }}
      data-testid="get_swiggy_app_qr"
      className="w-full h-full mt-20"
    >
      <img
        alt="Get the Swiggy App banner"
        src={bannerImg}
        style={{ objectFit: 'contain', height: '100%', width: '100%' }}
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default AppBanner;

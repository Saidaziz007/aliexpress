import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube } from "swiper/modules";
import { CARD_IMG } from "../../static";
import { wishlistSlice } from "../../context/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Wishlist = () => {
  let wishlist = wishlistSlice((state) => state.wishlist);
  const addToWishlist = wishlistSlice((state) => state.toggleToWishes);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wishlist">
      <div className="container">
        <div className="wishlist-top">
          <h1>Wishlist ({wishlist.length})</h1>
        </div>
        <div className="wishlist-wrapper">
          {wishlist?.map((el) => (
            <div key={el.id} className="card">
              <div className="card-img">
                <Swiper
                  loop={true}
                  effect={"cube"}
                  grabCursor={true}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  pagination={true}
                  modules={[EffectCube]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={CARD_IMG[el.id]?.img[0]} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={CARD_IMG[el.id]?.img[1]} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={CARD_IMG[el.id]?.img[2]} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={CARD_IMG[el.id]?.img[3]} alt="" />
                  </SwiperSlide>
                </Swiper>
                <button
                  className="card-img-btn"
                  onClick={() => addToWishlist(el)}
                >
                  {wishlist.some((w) => w.id === el.id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>
              <div className="card-info">
                <h2>{el.title}</h2>
                <p>{el.description}</p>
                <div className="card-price">
                  <p>${el.price}</p>
                  <span>${el.price * 2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

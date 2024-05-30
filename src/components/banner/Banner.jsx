import React, { useRef } from "react";
import { FaStar } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../assets/banner-1.png";
import banner2 from "../../assets/banner-2.png";
import banner3 from "../../assets/banner-3.png";
import banner4 from "../../assets/banner-4.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 500)}s`;
  };
  return (
    <div className="hero-all">
      <div className="hero-top">
        <div className="hero-top-left">
          <h2>MONTH OF RED PRICES</h2>
          <p>
            Xitoy brendlari
            <FaStar />
          </p>
        </div>
        <div className="hero-top-right">
          <ImLocation />
          <select className="hero-top-tuman" name="tuman" id="">
            <option value="chilonzor tumani">Chilonzor Tumani</option>
            <option value="uchtepa tumani">Uchtepa Tumani</option>
            <option value="yunusobod tumani">Yunusobod Tumani</option>
            <option value="yashnaobod tumani">Yashnaobod Tumani</option>
            <option value="olmazor tumani">Olmazor Tumani</option>
            <option value="shayxontoxur tumani">Shayxontoxur Tumani</option>
            <option value="bektemir tumani">Bektemir Tumani</option>
            <option value="sergili tumani">Sergili Tumani</option>
            <option value="yakkasaroy tumani">Yakkasaroy Tumani</option>
            <option value="mirzo ulug'bek tumani">Mirzo Ulug'bek Tumani</option>
          </select>
          <select className="hero-top-til" name="til" id="">
            <option value="uz">UZ</option>
            <option value="eng">EN</option>
            <option value="ru">RU</option>
          </select>
          <select className="hero-top-pul" name="pul" id="">
            <option value="som">UZS</option>
            <option value="dollar">USD</option>
          </select>
        </div>
      </div>
      <div className="hero-bottom">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-1">
              <div className="swiper-left">
                <h2>Скидки до 90% уже скоро</h2>
                <p>Распродажа начнётся 1 июня</p>
                <button>
                  Смотреть <FaArrowRightLong />
                </button>
              </div>
              <div className="swiper-right">
                <img src={banner4} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-2">
              <div className="swiper-left">
                <h2>Горящие товары</h2>
                <p>На любой вкус и цвет</p>
                <button>
                  Смотреть <FaArrowRightLong />
                </button>
              </div>
              <div className="swiper-right">
                <img src={banner2} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-3">
              <div className="swiper-left">
                <h2>Скидки до 90%</h2>
                <p>Максимальная выгода живёт здесь</p>
                <button>
                  Смотреть <FaArrowRightLong />
                </button>
              </div>
              <div className="swiper-right">
                <img src={banner3} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-4">
              <div className="swiper-left">
                <h2>Китайские топ-бренды</h2>
                <p>Скидки до 50% на популярные бренды</p>
                <button>
                  Смотреть <FaArrowRightLong />
                </button>
              </div>
              <div className="swiper-right">
                <img src={banner1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

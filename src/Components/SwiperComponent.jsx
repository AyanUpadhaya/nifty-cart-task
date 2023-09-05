import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination,Autoplay } from 'swiper/modules';
import { ToastContainer,toast } from 'react-toastify';
import MealCard from './MealCard';
import 'react-toastify/dist/ReactToastify.css';
const SwiperComponent = ({meals}) => {
    return (
        <div className='container'>
          <ToastContainer
          theme="dark"
          />
      <Swiper
        breakpoints={{
                   
          280: {
            width: 280,
            slidesPerView: 1,
          },
          360: {
            width: 360,
            slidesPerView: 1,
          },
          375: {
            width: 375,
            slidesPerView: 1,
          },
          500: {
            width: 500,
            slidesPerView: 1,
          },

          640: {
            width: 640,
            slidesPerView: 2,
          },
        }}
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        pagination={{
            clickable: true,
        }}
        modules={[FreeMode,Pagination,Autoplay]}
        className="mySwiper pb-3"
      >
        {
            meals.map(meal=><SwiperSlide>
                <MealCard meal={meal} key={meal.idMeal} toast={toast} ></MealCard>
            </SwiperSlide>)
        }
        
      </Swiper>

    </div>
      )
};

export default SwiperComponent;
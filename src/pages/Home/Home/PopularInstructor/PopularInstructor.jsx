import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const PopularInstructor = () => {
    const [popular,setPopular]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/popularinstructor')
    .then(res=>res.json())
    .then(data=>setPopular(data))
  },[])
    return (
        <div>
            <h2 className="text-5xl font-bold text-center py-10">Popular Instructors</h2>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       { 
       popular.map(x=><SwiperSlide key={x._id}>
        <img className="" src={x.image} />
      </SwiperSlide>)
       }
       
        
      </Swiper>
        </div>
    );
};

export default PopularInstructor;
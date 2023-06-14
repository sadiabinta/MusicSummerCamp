import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { useEffect, useState } from "react";

const PopularClass = () => {
  const [classes,setClasses]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/popular')
    .then(res=>res.json())
    .then(data=>setClasses(data))
  },[])
    return (
        <div>
          <h2 className="text-5xl font-bold text-center py-10">Popular Classes</h2>
            <div className="grid grid-cols-3 gap-6">
            {classes.map(x=><div key={x._id} className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={x.classImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {x.className}
      <div className="badge badge-secondary py-5">Popular +{x.availableSeats}</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>)}
            </div>
        </div>
    );
};

export default PopularClass;
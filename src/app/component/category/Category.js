"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryData } from "../../../../Data";
import Image from "next/image";

function Category() {
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow : 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow : 3
          }
        }
      ]
  };
  return (
<div className="container pt-5">
    <div className="slider-container overflow-hidden">
      <Slider {...settings}>
        {CategoryData.map((ele , index)=>{
            return (
                <div key={index}>
              <div className='flex flex-col items-center'>
                <Image className=' p-1 my-2 w-[80px] h-[80px] rounded-full ring-2 ring-gray-300 dark:ring-gray-500' width={80} height={80}  src={ele.image} alt={ele.name}/>
              <h2 className='line-clamp-1'>{ele.name}</h2>
              </div>
                </div>
            )
        })}
      </Slider>
    </div>
</div>
  );
}

export default Category;

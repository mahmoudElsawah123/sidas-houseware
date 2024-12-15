"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HotOfferData } from "../../../../Data";
import Image from "next/image";

function HotOffers() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1285,
            settings: {
              slidesToShow: 4,
            }
          },,
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <div className="container pt-5">
      <div className="slider-container overflow-x-hidden">
        <Slider {...settings}>
          {HotOfferData.map((ele, index) => {
            return (
              <div key={index} className="px-1"> 
                <div className="bg-white w-[170px] h-[242px] py-4 px-2 flex flex-col justify-start items-center gap-5 rounded-lg	">
                  <Image className="w-[92px] h-[92px]" src={ele.image} width={92} height={92} alt={ele.desc} />
                  <p className="line-clamp-2 text-[12px]">{ele.desc}</p>
                  <p className="w-full flex flex-row-reverse">
                    <span className="font-bold">{ele.price}</span>
                    <span className="mr-1 font-bold"> دينار </span>
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default HotOffers;

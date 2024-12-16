"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { ProductsData } from "../../../../Data";
import Image from "next/image";

const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} >
        <GrPrevious size={20} style={{color:"#fff"}}/>
      </div>
    )
    }

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} >
        <GrNext size={20} style={{color:"#fff"}}/>
      </div>
    )
  }

function ExclusiveDscounts() {
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow : 4,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow : 2,
            slidesToScroll: 2
          }
        }
      ]
  };
  return (
    <div className="container my-10 " style={{boxShadow : '0px 1px 4px rgba(0,0,0,.06)'}}>
         <h1 className="font-semibold text-[25px] py-10 px-2">خصومات حصرية  </h1>
        <div className="pb-10">
         <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-10">
         {ProductsData.slice(0,6).map((ele , index)=>{
            return (
                <div key={index}  style={{boxShadow : '0px 2px 12px rgba(0,0,0,.1)'}}>
                  <div className="flex flex-col items-center px-3 p-5">
                  <div className='w-[140px] h-[140px]'>
                    <Image src={ele.image} alt={ele.desc} className='object-contain' style={{maxHeight : '140px'}}/>
                  </div>
                  <div className="px-5 mt-2">
                    <p className="text-[14px] line-clamp-2 mb-1">{ele.desc}</p>
                    <p className="w-full flex flex-row mt-2">
                    <span className="font-bold">{ele.price}</span>
                    <span className="mr-1 font-bold"> دينار </span>
                  </p>
                  </div>
                  </div>
              </div>
              
            )
        })}
         </div>
    </div>
    </div>
  );
}

export default ExclusiveDscounts;


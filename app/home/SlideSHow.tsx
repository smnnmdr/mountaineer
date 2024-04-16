import React from "react";
import img1 from "@/public/images/01.jpg";
import img2 from "@/public/images/02.jpg";
import img3 from "@/public/images/03.jpg";
import img4 from "@/public/images/04.jpg";
interface ISlideShowProps {
  imageSrc: string;
}

const SlideSHow = () => {
  return (
    <div className='carousel w-full'>
      <div id='slide1' className='carousel-item relative w-full'>
        <img src={img1.src} alt='' className='imgStyle' />

        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <img src={img2.src} className='w-full' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <img src={img3.src} className='w-full' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide4' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide4' className='carousel-item relative w-full'>
        <img src={img4.src} className='w-full' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide3' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideSHow;

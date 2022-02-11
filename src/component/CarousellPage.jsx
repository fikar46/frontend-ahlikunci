import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import axios from 'axios';
import { koneksi } from '../environtment';



const CarousellPage = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [carousellItem,setCarousellItem] = useState({});
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  const items = [
    {
      src: carousellItem.carousell_1,
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: carousellItem.carousell_2,
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: carousellItem.carousell_3,
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  useEffect(()=>{
    getCarousellData()
  },[])
  const getCarousellData =()=>{
    axios.post(`${koneksi}/kunci/getcarousell`).then((res)=>{
      setCarousellItem(res.data[0])
    })
  }
  const slides = items.map((item) => {
    if(item.src != null){
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={`https://storage.siapptn.com/image/blog/${item.src}`} alt={item.altText} className="img-fluid-carousell" width="100%" height="700px"/>
        </CarouselItem>
      );
    }else{
      var src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EDummy%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={src} alt={item.altText} className="img-fluid-carousell" width="100%" height="700px"/>
        </CarouselItem>
      );
    }
    
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarousellPage;
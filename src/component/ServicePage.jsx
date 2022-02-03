import React, {  } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ServicePage = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
       <div className="container my-5 p-3">
            <h1 className="text-center py-5">Berikut beberapa layanan yang sudah kami tangani</h1>
            <Slider {...settings}>
          <div>
            <div className="card p-3">
                        <div className="image-card-service">
                            <img src="https://serrurier-laval.ca/wp-content/uploads/2019/08/Car-Keys-Remotes-Replacement-%e2%80%8b.jpg" className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <p>Service Kunci Mobil</p>  
            </div>
          </div>
          <div>
            <div className="card p-3">
                        <div className="image-card-service">
                            <img src="https://serrurier-laval.ca/wp-content/uploads/2019/08/Car-Keys-Remotes-Replacement-%e2%80%8b.jpg" className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <p>Service Kunci Mobil</p>  
            </div>
          </div>
          <div>
          <div className="card p-3">
                        <div className="image-card-service">
                            <img src="https://serrurier-laval.ca/wp-content/uploads/2019/08/Car-Keys-Remotes-Replacement-%e2%80%8b.jpg" className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <p>Service Kunci Mobil</p>  
            </div>
          </div>
          <div>
          <div className="card p-3">
                        <div className="image-card-service">
                            <img src="https://serrurier-laval.ca/wp-content/uploads/2019/08/Car-Keys-Remotes-Replacement-%e2%80%8b.jpg" className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <p>Service Kunci Mobil</p>  
            </div>
          </div>
          <div>
          <div className="card p-3">
                        <div className="image-card-service">
                            <img src="https://serrurier-laval.ca/wp-content/uploads/2019/08/Car-Keys-Remotes-Replacement-%e2%80%8b.jpg" className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <p>Service Kunci Mobil</p>  
            </div>
          </div>
          <div>
          <div className="card p-3">
                        <div className="image-card-service">
                            <img src="https://serrurier-laval.ca/wp-content/uploads/2019/08/Car-Keys-Remotes-Replacement-%e2%80%8b.jpg" className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <p>Service Kunci Mobil</p>  
            </div>
          </div>
          <div>
          <div className="card p-3">
                        <div className="image-card-service">
                            <img src="https://serrurier-laval.ca/wp-content/uploads/2019/08/Car-Keys-Remotes-Replacement-%e2%80%8b.jpg" className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <p>Service Kunci Mobil</p>  
            </div>
          </div>
          <div>
          <div className="card p-3">
                        <div className="image-card-service">
                            <img src="https://serrurier-laval.ca/wp-content/uploads/2019/08/Car-Keys-Remotes-Replacement-%e2%80%8b.jpg" className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <p>Service Kunci Mobil</p>  
            </div>
          </div>
        </Slider>
        </div>

  );
}

export default ServicePage;

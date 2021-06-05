import React from 'react';
import Slider from 'react-slick';
import BrandListDetails from '../BrandListDetails/BrandListDetails';
import './BrandList.css';
import brandLogo1 from '../../../img/brand-logo-1.png';
import brandLogo2 from '../../../img/brand-logo-2.png';
import brandLogo3 from '../../../img/brand-logo-3.png';
import brandLogo4 from '../../../img/brand-logo-4.png';
import brandLogo5 from '../../../img/brand-logo-5.png';
import brandLogo6 from '../../../img/brand-logo-6.png';

const reviewsData = [
    {
        id: "1",
        name: "Brand Logo-1",
        imageURL: brandLogo1
    },


    {
        id: "2",
        name: "Brand Logo-2",
        imageURL: brandLogo2
    },


    {
        id: "3",
        name: "Brand Logo-3",
        imageURL: brandLogo3
    },


    {
        id: "4",
        name: "Brand Logo-4",
        imageURL: brandLogo4
    },


    {
        id: "5",
        name: "Brand Logo-5",
        imageURL: brandLogo5
    },

    {
        id: "6",
        name: "Brand Logo-6",
        imageURL: brandLogo6
    }

]


const BrandList = () => {
            var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 0,
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
        <div style={{padding: "120px 0"}} id="testimonial" >
                     
            <div className="container">
                <div className="row">
                <Slider {...settings}>
                {
                reviewsData.map(review => <BrandListDetails review={review}></BrandListDetails>)
                }
              </Slider>
                </div>

            </div>
        </div>
    );
};

export default BrandList;
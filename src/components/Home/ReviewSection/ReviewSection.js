import React from 'react';
import ReviewSectionDetails from '../ReviewSectionDetails/ReviewSectionDetails';
import './ReviewSection.css';
import Slider from "react-slick";

const reviewsData = [
    {
        id: "1",
        name: "Mark Taylor",
        designation: "Traveler",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageURL: "image/skillied-team-1.jpg"

    },

    {
        id: "2",
        name: "Mark Taylor",
        designation: "Traveler",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageURL: "image/skillied-team-2.jpg"

    },


    {
        id: "3",
        name: "Mark Taylor",
        designation: "Traveler",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageURL: "image/skillied-team-1.jpg"

    },


    {
        id: "4",
        name: "Mark Taylor",
        designation: "Traveler",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageURL: "image/skillied-team-1.jpg"

    },


    {
        id: "5",
        name: "Mark Taylor",
        designation: "Traveler",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageURL: "image/skillied-team-2.jpg"

    },

    {
        id: "6",
        name: "Mark Taylor",
        designation: "Traveler",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageURL: "image/skillied-team-1.jpg"

    }

]



const ReviewSection = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
        <div style={{ padding: "120px 0"}} id="testimonial" >
          <div className="container">

          <div className="col-md-6 col-sm-12 m-auto">
              <h1 style={{ fontSize: "60px", fontWeight: "700" }}>Client Says</h1>
              <p style={{ fontSize: "16px"}} className="text-secondary pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida.</p>
            </div>

          </div>
            
            <div className="container">
              <Slider {...settings}>

                          {
                              reviewsData.map(review => <ReviewSectionDetails review={review} key={review.id}></ReviewSectionDetails>)
                          }
              </Slider>
            </div>
        </div>
    );
};

export default ReviewSection;
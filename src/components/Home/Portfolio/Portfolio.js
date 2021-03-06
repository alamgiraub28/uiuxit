import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Portfolio.css';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import  { ResponsiveMasonry } from "react-responsive-masonry"



const imageData = [
    {
        id: "1",
        name: "all",
        category: "all",
        imageURL: "image/projectNew.jpg",
        liveLink: "www.google.com"
        
    },

    {
        id: "2",
        name: "webDesign",
        category: "webDesign",
        imageURL: "image/project-3.jpg",
        liveLink: "www.google.com"
    },

    {
        id: "3",
        name: "webDesign",
        category: "webDesign",
        imageURL: "image/project-3.jpg",
        liveLink: "www.google.com"
    },

    {
        id: "4",
        name: "wordpress",
        category: "wordpress",
        imageURL: "image/project-2.jpg",
        liveLink: "www.google.com"
    },

    {
        id: "5",
        name: "react",
        category: "react",
        imageURL: "image/project-6.jpg",
        liveLink: "www.google.com"
    },

    {
        id: "6",
        name: "html",
        category: "html",
        imageURL: "image/project-7.jpg",
        liveLink: "www.google.com"
    },

    {
        id: "7",
        name: "uiux",
        category: "html",
        imageURL: "image/project-8.jpg",
        liveLink: "www.google.com"
    },

    {
        id: "7",
        name: "uiux",
        category: "html",
        imageURL: "image/project-9.jpg",
        liveLink: "www.google.com"
    }



]
const Portfolio = () => {

    const [images, setImages] = useState(imageData);



    const handleItem = (categoryItem) => {

        const updatedImage = imageData.filter((currentItem) => {
            return currentItem.category === categoryItem;
        });

        setImages(updatedImage);
    }




    return (
        <div className="container portfolio-section" id="portfolio">
           
            <div className="col-md-6 m-auto col-sm-12 bg-info">
                <h1>Portsdffolio</h1>
                <p className="text-start text-secondary">AlamgirLorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus consectetur reprehenderit, quia mollitia cum?</p>
            </div>

            <div className="text-start py-5 ms-0 menu bg-danger">
                <button className="btn-portfolio project-title menu" onClick={() => setImages(imageData)}>All</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('webDesign')}>Web Design </button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('webDesign')}>App Design</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('wordpress')}>WordPress</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('react')}>React</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('html')}>HTML</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('html')}>UI/UX</button>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                        >
                            
                                {
                                    images.map(element => <PortfolioCard element={element}></PortfolioCard>)
                                }
                            
                        </ResponsiveMasonry>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Portfolio;
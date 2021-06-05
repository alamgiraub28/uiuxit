import React, { useState } from 'react';
import PortfolioCard from '../Portfolio/PortfolioCard/PortfolioCard';
import './PortfolioGallery.css';

const portfolioDatas = [
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

const PortfolioGallery = () => {
    const [images, setImages] = useState(portfolioDatas)

    const handleItem = (categoryItem) => {

        const updatedImage = portfolioDatas.filter((currentItem) => {
            return currentItem.category === categoryItem;
        });

        setImages(updatedImage);
    }

    return (
        <div className="container portfolio-section" id="portfolio">
            <div className="col-md-6 col-sm-12 portfolio-content">
                <h1 className="text-start">Portfolio</h1>
                <p className="text-start text-secondary ms-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus consectetur reprehenderit, quia mollitia cum?</p>
            </div>

            <div className="text-center py-5 ms-0 menu">
                <button className="btn-portfolio project-title menu" onClick={() => setImages(portfolioDatas)}>All</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('webDesign')}>Web Design </button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('webDesign')}>App Design</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('wordpress')}>WordPress</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('react')}>React</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('html')}>HTML</button>
                <button className="btn-portfolio project-title" onClick={() => handleItem('html')}>UI/UX</button>
            </div>
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        {
                            images.map(element => <PortfolioCard element={element}></PortfolioCard>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PortfolioGallery;
import React, { useState } from 'react';
import luxuryVan1 from '../assets/images/luxury-van1.png';
import luxuryVan2 from '../assets/images/luxury-van2.png';
import simpleVan1 from '../assets/images/simple-van1.png';
import simpleVan2 from '../assets/images/simple-van2.png';
import ruggedVan1 from '../assets/images/rugged-van1.png';
import ruggedVan2 from '../assets/images/simple-van2.png';
import './Vans.css';



function Van() {
  const [filter, setFilter] = useState('all');
  const [selectedVan, setSelectedVan] = useState(null);
// this code is for the filter buttons stlying
  const getButtonStyle = (category) => {
    switch (category) {
      case 'Luxury':
        return filter === 'Luxury' ? { backgroundColor: 'black', color: 'white' } : {};
      case 'Rugged':
        return filter === 'Rugged' ? { backgroundColor: 'green', color: 'white' } : {};
      case 'Simple':
        return filter === 'Simple' ? { backgroundColor: 'orange', color: 'white' } : {};
      default:
        return {};
    }
  };



// main page 
  const images = [
    { src: simpleVan1, alt: 'Modest Explorer', category: 'Simple', price: 60, details: 'A simple and reliable van for your everyday adventures.' },
    { src: ruggedVan2, alt: 'Beach Bum', category: 'Rugged', price: 80, details: 'Perfect for rugged terrains, this van is built for outdoor exploration.' },
    { src: luxuryVan2, alt: 'Reliable Red', category: 'Luxury', price: 100, details: 'Travel in style with this high-end, fully-equipped luxury van.' }, 
    { src: simpleVan2, alt: 'Dream Finder', category: 'Simple', price: 65, details: 'An affordable van with all the essentials for your journey.' },
    { src: luxuryVan1, alt: 'The Cruiser', category: 'Luxury', price: 120, details: 'This van offers a luxurious escape into nature with top-tier amenities.' },
    { src: ruggedVan1, alt: 'Green Wonder', category: 'Rugged', price: 70, details: 'Ready to tackle the toughest roads, this van is your ultimate adventure companion.' },
  ];

  const filteredImages = images.filter((image) => {
    if (filter === 'all') return true;
    return image.category === filter;
  });

  const handleVanClick = (van) => {
    setSelectedVan(van);
  };


// buttons

  return (
    <div className="container">
      <h2 className="explore-text">Explore our van options</h2>
      <div className="filter-container">
        <button
          className="luxury"
          style={getButtonStyle('Luxury')}
          onClick={() => setFilter('Luxury')}
        >
          Luxury
        </button>
        <button
          className="rugged"
          style={getButtonStyle('Rugged')}
          onClick={() => setFilter('Rugged')}
        >
          Rugged
        </button>
        <button
          className="simple"
          style={getButtonStyle('Simple')}
          onClick={() => setFilter('Simple')}
        >
          Simple
        </button>
        <button
          className="clear-filter"
          onClick={() => setFilter('all')}
        >
          Clear Filter
        </button>
      </div>
      <div className="image-gallery">
        {filteredImages.map((image, index) => (
          <div key={index} className="van-item" onClick={() => handleVanClick(image)}>
            <img src={image.src} alt={image.alt} />
            <div className="info">
              <div className="info-content">
                <h3>{image.alt}</h3>
                <p className="price">${image.price} <span className="price-day">/day</span></p>
              </div>
              <button className={ image.category.toLowerCase()}>{image.category}</button>
            </div>
          </div>
        ))}
      </div>


{/* This the pop up page code  */}
      {selectedVan && (
        <div className="popup">
          <div className="popup-content">
            <div className="back-button" onClick={() => setSelectedVan(null)}>← Back to all vans</div>
            <div className="van-details">
              <img src={selectedVan.src} alt={selectedVan.alt} />
              <div className="van-info">
                <div className='van-popbtn'>
                <h2 className={selectedVan.category.toLowerCase()}>{selectedVan.category}</h2>
                </div>
                <h2 className='van-name' >{selectedVan.alt}</h2>
                
                 <p className='van-price' >${selectedVan.price}/day</p>
              <p className='van-deets'>{selectedVan.details}</p>
              <button className="rent-button">Rent this van</button>
              </div>
             
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}


export default Van;

             
            


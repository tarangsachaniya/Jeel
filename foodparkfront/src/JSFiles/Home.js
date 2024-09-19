// components/Home.js
import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';

const Home = () => {
  const carouselItems = [
    { src: 'https://img.freepik.com/free-photo/stacks-books-forming-bridge_23-2147690544.jpg?ga=GA1.1.1223322209.1726764459&semt=ais_hybrid', alt: 'Books forming a bridge' },
    { src: 'https://via.placeholder.com/800x400?text=Image+2', alt: 'Placeholder Image 2' },
    { src: 'https://via.placeholder.com/800x400?text=Image+3', alt: 'Placeholder Image 3' },
  ];

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Carousel Component */}
      <div><Carousel items={carouselItems} />
      </div>
      {/* Add more content here if needed */}
    </div>
  );
};

export default Home;

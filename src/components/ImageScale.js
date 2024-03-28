import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';






const ImageContainer = styled.div`
  display: inline-block;
  overflow: hidden;
`;

const Image = styled.img`
   transition: transform 0.3s ease-in-out;
   border-radius: 300px;
  width: 50%;
  display: flex;
  margin: 0 auto;
   @media (min-width: 768px) {
    border-radius: 300px;
  width: 50%;
  display: flex;
  margin: 0 auto;
   }

   @media (min-width: 992px) {
    border-radius: 300px;
  width: 50%;
  display: flex;
  margin: 0 auto;
  position: relative;
  z-index: 3;

   }

   @media (min-width: 1200px) {
    
  border-radius: 100px;
  width: 110%;
  display: flex;
  margin: 0 auto;
  position: relative;
  z-index: 5;
  top: 15px;
   }

`;

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <ImageContainer data-aos="zoom-in">
        <Image
        className='img-1'
          src="./dylan-home-images/MONALISA .png"
          alt="Your Image"
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </ImageContainer>
    </div>
  );
};

export default App;
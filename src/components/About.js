import styled from 'styled-components'
 import { IoArrowDownCircleOutline } from "react-icons/io5";
 import { FaArrowDown } from "react-icons/fa";
 import { IoIosArrowRoundDown } from "react-icons/io";
 import React, { useEffect } from 'react';
 import AOS from 'aos';
 import 'aos/dist/aos.css';
 

const Wrapper =styled.section`
.about{
  padding-top: 3%;
  padding-bottom: 30%;
  background: #000;
  display: flex;
  flex-direction: column-reverse;
}
img{
  width: 90%;
  height: 300px;
  object-fit: cover;
  display: flex;
  margin: 0 auto;
}
.svg-div{
height: 40px;
width: 40px;
border: 2px solid white;
border-radius: 100%;
display: flex;
justify-content: center;
margin-left: 20px;
align-items: center;
}

.text-div{
    color: #fff;
   padding-top: 30%;
    padding-bottom: 0%;

    .p-first{
      margin-left: 20px;
      font-size: 20px;
margin-bottom:5%;
    }
 p{
    margin-left: 20px;
    margin-right: 20px;
    line-height: 1.4;
    font-size: 20px;
    margin-bottom: 1%;
}
.h3{
  padding-top: 8%;
    margin-left: 20px;
    font-size: 20px;  
    display: flex;
    align-items: center;
    
}
h2{
    margin-top: 0;
    margin-bottom: 12%;
    margin-left: 20px;
    font-size: 40px;
    font-family: ${(props)=>props.theme.fam.bold};
line-height: 1.2;
}
svg{
        font-size: 40px;  
        margin-left: 3%;
        font-weight: 300;
  
    }
}


@media (min-width: 768px) {
  .about{
  padding-top: 8%;
  padding-bottom: 0%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
}
img{
  width: 50%;
  height: 400px;
  object-fit: cover;
  display: flex;
  margin: 0 auto;
}
.text-div{
  width: 50%;
    color: #fff;
    padding-top: 0%;
    padding-bottom: 10%;

    .p-first{
      font-size: 20px;
margin-left: 0;
    }
 p{
    margin-left: 0px;
    margin-right: 60px;
    line-height: 1.4;
    font-size: 20px;
    margin-bottom: 1%;
}
.h3{
  padding-top: 8%;
    margin-left: 0px;
    font-size: 20px;  
    display: flex;
    align-items: center;
    svg{
        font-size: 30px;  
        margin-left: 3%;
  
    }
}
h2{
    margin-top: 0;
    margin-bottom: 12%;
    margin-left: 0px;
     margin-right: 30px; 
line-height: 1.3;
    font-size: 40px;
   
}
}
}


@media (min-width: 1200px) {
  .about{
  padding-top: 9%;
  background: #000;
  display: flex;
  align-items: unset;
  flex-direction: row-reverse;
}
img{
  width: 40%;
  height: 500px;
  object-fit: cover;
  display: flex;
  margin-left:70px;
}

.text-div{
  width: 50%;
    color: #fff;
    padding-top: 5%;
    padding-bottom: 10%;
margin-right: 6%;

.p-first{
  font-size: 25px;
  margin-left: 0px;

}
 p{
    margin-left: 0px;
    margin-right: 105px;
    line-height: 1.4;
    font-size: 20.5px;
    margin-bottom: 1%;
}
.h3{
  padding-top: 8%;
    margin-left: 0px;
    font-size: 22px;  
    display: flex;
    align-items: center;
    svg{
        font-size: 70px;  
        margin-left: 3%;
  
    }
}
h2{
    margin-top: 0;
    margin-bottom: 4%;
    margin-left: 0px;
     margin-right: 0px; 
line-height: 1.3;
    font-size: 68px;
   
}
}
}
`
function About() {

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-out', // Animation easing
      delay: 200, // Delay between animations
      mirror: true, // Mirror animations on scroll up/down
    });
  }, []);
  return (
    < Wrapper>
    <div  data-aos="fade-up" className='about'>
     <div    className='text-div'>
     <p className='p-first'>Here is something about</p>
     <h2>Tay Dylan Magwaro</h2> 
     <p>I decided to pursue a career in UI/UX Design because I desired to live creatively and address people's true needs when it came to visual language. My constant goal is to enhance the user’s experience while fusing pragmatism and aesthetics.</p>

     <p>I consider myself to be a delicate balance of process and creativity, fiercely motivated by passion. The subtle yet profound nuances that are deeply ingrained in African cultures, such as patterns, textures, historical writings, symbols, and color as a form of visual communication, have a significant influence on my work.</p>
     <div className='h3'>Download CV  <div className='svg-div'><IoIosArrowRoundDown /></div> </div>
     </div>

     <img    src="./dylan-home-images/dylanpic.png" alt=""/>

     </div>
    </Wrapper>
  )
}

export default About

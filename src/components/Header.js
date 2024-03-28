// import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import styled from 'styled-components'
import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import styled,  { createGlobalStyle } from 'styled-components';
// import CustomFont from '../rimba-andalas/Rimba-Andalas.ttf';


// const GlobalStyle = createGlobalStyle`
//   @font-face {
//     font-family: 'CustomFont';
//     src: url(${CustomFont}) format('truetype');
//   }
// `

const Wrapper=styled.section`
.Header{
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}

svg{
        font-size: 40px;  
        margin-left: 3%;
        font-weight: 300;
  
    }
.img-1{
    display: none;
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

.img-2{
display: none;
    /* width: 50%;
height: 50vh;
object-fit: cover;
margin: 0 auto;
display: flex;
margin-bottom: 10%; */
}

.text{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #fff;
    padding-top: 25%;
    padding-bottom: 15%;

 p{
/*     
    margin-left: 30px;
    margin-right: 76px; */
    font-size: 20px;
    margin-bottom: 9%;
}
.h3{
    margin-left: 30px;
    font-size: 20px;  
    display: flex;
    align-items: center;
    svg{
        font-size: 30px;  
        margin-left: 3%;
  
    }
}
h1{
    margin-top: 0;
    margin-bottom: 12%;
    margin-left: 30px;
    margin-right: 40px;
font-family: ${(props)=>props.theme.fam.bold};
    font-size: 40px;
   
}
}

@media (min-width: 768px) {
    .Header{
    background: #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50vh;
}  
.img-1{
    position: absolute;
    z-index: 1;
    display: block;
    width: 40%;
    height: 58vh;
    object-fit: cover;
top: -139px;
right: 64px;
}

.img-2{
    position: relative;
    top: 9%;
right:-47px;
    z-index: 2;
    width: 50%;
height: unset;
object-fit: unset;
margin: 0 auto;
display: flex;
margin-bottom: 10%;
}


.text{
    color: #fff;
    padding-top: 10%;
    padding-bottom: 0%;

 p{
    margin-left: -20px;
    font-size: 20px;
    margin-bottom: 3%;
}
.h3{
    margin-left: -115px;
    font-size: 20px;  
    display: flex;
    align-items: center;
    svg{
        font-size: 30px;  
        margin-left: 3%;
  
    }
}
h1{
    margin-top: 3%;
    margin-bottom: 8%;
    margin-left: 49px;
    font-size: 40px;
    width: max-content;
   
}
}
.img-div{
    position: relative;
}
}


@media (min-width: 992px) {
    .img-1{
    position: absolute;
    z-index: 1;
    display: block;
    width: 40%;
    height: 58vh;
    object-fit: cover;
top: -245px;
right: 41px;
} 
.img-2{
    position: relative;
    top: 9%;
right:-81px;
    z-index: 2;
    width: 50%;
height: unset;
object-fit: unset;
margin: 0 auto;
display: flex;
margin-bottom: 10%;
}
.text{
    padding-top:16.5%;
    p{
    margin-left: -62px;
    font-size: 20px;
    margin-bottom: 1%;
}
.h3{
    margin-left: -142px;
    font-size: 20px;  
    display: flex;
    align-items: center;
    svg{
        font-size: 30px;  
        margin-left: 3%;
  
    }
}
h1{
    margin-top: 3%;
    margin-bottom: 8%;
    margin-left: 37px;
    font-size: 45px;
    width: max-content;
   
}
}

}

@media (min-width: 1200px) {
    .Header{
    background: #000;
    display: flex;
    flex-direction: row;
    justify-content: unset;
    align-items: unset;
    height: 100vh;
}  

.text{
    color: #fff;
    padding-top: 21%;
    padding-bottom: 0%;
margin-left: 155px;
 p{
    margin-left: -305px;
    font-size: 22px;
    margin-bottom: 5%;
}
.h3{
    margin-left: -400px;
    font-size: 22px;  
    display: flex;
    align-items: center;
    svg{
        font-size: 60px;  
        margin-left: 3%;
        font-weight: 200;
  
    }
}
h1{
    margin-top: 0;
    margin-bottom: 5%;
    margin-left: 0px;
    font-size: 75px;
   
}
}
.img-1{
    position: absolute;
    z-index: 1;
    display: block;
    width: 55%;
    height: 100vh;
    object-fit: cover;
top: 0%;
right: -93.5px;
}

.img-2{
    position: relative;
    top: 9%;
right:-183px;
    z-index: 2;
    width: 73%;
height: unset;
object-fit: unset;
margin: 0 auto;
display: flex;
margin-bottom: 10%;
}
}
`


function Header() {

    useEffect(() => {
        AOS.init({
          duration: 800, // Animation duration
          easing: 'ease-out', // Animation easing
          delay: 100, // Delay between animations
          mirror: true, // Mirror animations on scroll up/down
        });
      }, []);
    
  return (
    <Wrapper>
        <div className='Header'>

 <div data-aos="fade-up" className='text'>
        <p>Hi there! I’m Tay Dylan Magwaro</p>
        <h1> UI/UX Designer</h1>
        <div className='h3'>Discover Tay <div className='svg-div'><IoIosArrowRoundForward /></div> 
 </div>
</div>
  

 <div className='img-div'>
 <img   className='img-1' src="./dylan-home-images/prince.png" alt=""/>
  <img  className='img-2' src="./dylan-home-images/logo1.png" alt=""/>
</div> 
          </div>
    </Wrapper>
  )
}

export default Header

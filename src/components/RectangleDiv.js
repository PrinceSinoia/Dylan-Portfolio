import React from 'react'
import styled from 'styled-components'
import ImageScale from './ImageScale'


const Wrapper=styled.section`
.SECTION{
  padding-top: 15%;
  padding-bottom: 15%;
  background: #000;

}
.main-img{
  display: none;
}
.RectangleDiv{
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.cards{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  background:#1B0B06;
  padding-top: 10%;
  padding-bottom: 13%;


.img-1{
  
  display: none;
}
.img-2{
  border-radius: 300px;
  width: 50%;
  display: flex;
  margin: 0 auto;
}
.p-text-2{
  color: #C6C3C2;
  text-align: center;
    padding: 0 30px;
    line-height: 1.4;
    font-size: 20px;

}

.p{
  color: #C6C3C2;
  text-align: center;
   font-size: 22px;
    font-weight: 900;
    margin-bottom: 3%;
}

a h3{
  position: relative;
  color: #C6C3C2;
    margin-top: 8%;
    margin-bottom: 10%;
    text-align: center;
    font-size: 30px;
    /* padding: 0 20px; */
  &:before{
content: '';
/* z-index: 99; */
width: 225px;
height: 2px;
background-color: #C6C3C2;
position: absolute;
top: 120%;
  } 
}
}

.cards-2{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  background:#1B0B06;
  padding-top: 10%;
  padding-bottom: 13%;


.img-1{
  display: none;
}
.img-2{
  border-radius: 300px;
  width: 50%;
  display: flex;
  margin: 0 auto;
}
.p-text-2{
  color: #C6C3C2;
  text-align: center;
    padding: 0 30px;
    line-height: 1.4;
    font-size: 20px;
}

.p{
  color: #C6C3C2;
  text-align: center;
  font-size: 22px;
  font-weight: 900;
    margin-bottom: 3%;
  }

a h3{
  position: relative;
  color: #C6C3C2;
    margin-top: 8%;
    margin-bottom: 10%;
    text-align: center;
    font-size: 30px;
    /* padding: 0 20px; */
  &:before{
content: '';
/* z-index: 99; */
width: 225px;
height: 2px;
background-color: #C6C3C2;
position: absolute;
top: 120%;
  } 
}
}



@media (min-width: 768px) {
  .SECTION{
    position: relative;
    padding-top: 6%;
  padding-bottom: 10%;
    background: #000;
  }
  .main-img{
  display: block;
  position: absolute;
  z-index: 0;
  top:170px;
  width: 100%;
    height: 430px;
    object-fit: cover;
}
  .RectangleDiv{
    position: relative;
    z-index: 0;
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 0 50px;
}
.cards{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  background:#1B0B06;
  padding-top: 6%;
  padding-bottom: 7%;

.img-1{
  display: none;
}
.img-2{
  border-radius: 300px;
  width: 50%;
  display: flex;
  margin: 0 auto;
}
.p-text-2{
  color: #C6C3C2;
  text-align: center;
    padding: 0 30px;
    line-height: 1.4;
    font-size: 20px;

}

p{
  color: #C6C3C2;
  text-align: center;
    font-size: 20px;
    /* margin-bottom: 1%; */
}

a h3{
  position: relative;
  color: #C6C3C2;
    margin-top: 8%;
    margin-bottom: 12%;
    text-align: center;
    font-size: 30px;
    /* padding: 0 20px; */
  &:before{
content: '';
/* z-index: 99; */
width: 225px;
height: 2px;
background-color: #C6C3C2;
position: absolute;
top: 120%;
  } 
}
}

.cards-2{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  background:#1B0B06;
  padding-top: 6%;
  padding-bottom: 7%;


.img-1{
  display: none;
}
.img-2{
  border-radius: 300px;
  width: 50%;
  display: flex;
  margin: 0 auto;
}
.p-text-2{
  color: #C6C3C2;
  text-align: center;
    padding: 0 30px;
    line-height: 1.4;
    font-size: 20px;

}

p{
  color: #C6C3C2;
  text-align: center;
    font-size: 20px;
    /* margin-bottom: 1%; */
}

a h3{
  position: relative;
  color: #C6C3C2;
    margin-top: 8%;
    margin-bottom: 12%;
    text-align: center;
    font-size: 30px;
    /* padding: 0 20px; */
  &:before{
content: '';
/* z-index: 99; */
width: 225px;
height: 2px;
background-color: #C6C3C2;
position: absolute;
top: 120%;
  } 
}
}
}


@media (min-width: 992px) {
.cards-img-div{
  position: relative;
  margin-bottom:3%;
}
.main-img{
  display: block;
  position: absolute;
  z-index: 0;
  top:254px;
  width: 100%;
    height: 430px;
    object-fit: cover;
}
  .cards{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  background:#1B0B06;
  padding-top: 6%;
  padding-bottom: 4%;

 
.img-2{
  border-radius: 300px;
  width: 50%;
  display: flex;
  margin: 0 auto;
  position: relative;
  z-index: 3;
}
.p-text-2{
  color: #C6C3C2;
  text-align: center;
    padding: 0 30px;
    line-height: 1.7;
    font-size: 22px;

}

.p{
  color: #C6C3C2;
  text-align: center;
    margin-bottom: 4%;
    font-size: 31px;
font-weight:900;
}

a h3{
  position: relative;
  color: #C6C3C2;
    margin-top: 8%;
    margin-bottom: 7%;
    text-align: center;
    font-size: 40px;
  &:before{
content: '';
width: 297px;
height: 2px;
background-color: #C6C3C2;
position: absolute;
top: 120%;
  } 
}
.img-1{
  display: block;
  width: 100%;
  height: 159px;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  &:hover{
    transition-duration: 0.2;
    background: red;
    scale: 2
    
  }
}
}

 
.cards-2{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  background:#1B0B06;
  padding-top: 6%;
  padding-bottom: 4%;


.img-1{
  display: none;
}
.img-2{
  border-radius: 300px;
  width: 50%;
  display: flex;
  margin: 0 auto;
  position: relative;
  z-index: 5;
}
.p-text-2{
  color: #C6C3C2;
  text-align: center;
    padding: 0 30px;
    line-height: 1.7;
    font-size: 22px;

}

.p{
  color: #C6C3C2;
  text-align: center;
    font-size: 31px;
    margin-bottom: 4%;
    font-weight: 900;
}

a h3{
  position: relative;
  color: #C6C3C2;
    margin-top: 8%;
    margin-bottom: 7%;
    text-align: center;
    font-size: 40px;
    /* padding: 0 20px; */
  &:before{
content: '';
width: 297px;
height: 2px;
background-color: #C6C3C2;
position: absolute;
top: 120%;
  } 
}
.img-1{
  display: block;
  width: 100%;
  height: 159px;
  object-fit: cover;
  position: absolute;
  z-index: 1;
}
}
}



@media (min-width: 1200px) {
  .SECTION{
  padding-top: 10%;
  padding-bottom: 6%;
    background: #000;
  }

  .main-img{
  display: block;
  position: absolute;
  z-index: 0;
  top:33px;
  width: 100%;
    height: 530px;
    object-fit: cover;
}
.cards{
  gap: 10px;
  display: flex;
  flex-direction: row;
  margin: 0 ;
  width: 50%;
  background:#1B0B06;
  padding-top: 1%;
  padding-bottom: 2.9%;

.img-2{
  border-radius: 100px;
  width: 110%;
  display: flex;
  margin: 0 auto;
  position: relative;
  z-index: 5;
  top: 22px;
  right: 10px;
}
.p-text-2{
  color: #C6C3C2;
  text-align: left;
    padding: 0 0 px;
    line-height: 1.3;
    font-size: 18px;
    font-weight: 400;
}

.p{
  color: #C6C3C2;
  text-align: center;
    font-size: 17px;
    margin-bottom: 5%;
    margin-right: 30px;
}

a h3{
  position: relative;
  color: #C6C3C2;
    margin-top: 8%;
    margin-bottom: 5%;
    text-align: left;
    margin-left: 30px;
    font-size: 30px;
    /* padding: 0 20px; */
  &:before{
content: '';
/* z-index: 99; */
width: 297px;
height: 2px;
background-color: #C6C3C2;
position: absolute;
top: 120%;
  } 
}
.img-1{
  display: block;
  width: 100px;
  height: 117%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 29px;
}
.cards-img-div{
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
}

.cards-text{
  width: 70%;
}
}
.cards-2{
  gap: 10px;
  display: flex;
  flex-direction: row;
  margin: 0 ;
  width: 50%;
  background:#1B0B06;
  padding-top: 1%;
  padding-bottom: 2.9%;

.img-2{
  border-radius: 100px;
  width: 110%;
  display: flex;
  margin: 0 auto;
  position: relative;
  z-index: 5;
  top: 22px;
}
.p-text-2{
  color: #C6C3C2;
  text-align: left;
    padding: 0 0 px;
    line-height: 1.3;
    font-size: 18px;
    font-weight: 400;
}

.p{
  color: #C6C3C2;
  text-align: center;
    font-size: 17px;
    margin-bottom: 5%;
    margin-right: 30px;
}

a h3{
  position: relative;
  color: #C6C3C2;
    margin-top: 8%;
    margin-bottom: 5%;
    text-align: left;
    margin-left: 30px;
    font-size: 30px;
    /* padding: 0 20px; */
  &:before{
content: '';
/* z-index: 99; */
width: 297px;
height: 2px;
background-color: #C6C3C2;
position: absolute;
top: 120%;
  } 
}
.img-1{
  display: block;
  width: 100px;
  height: 117%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 29px;
}
.cards-img-div{
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
}

.cards-text{
  width: 70%;
}
}

/* .cards-2{
  gap: 10px;
  display: flex;
  flex-direction: row;
  margin: 0 ;
  width: 50%;
  background:#1B0B06;
  padding-top: 1%;
  padding-bottom: 2.9%;

.img-2{
  border-radius: 100px;
  width: 110%;
  display: flex;
  margin: 0 auto;
  position: relative;
  z-index: 5;
  top: 15px;
}
.p-text-2{
  color: #C6C3C2;
  text-align: left;
    padding: 0 0 px;
    line-height: 1.3;
    font-size: 18px;
}

.p{
  color: #C6C3C2;
  text-align: center;
    font-size: 22px;
    margin-bottom: 7%;
    margin-right: 30px;
}

a h3{
  position: relative;
  color: #C6C3C2;
    margin-top: 8%;
    margin-bottom: 0%;
    text-align: left;
    margin-left: 27px;
    font-size: 30px;
    /* padding: 0 20px; */
  /* &:before{
content: ''; */
/* z-index: 99; */
/* width: 297px;
height: 2px;
background-color: #C6C3C2;
position: absolute;
top: 120%;
  } 
}
.img-1{
  display: block;
  width: 100px;
  height: 117%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 50px;
}
.cards-img-div{
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}

.cards-text{
  width: 70%;
}
}  */

.RectangleDiv{
  display: flex;
  flex-direction: row;
  margin: 0 70px;
  gap: 80px;
}
}
`
function RectangleDiv() {
  return (
    <Wrapper>
      <div className='SECTION'>
      <img className='main-img' src="./dylan-home-images/toolRectangle-image.png" alt=""/>

      <div className='RectangleDiv'>

        {/* <div data-aos="fade-right" className='cards'> */}
        <div  className='cards'>
        <div className='cards-img-div'>
        <img className='img-1' src="./dylan-home-images/z-index-image.png" alt=""/>
        {/* <ImageScale/> */}
        <img  className='img-2' src="./dylan-home-images/BEYOND.png" alt=""/>
 </div> 
         <div className='cards-text'>
       <a><h3>Beyond Bechani</h3></a>
       <p className='p'>Head of Design || uncommon.org</p>
<p className='p-text-2'>His work ethic us pristine, and he is easily adjustable to a given situation. His ability to go out of his way to help others has made him stand out. He is one of the most dedicated people I’ve worked with and is willing to put that extra help whenever you need it.</p>

         </div>
        </div>


        {/* <div data-aos="fade-left" className='cards-2'> */}
        <div className='cards-2'>
        <div className='cards-img-div'>
        <img  className='img-1' src="./dylan-home-images/z-index-image.png" alt=""/>
        <img  className='img-2' src="./dylan-home-images/MONALISA .png" alt=""/>
        </div> 
         <div className='cards-text'>
       <a><h3>Beyond Bechani</h3></a>
       <p className='p'>Head of Design || uncommon.org</p>
<p className='p-text-2'>His work ethic us pristine, and he is easily adjustable to a given situation. His ability to go out of his way to help others has made him stand out. He is one of the most dedicated people I’ve worked with and is willing to put that extra help whenever you need it.</p>

         </div>
        </div>


      </div>
      </div>

    </Wrapper>
  )
}

export default RectangleDiv

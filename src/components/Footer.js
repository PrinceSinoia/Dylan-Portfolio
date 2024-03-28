import React from 'react'
// import { IoArrowDownCircleOutline } from "react-icons/io5";
 import { CiBadgeDollar } from "react-icons/ci";
 import { RiLinkedinFill } from "react-icons/ri";
 import { GoMail } from "react-icons/go";
 import { MdLocalPhone } from "react-icons/md";
 import { FiInstagram } from "react-icons/fi";
 import { AiFillInstagram } from "react-icons/ai";



import styled from 'styled-components'
 const Wrapper= styled.footer`
 background: #000;
 padding-top: 20%;
 padding-bottom: 15%;
 img{
  width: 20%;
  height: 130px;
  object-fit: cover;
  display: flex;
  margin: 0 auto;
  padding-bottom: 5%;
 }
.otis{
  margin: 19px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
 .div-svl{
height: 50px;
width: 50px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid white;
 }
 .div-svg{
height: 40px;
width: 40px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid white;
margin-left: 22px;
display: none;

 }
.h4{
  font-size: 18px;
  text-align: center;
  color :white;

}
.quick-p{
 
  color :white;
  text-align: center;
    /* margin-left: 20px; */
    /* margin-right: 20px; */
    line-height: 1.4;
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 1%; 
}
 p{
  color :white;
  text-align: center;
    /* margin-left: 20px; */
    /* margin-right: 20px; */
    line-height: 1.4;
    font-size: 20px;
    margin-bottom: 1%;
}
 h3{
  color :white;
  text-align: center;
    line-height: 1.4;
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 2%;
    margin-top: 6%;
}
    svg{
        font-size: 20px;  
  
    }
.svl{
  font-size: 25px;
  color: white;
  text-align: center;
}
.icon-div{
  gap: 20px;
  margin-top: 9%;
  display: flex;
justify-content:center
}


@media (min-width: 768px) {
  padding-top: 8%;
 padding-bottom: 10%;
 .div-svg{
  display: block;

height: 50px;
width: 50px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid white;
 }
  .footer{
    display: flex;
    align-items: center;
  }
  .quick-p{

  color :white;
  text-align: left;
    line-height: 1.4;
    font-size: 20px;
    margin-bottom: 0%;
    margin-left: 32px;
  }
 p{
  color :white;
  text-align: left;
    line-height: 1.4;
    font-size: 20px;
    margin-bottom: 0%;
    margin-left: 15px;
}
 h3{
  color :white;
  text-align: left;
    font-size: 20px;
    padding-top: 5%;
    margin-bottom: 2%;
    margin-left: 29px;
}
.p-div{
  display: flex;
  gap: 15px;
  margin-left:18px;
}
.text-div{
  width: 63%;
}
.p-div-2{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.svl{
  font-size: 20px;
  
  text-align: center;
}
.icon-div{
  gap: 10px;
  margin-top: 5%;
  display: flex;
justify-content:flex-start;
margin-left: 22px;
}
img{
  width: 17%;
  height: 250px;
  object-fit: cover;
  display: flex;
  margin-left:60px;
 }

 .otis{
  display: flex;
  flex-direction: column;
  gap: 18px;
 }
 .h4{
  display: flex;
  align-items: center;
  gap: 10px;
 }
}


@media (min-width: 992px) {
  .icon-div{
  gap: 25px;
  margin-top: 0%;
  display: flex;
justify-content:unset;
margin-right: 427px;

}
.p-div-2{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.text-div{
  width: 50%;
}
img{
  width: 15%;
  height: 250px;
  object-fit: cover;
  display: flex;
  margin-left:70px;
 }
 .otis{
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-right: 32px;
 }

 .text-div{
  width: 63%;
}
h3{
  color :white;
  text-align: left;
  font-size: 30px;
  font-weight: 900;
      padding-top: 2%;
    margin-bottom: 0%;
    margin-left: 57px;
}
.p-div{
  display: flex;
  gap: 15px;
  margin-left:43px;
}
.quick-p{

color :white;
text-align: left;
  line-height: 1.4;
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 0%;
  margin-left: 57px;
}
}





@media (min-width: 1200px){
  padding-top: 4%;
 padding-bottom: 4%;
  img{
  width: 10%;
  height: 250px;
  object-fit: cover;
  display: flex;
  margin-left:120px;
 }
 p{
  color :white;
  text-align: left;
    line-height: 1.4;
    font-size: 22px;
    margin-bottom: 0%;
}
 h3{
  color :white;
  text-align: left;
    font-size: 23px;
    font-weight: 600;
    padding-top: 0%;
    margin-bottom: 1%;
    margin-left: 25px;
}
.text-div{
  width: 70%;
}
.p-div{
  display: flex;
  gap: 50px;
  margin-left: 10px;
}
.h4{
  display: flex;
  align-items: center;
  font-size: 22px;
  width: max-content;
  gap: 10px;
 }
.p-div-2{
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items:flex-start;

}
.icon-div{
  gap: 20px;
  margin-top: 0%;
  display: flex;
justify-content:unset;
}
svg{
  font-size: 25px;
}

.svl{
  font-size: 25px;
  color: white;
  text-align: center;
}

.div-svl{
  margin-top: 14%;
height: 40px;
width: 40px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid white;
 }
 .div-svg{
height: 40px;
width: 40px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid white;
margin-left: 22px;
 }
 .quick-p{
color :white;
text-align: left;
  line-height: 1.4;
  font-size: 23px;
  margin-bottom: 1%;
  margin-left: 26px;
  font-weight: 600;
}
}
 `
function Footer() {
  return (
    <Wrapper>
     <div className='footer'>
     <img src="./dylan-home-images/footer-logo.png" alt=""/>  
         <div className='text-div'>
         <p className='quick-p'>Quick Links</p>

         <div className='p-div'>
            <p>Discover Tay</p>
            <p>My Portfolio</p>
            <p>Contact Tay</p>
         </div>
         <h3>Contact  Tay</h3>

 <div className='p-div-2'>

 <div className='otis'>
<div className='h4'> <div className='div-svg'><MdLocalPhone /></div>+263  771  733  755</div>
<div className='h4'> <div className='div-svg'><GoMail /></div> magwarodylan5@gmail.com</div>
</div>
<div className='icon-div'>
  <div className='div-svl'>
<RiLinkedinFill  className='svl'/>
</div>

<div className='div-svl'>
<AiFillInstagram  className='svl'/>

</div>
</div>
         </div>
      </div>
     </div> 
    </Wrapper>
  )
}

export default Footer

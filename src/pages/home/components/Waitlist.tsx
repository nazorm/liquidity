import React from 'react';
import styled from 'styled-components';
import globeImage from '../../../assets/globe.jpg'
import { IoIosArrowRoundForward, IoIosArrowForward } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../../../App.css';


export const Waitlist = ()=>{
    return(
<Container>
    <div className='wishlist-container'>
    <img src={globeImage} className='globe-image' alt='globe'/>
<EmailContainer>
    <p>Connecting lives through transactions.<br/>
    Join our community.</p>
    <input type='email' placeholder='johndoe@mail.com' className='waitlister-mail'/>
    <button className='btn btn__waitlist'>Join</button>
</EmailContainer>
    </div>

</Container>
    )

}
const Container = styled.section`
 position: absolute;
 top:160%;
 width: 100%;
 .wishlist-container{
     position:relative;
 }
.globe-image{
  height: 500px;
   width: 100%;
   object-fit:cover;
}
@media (max-width: 1440px) {
    top:175%;
                }
@media (max-width: 768px) {
    top:218%;
  }
`;
const EmailContainer = styled.div`
 position: absolute;
 top:40%;
 left: 10%;
p{
    font-size: 24px;
    font-weight:500;
    color:white;
}
.waitlister-mail{
    padding: 10px;
    width: 300px;
    background-color:transparent;
    color:white;
    border:transparent;
    border-bottom: 2px solid white;
    &::placeholder{
        font-size: 18px;
    font-weight:500;
    }
    &:focus{
     outline:none
    }
}
.btn__waitlist{
    display:inline;
    padding: 8px 25px;
    margin-left:10px;
    &:hover{
        opacity:0;
    }
    @media (max-width: 768px) {
   margin-top:10px;
  }
}
@media (max-width: 768px) {
    top:40%;
    left: 5%;
  }
`;
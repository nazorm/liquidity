import React from 'react'
import { IoIosArrowRoundForward, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import crypto from '../../../assets/crypto.jpg'
import '../../../App.css';


export const Footer = ()=>{
    const date = new Date().getFullYear();
    return (
        <Wrapper>
<ul>
    <li className='logo'>
        Liquidify
    </li>
      <li>
          © {date} Liquidify. 
       
    </li>
</ul>
<ul>
    <span>Product</span>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
</ul>
<ul>
    <span>Use Case</span>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
</ul>
<ul>
    <span>Business</span>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
    <li>Lorem Ipso</li>
</ul>
        </Wrapper>
    )
}

const Wrapper = styled.section`
background-color: #e6e7e9;
width:100%;
margin: 0 auto;
position:absolute;
top:186%;
display:grid;
grid-template-columns: repeat(4, minmax(250px, 1fr));

ul{
    .logo{
    font-size:20px;
    font-weight:900;
    opacity:1;
    }
    span{
font-weight:700;
    }
    li{
        font-weight:400;
        list-style:none;
        opacity:0.8;
        line-height:1.8;
        &:hover{
            cursor:pointer;
            color:grey;
        }
    }
}
@media (max-width: 1440px) {
    top: 205%;
                }
  @media (max-width: 768px) {
    top:247%;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
`;
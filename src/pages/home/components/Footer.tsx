import React from 'react'
import styled from 'styled-components';
import '../../../App.css';


export const Footer = () => {
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
                <li>Overview</li>
                <li>Cloud</li>
                <li>Services</li>
                <li>About us</li>
                <li>Connect</li>
                <li>Support</li>
            </ul>
            <ul>
                <span>Use Case</span>
                <li>Sales Force</li>
                <li>Blog</li>
                <li>Tools</li>
                <li>Newsletter</li>
                <li>Customers</li>
                <li>Use Case</li>
            </ul>
            <ul>
                <span>Business</span>
                <li>Marketing</li>
                <li>Operations</li>
                <li>Partnership</li>
                <li>Customers</li>
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
        margin-bottom: 200px;

    }
    li:nth-child(1){
        margin-top:20px;
    }
    li{
        font-weight:400;
        list-style:none;
        opacity:0.8;
        line-height:1.8;
        margin: 5px 0 ;
        &:hover{
            cursor:pointer;
            color:grey;
        }
    }
}
@media (max-width: 1440px) {
    top: 212%;
                }
  @media (max-width: 768px) {
    top:247%;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
`;
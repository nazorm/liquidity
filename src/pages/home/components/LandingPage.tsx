import React from 'react'
import styled from 'styled-components';
import africanImage from '../../../assets/africa.jpg'
import { IoIosArrowRoundForward, IoIosArrowForward } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../../../App.css';

export const LandingPage = () => {
    let btnIconStyle = { marginLeft: "10px" };
 
    return (
         <Wapper>
            <div className='background-clip'></div>
            <Header>
                <p className='logo'>LIquidify</p>

                <nav className='desktop-nav'>
                    <ul>
                        <li>Products</li>
                        <li>Use Cases</li>
                        <li>Documentation</li>
                        <li>Company</li>
                        <li>Pricing</li>
                    </ul>

                </nav>
                <button className='hamburger'>
                    <GiHamburgerMenu color='white' width='30px' />
                </button>
                <button className='btn btn__desktop'>Sign in {' '}
                    <IoIosArrowForward style={btnIconStyle} />
                </button>

            </Header>
            <IntroOverlay>
                <div className='intro-text-container'>
                    <p className='intro-text-heading'>Payments Infrasctructure for Africans</p>
                    <p className='intro-text'>Thousands of businesses in all scales from startup to
                        unicorns, use liquidity's service for payments and to manage their businesses overseas.
                    </p>
                    <div className='intro-btns'>
                        <button className='btn btn__intro-first'>
                            Start Now
                            {' '}
                            <IoIosArrowForward style={btnIconStyle} />
                        </button>
                        <button className='btn btn__intro-second'>
                            Contact Sales
                            {' '}
                            <IoIosArrowForward style={btnIconStyle} />
                        </button>
                    </div>
                </div>
                <img className='african-image' src={africanImage} alt='afican' />
            </IntroOverlay>
        </Wapper>

    )
}

const Wapper = styled.section`
    position: relative;
    width: 100%;
    .background-clip{
        background-image: linear-gradient(to bottom right, #a960ee, #ff333d, #90e0ff, #ffcb57);
        margin: 0;
        z-index: -1;
        height: 450px;
        width:100%;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 52%, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 52%, 0 100%);
        @media (max-width: 768px) {
            height: 300px;
          }
        }

`;
const Header = styled.div`
    display: flex;
    align-items:center;
    width:90%;
    justify-content: space-between;
    left: 5%;
    position:absolute;
    color:white;
    font-weight: 900;
    top: 0;
    .logo{
    font-size:20px;
    }
.desktop-nav{
    display:flex;
    align-items:center;
    ul{
        display:flex;
        li{
            list-style: none;
            margin: 0 12px 0;
          &:hover{
            opacity:0.8;
              cursor:pointer;
          }
        }
    }
    @media (max-width: 768px) {
    display:none
  }
  
}
.hamburger{
    display:none;
    background-color: transparent;
    border: transparent;
    @media (max-width: 768px) {
    display:block
  }
}
.btn__desktop{
        color:white;
        background-color: #252424;
        opacity:0.8;
        &:hover{
            font-weight: 900;
              cursor:pointer;
              background-color: #373737;
              opacity:0.8;
              border:transparent;
          }
          @media (max-width: 768px) {
            display:none
  }
    }
`;
const IntroOverlay = styled.section`
display:flex;
flex-direction:row;
position:absolute;
width:90%;
left:5%;
top:35%;
   .african-image{
        width: 50%;
        @media (max-width: 768px) {
        display:none
        }
    }
    .intro-text-container{
        text-align:start;
        padding-right:50px;
            .intro-text-heading{
            font-size:70px;
            font-weight:900;
            margin:0;
                @media (max-width: 768px) {
                    font-size:30px;
                }
            }
            .intro-text{
                    font-size:22px;
                    color:grey;
                    margin:10px 0 20px;
                    line-height: 1.8;
                    @media (max-width: 768px) {
                    font-size:18px;
                }
                }
                .intro-btns{
                    margin-top:10px;
                    display:flex;
                    .btn__intro-first{
                        padding: 8px 15px;
                        border-radius: 20px;
                        background-color: black;
                        opacity:1;
                    
                    }
                    .btn__intro-second{
                    margin-left:15px;
                    padding: 10px 15px;
                    border-radius: 20px;
                    background-color: transparent;
                    color:black;
                    &:hover{
                        opacity:0.5
                    }
                }
        }
        @media (max-width: 1024px) {
            left:5%;
            width:75%;
        }
        @media (max-width: 768px) {
            width:96%;
            top:45%;
                }
            }
`;


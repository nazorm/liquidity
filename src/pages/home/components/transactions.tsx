import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import '../../../App.css';



export const Transaction = () => {
    let btnIconStyle = { marginLeft: "10px" };
    return (
        <Container>
            <div className='usecase-container'>
                <div className='intro-text-container'>
                    <p className='intro-text-heading'>Increase your dollar spending limit</p>
                    <p className='intro-text'>Thousands of businesses in all scales from startup to
                        unicorns, use liquidity's service for payments and to manage their businesses overseas.
                    </p>
                    <div className='intro-btns'>
                        <button className='btn btn__intro-second'>
                            Start Liquidating
                            {' '}
                            <IoIosArrowForward style={btnIconStyle} />
                        </button>
                    </div>
                </div>

                <div className='intro-text-container'>
                    <p className='intro-text-heading'>Built for Businesses</p>
                    <p className='intro-text'>Thousands of businesses in all scales from startup to
                        unicorns, use liquidity's service for payments and to manage their businesses overseas.
                    </p>
                    <div className='intro-btns'>
                        <button className='btn btn__intro-second'>
                            Start Liquidating
                            {' '}
                            <IoIosArrowForward style={btnIconStyle} />
                        </button>
                    </div>
                </div>

                <div className='intro-text-container'>
                    <p className='intro-text-heading'>Designed for Everyday People</p>
                    <p className='intro-text'>Thousands of businesses in all scales from startup to
                        unicorns, use liquidity's service for payments and to manage their businesses overseas.
                    </p>
                    <div className='intro-btns'>
                        <button className='btn btn__intro-second'>
                            Start Liquidating
                            {' '}
                            <IoIosArrowForward style={btnIconStyle} />
                        </button>
                    </div>
                </div>
            </div>

        </Container>
    )
}
const Container = styled.section`
-webkit-clip-path: polygon(0 27%, 100% 0, 100% 77%, 0 100%);
clip-path: polygon(0 27%, 100% 0, 100% 77%, 0 100%);
position:absolute;
top:90%;
/* background-color: #002c59; */
background-color: #011f3e;
margin: 0;
z-index: 1;
height: 900px;
width:100%;
.usecase-container{
    margin: 15% auto;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    .intro-text-container{
        text-align:start;
        width: 350px;
            .intro-text-heading{
            font-size:18px;
            font-weight:900;
            color:#02bcf5;
            }
            .intro-text{
                    font-size:18px;
                    color:grey;
                    margin:15px 0;
                    line-height: 1.8;
                }
                .btn__intro-second{
                        padding: 8px 15px;
                        border-radius: 20px;
                        background-color: #02bcf5;
                        color: #002c59;
                        opacity:1;
                    &:hover{
                        opacity:0.5
                    }
                }
                @media (max-width: 768px) {
            margin: 5% auto;
  }
        }
        @media (max-width: 1440px) {
            margin: 25% auto;
                }
}
@media (max-width: 768px) {
    -webkit-clip-path: polygon(0 11%, 100% 0, 100% 77%, 0 100%);
    clip-path: polygon(0 11%, 100% 0, 100% 77%, 0 100%);
    height: 1250px;
    top:96%;
  }

`;
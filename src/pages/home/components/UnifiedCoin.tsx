import React from 'react'
import { IoIosArrowRoundForward, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import crypto from '../../../assets/crypto.jpg'
import '../../../App.css';


let btnIconStyle = { marginLeft: "10px" };

export const UnifiedCoin =()=>{
    return(
        <Wrapper>
         
    <div className='intro-text-container'>
                    <p className='intro-text-heading'>Purchasing Power in the Dollar</p>
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
                <img className='crypto-image' src={crypto} alt='afican' />
        </Wrapper>
    )
}
const Wrapper = styled.section`
display:flex;
flex-direction:row;
margin: 0 auto;
width:90%;
   .crypto-image{
        width: 50%;
        @media (max-width: 768px) {
            width: 100%;
            margin-top: 40px;
                }
    }
    .intro-text-container{
        text-align:start;
        padding-right:50px;
            .intro-text-heading{
            font-size:40px;
            font-weight:900;
            margin:0;
                @media (max-width: 768px) {
                    font-size:30px;
                }
            }
            .intro-text{
                    font-size:22px;
                    color:grey;
                    margin:0 0 15px;
                    line-height: 1.8;
                    @media (max-width: 768px) {
                    font-size:18px;
                }
                }
                .btn__intro-second{
                        padding: 8px 15px;
                        border-radius: 20px;
                        background-color: black;
                        opacity:1;
                    &:hover{
                        opacity:0.5
                    }
                }
        }
        @media (max-width: 768px) {
            flex-direction:column;
                }
`;
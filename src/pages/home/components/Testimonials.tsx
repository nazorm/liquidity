import React from 'react';
import user1 from '../../../assets/user1.jpg'
import user2 from '../../../assets/user2.jpg'
import user3 from '../../../assets/user3.jpg'
import '../../../App.css';
import styled from 'styled-components';

export const Testimonials = ()=>{
    return (
        <Container>
   <div className='usecase-container'>
                <div className='intro-text-container'>
                    <img src={user1} className="userImage"alt='user'/>
                    <p className='intro-text'>Thousands of businesses in all scales from startup to
                        unicorns, use liquidity's service for payments and to manage their businesses overseas.
                    </p>
                    <span className='testifier'>George Town</span>
                </div>

                <div className='intro-text-container'>
                  
                    <img src={user2} className="userImage"alt='user'/>
                    <p className='intro-text'>Thousands of businesses in all scales from startup to
                        unicorns, use liquidity's service for payments and to manage their businesses overseas.
                    </p>
                    <span className='testifier'>George Town</span>
                </div>

                <div className='intro-text-container'>
                <img src={user3} className="userImage"alt='user'/>
                    <p className='intro-text'>Thousands of businesses in all scales from startup to
                        unicorns, use liquidity's service for payments and to manage their businesses overseas.
                    </p>
           <span className='testifier'>George Town</span>
                </div>
            </div>
        </Container>
    )
}
const Container = styled.section`
-webkit-clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 100%);
clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 100%);
position:absolute;
top:125%;
background-color: #e6e7e9;
height: 900px;
width:100%;
.usecase-container{
    margin: 20% auto;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    .intro-text-container{
        text-align:start;
        width: 300px;
        padding: 10px 20px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        .userImage{
          width:70px;
          height:70px;
           margin-top:-10%;
            margin-left: 35%;
                border-radius:50%;
                /* justify-self: center; */
                }
                .intro-text{
                    font-size:18px;
                    color:grey;
                    margin:15px 0;
                    line-height: 1.8;
                }
                .testifier{
            font-size:18px;
            font-weight:900;
            color: black;
            }
            @media (max-width: 768px) {
            margin: 5% auto;
                }
        }
        @media (max-width: 1440px) {
            margin: 35% auto;
                }
        @media (max-width: 768px) {
            margin: 50% auto;
                }
}
@media (max-width: 768px) {
    -webkit-clip-path: polygon(0 28%, 100% 0, 100% 100%, 0 100%);
   clip-path: polygon(0 28%, 100% 0, 100% 100%, 0 100%);
    height: 1200px;
    top:150%;
  }
`;
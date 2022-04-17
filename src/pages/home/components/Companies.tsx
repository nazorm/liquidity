import React from 'react';
import '../../../App.css';
import styled from 'styled-components';




export const Companies = () => {
    const companies = [
        {
            id: 1,
            name: "Company",
            image: "https://logo.clearbit.com/spotify.com"

        },
        {
            id: 2,
            name: "Company",
            image: "https://logo.clearbit.com/stripe.com"

        },
        {
            id: 3,
            name: "Company",
            image: "https://logo.clearbit.com/apple.com"

        },
        {
            id: 4,
            name: "Company",
            image: "https://logo.clearbit.com/amazon.com"

        },
        {
            id: 5,
            name: "Company",
            image: "https://logo.clearbit.com/snapchat.com"

        },
        {
            id: 6,
            name: "Company",
            image: "https://logo.clearbit.com/google.com"

        },

        {
            id: 7,
            name: "Company",
            image: "https://logo.clearbit.com/tesla.com"

        }, {
            id: 8,
            name: "Company",
            image: "https://logo.clearbit.com/hp.com"

        }

    ]
    return (
        <Container>
            {companies.map((company) => {
                return (
                    <div key={company.id}>
                        <img src={company.image} className='company-image' alt='company'/>
                    </div>
                )
            })}
        </Container>
    )
}

const Container = styled.section`
width:60%;
margin: 10% auto 0;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 5px;
div{
    width:350px;
    height:150px;
    display:flex;
    justify-content:center;
    align-items: center;
    @media (max-width: 1440px) {
        width:200px;
  }
  @media (max-width: 768px) {
    width:150px;
  }
 .company-image{
      width:150px;
      height:150px;
  } 
} 

@media (max-width: 1440px) {
    width:65%;
    margin: 200px auto 100px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
@media (max-width: 768px) {
    width:90%;
    
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
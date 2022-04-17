import React from 'react';
import '../../../App.css';
import styled from 'styled-components';




export const Companies = () => {
    const companies = [
        {
            id: 1,
            name: "Company"

        },
        {
            id: 2,
            name: "Company"

        },
        {
            id: 3,
            name: "Company"

        },
        {
            id: 4,
            name: "Company"

        },
        {
            id: 5,
            name: "Company"

        },
        {
            id: 6,
            name: "Company"

        },

        {
            id: 7,
            name: "Company"

        }, {
            id: 8,
            name: "Company"

        }

    ]
    return (
        <Container>
            {companies.map((company) => {
                return (
                    <div key={company.id}>
                        <p>{company.name}</p>
                    </div>
                )
            })}
        </Container>
    )
}

const Container = styled.section`
width:60%;
margin: 0 auto;
margin-top: 20%;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
}

@media (max-width: 1440px) {
    width:65%;
    margin-top: 250px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
@media (max-width: 768px) {
    width:90%;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
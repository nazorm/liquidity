import React from 'react';
import styled from 'styled-components';
import { Companies } from './components/Companies';
import { LandingPage } from './components/LandingPage'
import { UnifiedCoin } from './components/UnifiedCoin'
import { Transaction } from './components/transactions'
import  { Testimonials } from './components/Testimonials'
import { Waitlist } from './components/Waitlist'
import { Footer } from './components/Footer';
export const HomePage = () => {
    return (
        <Wrapper>
            <LandingPage />
            <Companies/>
            <UnifiedCoin/>
            <Transaction/>
            <Testimonials/>
            <Waitlist/>
            <Footer/>
        </Wrapper>
    )
}

const Wrapper = styled.section`
width:100%;
position: relative;
`;
import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/Navbar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutWrapper = styled.div`
  max-width: 800px;
  padding: 0 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 0 50px;
  }

  @media (min-width: 1024px) {
    padding: 0 100px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default class Restro_Details extends Component {
  render() {
    return (
      <>
        <Navbar />
      <Wrapper className='create'>
        <br />
        <AboutWrapper className='about_wrapper'>
          <ScrollToTop />
          <Title>About</Title>
          <Text>
            Welcome to our website, where we help you find the best restaurants in town!

            We understand that finding the perfect dining spot can be a daunting task, especially when there are so many options available. That's why we have created this website to make your search for the best restaurants easier and more convenient.

            Our website uses a sophisticated algorithm to search through a vast database of restaurants in your area and filter them based on various criteria such as cuisine type, price range, ratings, and reviews. We only show you the top-rated restaurants that meet your specific needs and preferences, ensuring that you have a memorable dining experience every time.

            We also provide detailed information about each restaurant, including their menu, operating hours, location, and contact details. You can read reviews and ratings from other customers who have visited the restaurant before, giving you valuable insights into their dining experience.

            Our goal is to make your restaurant search effortless and enjoyable, and we are committed to providing you with the most reliable and up-to-date information about the best restaurants in your area. Whether you're looking for a romantic dinner for two, a family-friendly eatery, or a trendy spot for brunch, we have got you covered.

            Thank you for choosing our website as your go-to guide for finding the best restaurants. Happy dining!
          </Text>
        </AboutWrapper>
      </Wrapper>
      </>
    );
  }
}

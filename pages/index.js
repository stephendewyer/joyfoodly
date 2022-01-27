import Head from 'next/head';
import React, { Fragment } from 'react';
import Image from 'next/image';
import JoyfoodlySlideCarousel from "../components/joyfoodlySlideCarousel";
import Joyfoodly_logo from '../public/images/logo/joyfoodly-logo-full-color.jpg';
import squash_banner from '../public/images/squash_cover_image.png';
import Joyful12_cover from '../public/images/Joyful12_eBook_front-cover.jpg';
import yellow_shadow from '../public/images/yellow_shadow.png';

const IndexPage = () => {

  return (
    <Fragment>
      <Head>
        <title>Joyfoodly - Joyful12! Cookbook</title>
        <meta name="description" content="Joyful12! cookbook by Chef Hollie"/>
        <meta property="og:image" content="../images/Joyful12_eBook_front-cover.jpg" />
        <meta property="og:url" content="https://www.joyfoodly.com" />
      </Head>
      <div className="container" role="main">
        <div className="logo">
          <Image src={Joyfoodly_logo} layout="responsive" alt="Joyfoodly logo" />
        </div>
        <div className="banner">
          <Image src={squash_banner} layout="responsive" alt="squash banner" />
        </div>
        <div className="paragraphs">
          <div className="quote">“Cooking is an expression of love, 
          so put all of your heart into your dishes! 
          You can literally taste the love when it happens.”<br /><br />-Chef Hollie
          <br /><br /></div>
          I&apos;m passionate about teaching children to enjoy the taste of vegetables and fruits and helping busy families with easy recipes, strategies, and videos to make cooking and eating together more enjoyable at home. 
          If you relish the taste of a summer ripe peach and blueberry crumble or savory winter roasted squash pasta bathed in brown butter sauce, you&apos;ll talk about it, dream about it, want to prepare it again and again! That&apos;s what I hope this eBook can do for your family, whether you have children or not. 
          Channel your inner child and join me for a year of playfully eating in season!  
        </div>
        <div className="heading">
          Download my Joyful12! Cookbook
        </div>
        <div className="cookbook">
          <div className="yellow_shadow">
            <Image src={yellow_shadow} layout="responsive" alt="yellow shadow" />
          </div>
          <div className="cookbook_cover bouncy">
            <a href="https://drive.google.com/file/d/1jyc9xCM2cZOj6lePtlwVJXBfQ7JabXS9/view?usp=sharing_eil_m&invite=CIPO-50C&ts=61e8345c" aria-label="link to PDF">
              <Image src={Joyful12_cover} layout="responsive" alt="Joyful12! cover" />
            </a>
          </div>
        </div>
        <div className="button_container">
          <a href="https://drive.google.com/file/d/1jyc9xCM2cZOj6lePtlwVJXBfQ7JabXS9/view?usp=sharing_eil_m&invite=CIPO-50C&ts=61e8345c" className="button" aria-label="link to PDF">
            eBook (PDF)
          </a>
        </div>
        <div className="paragraphs">
            The Joyful 12! is broken into four seasons, each with recipes, videos, buying/storing tips, and ways to engage your kids in the cooking process.   
            There are 144 gluten free vegetarian recipes and over 50 skill building videos to help you master 48 vegetables and fruits in a year.<br /><br />
            Our video library is where yo&apos;ll find all of our videos on how to prep seasonal produce and how to learn easy and healthy cooking methods to make your veggies sing with flavor.
        </div>
        <div className="slider">
          <JoyfoodlySlideCarousel />
        </div>
        <div className="disclaimer">
            This information on this website is designed for educational and entertainment purposes only.  
            It is not intended to be a substitute for informed medical advice or care.  
            You should not use the information found on this website to diagnose or treat any health problems or illnesses.  
            Always seek the advice of a physician or other qualified healthcare providers (such as a pediatric dietician) with any questions regarding a medical condition, nutritional issue or any eating/feeding problem.
        </div>
      </div>
    </Fragment>
  )

}

export default IndexPage;
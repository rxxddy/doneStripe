import React from 'react';
import { useState, useRef, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import ticket from '../images/ticket.png'

import CardIcon from "../images/credit-card.svg";
import ProductImage from "../images/product-image.jpg";

import "../styles.css";
import "../../src/components/components/css/styles.css";

let stripePromise;

var userInputQuantity = 5;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout = () => {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const top = useRef(null);

  const handleTop = () => {
    top.current?.scrollIntoView({behavior: 'smooth'});
  };

  let [num, setNum]= useState(1);
  let incNum =()=>{
    if(num<99)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>1)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);


  const item = {

    price: "price_1ME6MNK1PrYKJW73A7tLoFfy",
    // adjustable_quantity: {enabled: true, minimum: 1, maximum: 99},
    quantity: num,

  };

  const total = num * 45;



  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "December, 31, 2022";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <div className="page-wrapper" ref={top}>
            <section className="section">
                <div className="container is--nav">
                    <div className="grid is--nav">
                        {/* <div className="grid_item is--nav-logo">
                            <a className="nav_logo w-inline-block">
                                <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a048b62e5ac_logo.svg" className="nav_logo-img"/>
                            </a>
                        </div> */}
                        <div className="grid_item is--menu">
                            <a className="menu_link w-inline-block">
                                <p className="menu_p">MAIN</p>
                                <div className="menu_line"></div>
                            </a>
                            <a className="menu_link w-inline-block">
                                <div className="menu_line"></div>
                                <p className="menu_p">INFO</p>
                            </a>
                            <a className="menu_link w-inline-block">
                                <p className="menu_p">PRICES</p>
                                <div className="menu_line"></div>
                            </a>
                            <a className="menu_link w-inline-block">
                                <p className="menu_p">ABOUT</p>
                                <div className="menu_line"></div>
                            </a>
                            <a className="menu_link w-inline-block">
                                <div className="menu_line"></div>
                                <p className="menu_p">CONTACT</p>
                            </a>
                            <div className="menu_button">
                                <p className="menu_p bold">Acquista i biglietti</p>
                                {/* <div className="menu_button-circle">
                                    <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a512462e5af_nav-apple-icon.svg" className="menu_button-icon"/>
                                </div> */}
                            </div>
                        </div>
                        <a className="grid_item is--hamburger w-inline-block">
                            <div className="hamburger_icon"></div>
                        </a>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container is--hero">
                    <div className="grid">
                        <div className="grid_item">
                            <h1>DISCO</h1>
                        </div>
                        <div className="grid_item is--hero-content">
                            <div className="is--3-bp">
                                <p>
                                  DISCO Capitolo 1: <span className="hero_span">La villa dello zio Nathaniel</span>
                                </p>
                            </div>
                            <button className="main-button w-inline-block bgbutton" onClick={handleClick}>
                                <div className="main-button_circle"></div>
                                <p className="main-button_p">Acquista i biglietti</p>
                            </button>
                            <div className="hero_album">
                                <div className="hero_circle is--img"></div>
                                <a className="hero_circle is--link w-inline-block">
                                    <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a5e9462e5ad_hero-arrow.svg" className="hero_arrow"/>
                                </a>
                            </div>
                        </div>
                        <div className="grid_item is--hero-img1">
                            <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a277f62e5b7_hero-image1.jpeg" className="hero_photo1"/>
                        </div>
                        <div className="grid_item is--hero-img2">
                            {/* <div className="is--3-bp is--40">
                                <h4 className="heading-3">©2021</h4>
                                <p>More than you ask, think or imagine According to His power working in us</p>
                            </div> */}
                            <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a15e962e5b4_hero-image2.jpeg" className="hero_photo2"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container is--wide">
                    <div className="grid">
                        <div className="grid_item is--banner_left">
                            <h6>The new album from Elevation Worship &amp;Maverick City</h6>
                        </div>
                        <div className="grid_item is--banner_right">
                            <div className="banner_item is--first">
                                <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3aeaf162e5a7_banner-icon1.svg" className="banner_icon"/>
                                <p>You would cross an ocean so I wouldn’t drown</p>
                            </div>
                            <div className="banner_item">
                                <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3abb4b62e5a4_banner-icon2.svg" className="banner_icon"/>
                                <p>You would cross an ocean so I wouldn’t drown</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="merch">
                        <div className="grid is--merch-column">
                            <div className="grid_item is--merch-title">
                                <h3>acquistare i biglietti</h3>
                                <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3aa55362e5a5_merch-underline.svg" className="image"/>
                            </div>
                            <div className="grid_item is--merch-link">
                                <a className="merch_link is--active w-inline-block">
                                    <h5 id="day">{days < 10 ? "0" + days : days}</h5>
                                    <p className="bold">days</p>
                                </a>
                            </div>
                            <div className="grid_item is--merch-link">
                                <a className="merch_link w-inline-block">
                                    <h5 id="hour">{hours < 10 ? "0" + hours : hours}</h5>
                                    <p className="bold">hours</p>
                                </a>
                            </div>
                            <div className="grid_item is--merch-link">
                                <a className="merch_link w-inline-block">
                                    <h5 id="minute">{minutes < 10 ? "0" + minutes : minutes}</h5>
                                    <p className="bold">minutes</p>
                                </a>
                            </div>
                            <div className="grid_item is--merch-link">
                                <a className="merch_link w-inline-block">
                                    <h5 id="second">{seconds < 10 ? "0" + seconds : seconds}</h5>
                                    <p className="bold">seconds</p>
                                </a>
                            </div>
                            {/* <div className="grid_item is--merch-link">
                                <a className="merch_link w-inline-block">
                                    <h5>05</h5>
                                    <p className="bold">Signs</p>
                                </a>
                            </div> */}
                        </div>
                        <div className="grid is--merch-column2">
                            <div className="grid_item is--merch-img1">
                                <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a5fee62e5b0_merch-photo1.jpeg" className="merch_img1"/>
                            </div>
                            <div className="grid_item is--merch-img2">
                                <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a5b2962e5b6_merch-photo2.jpeg" className="merch_img2"/>
                            </div>
                            <div className="grid_item is--merch-img3">
                                <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a095e62e5b9_merch-photo3.jpeg" className="merch_img3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container is--wide">
                    <div className="card">
                        <div className="card_content">
                            <h2>
                                Old<br/>
                                Church<br/>Basement
                            </h2>
                            <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a115962e5b2_sub-logos.png" className="card_logos"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="grid is--resources">
                        <a className="resources_text is--main-colour w-inline-block">
                            <h1 className="display">Music Resources</h1>
                            <div className="resources_circle">
                                <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3af04f62e59c_resource-arrow1.svg" className="resources_arrow is--light-colour"/>
                            </div>
                            <h1 className="display">Music Resources</h1>
                        </a>
                        <a className="resources_text is--light-colour w-inline-block">
                            <h1 className="display">Music Resources</h1>
                            <div className="resources_circle is--light-colour">
                                <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a7b0a62e59e_resource-arrow2.svg" className="resources_arrow is--main-colour"/>
                            </div>
                            <h1 className="display">Music Resources</h1>
                        </a>
                        <div className="grid_item is--resources">
                            <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a032062e5b8_resources.jpeg"  className="resources_img"/>
                        </div>
                    </div>
                </div>
            </section>

            <div ref={ref} className="checkout">
              <div className="checkoutLeft">
                <img src={ticket} className="ticket"/>
              </div>
              <div className="checkoutRight">
                <div className="style1">
                  <h1 className="tickets">BIGLIETTI</h1>
                  <h1 className="checkout-price">€{total}</h1>
                  <div className="quantity-input">

                    <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decNum}>—</button>

                    <input type="text" className="quantity-input__screen" value={num} onChange={handleChange}/>
                    
                    <button className="quantity-input__modifier quantity-input__modifier--right" onClick={incNum}>＋</button>

                  </div>
                  <button
                    className="checkout-button"
                    onClick={redirectToCheckout}
                    disabled={isLoading}
                  >
                    <div className="text-container">
                      <div className="text">{isLoading ? "Carico..." : "paga"}</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid is--footer">
                        <div className="grid_item">
                            <h4>
                                FOLlow ELEVATION <br/>WORSHIP
                            </h4>
                        </div>
                        <div className="grid_item is--social">
                            <a className="social_link w-inline-block">
                                <div className="social_circle">
                                    <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a4e2462e59d_footer-facebook.svg" className="social_icon"/>
                                </div>
                            </a>
                        </div>
                        <div className="grid_item is--social">
                            <a className="social_link w-inline-block">
                                <div className="social_circle">
                                    <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3ab8f762e5a2_footer-instagram.svg" className="social_icon"/>
                                </div>
                            </a>
                        </div>
                        <div className="grid_item is--social">
                            <a className="social_link w-inline-block">
                                <div className="social_circle">
                                    <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a243d62e5a0_footer-youtube.svg" className="social_icon"/>
                                </div>
                            </a>
                        </div>
                        <div className="grid_item is--social">
                            <a className="social_link w-inline-block">
                                <div className="social_circle">
                                    <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3ac46762e5a6_footer-spotify.svg" className="social_icon"/>
                                </div>
                            </a>
                        </div>
                        <div className="grid_item is--social">
                            <a className="social_link w-inline-block">
                                <div className="social_circle">
                                    <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a50c162e5a3_footer-apple.svg" className="social_icon"/>
                                </div>
                            </a>
                        </div>
                        <button className="grid_item is--footer_top w-inline-block bgbutton" onClick={handleTop}>
                            <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3af18b62e5b1_footer-arrow.svg" className="footer_top-img"/>
                        </button>
                        <div className="grid_item is--footer-copyright">
                            <p>2021 album - Old Church Basement</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

      
    </div>
  );
};

export default Checkout;
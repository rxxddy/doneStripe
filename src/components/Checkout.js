import React from 'react';
import { useState, useRef, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import ticket from '../images/ticket.png';
import logo from '../images/logo.png';
import greek1 from '../images/greek1.png';
import gsap from "gsap";
import banner from "../images/banner.png";
import bghex from "../images/bghex.png";
import buy from "../images/buy.png";
import arrow from "../images/arrow.png";
import fashion from "../images/fashion.png";
import disco from "../images/disco.png";


import "../styles.css";
import "../../src/components/components/css/styles.css";
import { useIntersection } from 'react-use';
import { ScrollTrigger } from 'react-gsap';

let stripePromise;

var userInputQuantity = 5;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};





const Checkout = () => {

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "/src/components/jquery-3.5.1.min.dc5e7f18c8.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "/src/components/webflow.353aee397.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

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

    price: "price_1MFZJ5K1PrYKJW736SkLpbx4",
    // adjustable_quantity: {enabled: true, minimum: 1, maximum: 99},
    quantity: num,

  };

  const total = num * 300;



  const checkoutOptions = {
    lineItems: [item],
    mode: "subscription",
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


//   window.onscroll = function (e) {
//     var vertical_position = 0;
//     if (pageYOffset)//usual
//       vertical_position = pageYOffset;
//     else if (document.documentElement.clientHeight)//ie
//       vertical_position = document.documentElement.scrollTop;
//     else if (document.body)//ie quirks
//       vertical_position = document.body.scrollTop;
  
//     var your_div = document.getElementById('scroll');
//     your_div.style.top = (vertical_position + 200) + 'px';//200 is arbitrary.. just to show you could now position it how you want
//   }


  return (
    
      <div className="page-wrapper" ref={top}>



            <section className="section">
                    
                <div className="container is--nav ">
                    <div className="grid2 is--nav center">

                        <div className="grid_item is--menu vercent">


                                <div className="left1">
                                    <div className="left">
                                        <p className="menu_p menu_link w-inline-block">MAIN</p>
                                    </div>


                                    <div className="left">
                                        <p className="menu_p w-inline-block">INFO</p>
                                    </div>
                                </div>
                           
                                <a className="nav_logo w-inline-block  w-inline-block center">
                                    <img src={logo} className="nav_logo-img"/>
                                </a>

                            <div className="right1">
                                <div className="right">
                                    <p className="menu_p menu_link w-inline-block">ABOUT</p>
                                </div>


                                <div className="right">
                                    <p className="menu_p w-inline-block">CONTACT</p>
                                </div>
                            </div>


                        </div>


                        <a className="grid_item is--hamburger w-inline-block">
                            <div className="hamburger_icon"></div>
                        </a>
                    </div>
                </div>
            </section>
            <section className="section ">
                <div className="container is--hero">
                    <div className="grid borderio">

                        <div className="grid_item">
                            <h1 className="naming">HIMEROS <br/> CLUB</h1>
                            <img src={bghex} className="bghex" />
                        </div>
                        <div className=" grid_item is--hero-img1 ">
                 
                            <div className="is--3-bp">
                                <p>
                                  DISCO Capitolo 1: <span className="hero_span">La villa dello zio Nathaniel</span>
                                </p>
                            </div>
                            <button className="main-button w-inline-block bgbutton buttonwidth" onClick={handleClick}>
                              
                                <p className="main-button_p buybuttontop2">Acquista i biglietti </p>
                                <img src={arrow} className="buybuttontop"/>
                            </button>
                    
                        </div>
                        
                    </div>
                </div>
            </section>


            <img src={banner} loading="eager" width="514" sizes="90vw" alt="true" className="image-135"></img>

            
            <section className="section mt">
                <div className="container is--wide">
                    <div className="home-header_cards-wrapper cardtext">
                        <div className="home-header_card">
                            <div className="home-header_card-content-wrapper">
                                <div className="home-header_card-texts-wrapper">
                                    <h2 className="home-header_card-heading">Artistic</h2>
                                    <div className="home-header_card-text">Explore top tools to gain inspiration, optimise workflow, increase pipeline, monitor marketing performance, manage finances and more, to grow your business online. </div>
                                    </div>
                                </div>
                                <img src={disco} loading="lazy" alt="" className="home-header_card-image" />
                            </div>
                            <div className="home-header_card">
                                <div className="home-header_card-content-wrapper">
                                    <div className="home-header_card-texts-wrapper">
                                        <h2 className="home-header_card-heading">Mission</h2>
                                        <div className="home-header_card-text">Not sure of the right tool for you? Our wealth of comparisons, top tips and how-to's will help youdecide which online tool will be pivotal for your business.</div>
                                        </div>
                                    </div>
                                    <img src={fashion} loading="lazy" alt="" className="home-header_card-image" />
                                </div>
                            </div>


                    {/* <div class="home-header_card">
                        <div class="home-header_card-content-wrapper">
                            <div class="home-header_card-texts-wrapper">
                                <h2 class="home-header_card-heading">Tools</h2>
                                <div class="home-header_card-text">Explore top tools to gain inspiration, optimise workflow, increase pipeline, monitor marketing performance, manage finances and more, to grow your business online. 
                                </div>
                            </div>
                            <a href="/tools" class="button is-card w-inline-block">
                                <div>View tools</div>
                                <div class="tools-button-icon hide w-embed">
                                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.6105 8.89856L15.3603 1.77426C14.6382 1.15059 13.5 1.65689 13.5 2.6257V6.37818C5.97052 6.46439 0 7.97343 0 15.109C0 17.9891 1.85536 20.8423 3.90623 22.334C4.54622 22.7995 5.45831 22.2152 5.22234 21.4606C3.09684 14.6632 6.23049 12.8586 13.5 12.754V16.875C13.5 17.8453 14.6391 18.3494 15.3603 17.7264L23.6105 10.6014C24.1295 10.1532 24.1302 9.34739 23.6105 8.89856V8.89856Z"></path>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <img src="https://assets.website-files.com/61e61bc712a95079885fb13f/62985b5dcc5210f337e9f484_header-card_image-tools.svg" loading="lazy" alt="" class="home-header_card-image" />
                        <a href="/tools" class="home-header_card-link w-inline-block">
                            <div class="hide">Link to the tools page</div>
                        </a>
                    </div> */}
                </div>
            </section>
            <section className="section mt">
                <div className="container">
                    <div className="merch">
                        <div className="grid is--merch-column">
                        
                            <div className="grid_item is--merch-title">
                                <h5>La discoteca inizierà tra poco:</h5>
                                
                                
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
                                <img src="https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHRjbHVifGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="merch_img1"/>
                            </div>
                            <div className="grid_item is--merch-img2">
                                <img src="https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg" className="merch_img2"/>
                            </div>
                            <div className="grid_item is--merch-img3">
                                <img src="https://thumbs.dreamstime.com/b/crowd-people-dancing-night-club-cheering-concert-95375453.jpg" className="merch_img3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="section">
                <div className="container is--wide">
                    <div className="card">
                        <div className="card_content">
                            <h2>
                                Old<br/>
                                Church<br/>Basement
                            </h2>
                           
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="section mt">
                <div className="container">
                    <div className="grid is--resources">
                        <a className="resources_text is--light-colour w-inline-block">
                            <h1 className="display">HIMEROS CLUB</h1>
                            <h1 className="display">HIMEROS CLUB</h1>
                        </a>
                        <a className="resources_text is--main-colour w-inline-block">
                            <h1 className="display">HIMEROS CLUB</h1>
                            <h1 className="display">HIMEROS CLUB</h1>
                        </a>
                        <a className="resources_text is--light-colour w-inline-block">
                            <h1 className="display">HIMEROS CLUB</h1>
                            <h1 className="display">HIMEROS CLUB</h1>
                        </a>
                        <div className="grid_item is--resources">
                            <img src={greek1}  className="resources_img"/>
                        </div>
                    </div>
                </div>
            </section>

            <div ref={ref} className="checkout mt">
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

            {/* <section className="section mt">
                <div className="container">
                    <div className="grid is--footer">
                        <div className="grid_item">
                            <h4>
                                FOLlow US
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
                            <p></p>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>

  );
};

export default Checkout;
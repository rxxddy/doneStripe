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
import question from "../images/question.png";

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
      
        script.src = "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=622210ec2e3d3a1a0c62e591";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/js/webflow.353aee397.js";
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


  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 1
      }
    });
  };
  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: -40,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.3
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");


  const sectionRef2 = useRef(null);
  // All the ref to be observed
  const intersection2 = useIntersection(sectionRef2, {
    root: null,
    rootMargin: "0px",
    threshold: 1
  });

  // Animation for fading in
  const fadeIn2 = element => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.6
      }
    });
  };
  // Animation for fading out
  const fadeOut2 = element => {
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: -80,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection2 && intersection2.intersectionRatio < 0.1
    ? fadeOut2(".fadeIn2")
    : fadeIn2(".fadeIn2");

  const sectionRef3 = useRef(null);
  // All the ref to be observed
  const intersection3 = useIntersection(sectionRef3, {
    root: null,
    rootMargin: "0px",
    threshold: 1
  });

  // Animation for fading in
  const fadeIn3 = element => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 1
      }
    });
  };
  // Animation for fading out
  const fadeOut3 = element => {
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: -80,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection3 && intersection3.intersectionRatio < 0.3
    ? fadeOut3(".fadeIn3")
    : fadeIn3(".fadeIn3");


  return (
    
      <div className="page-wrapper">



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


                        {/* <a className="grid_item is--hamburger w-inline-block">
                            <div className="hamburger_icon"></div>
                        </a> */}
                    </div>
                </div>
            </section>
            
            <section className="section">
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

            
            <section className="section mt" ref={sectionRef}>
                <div className="container is--wide">
                    <div className="desc-cards_cards-wrapper cardtext">
                        <div className="desc-cards_card">
                            <img src={disco} loading="lazy" alt="" className="desc-cards_card-image fadeIn" />
                            <div>
                                <div className="desc-cards_card-texts-wrapper fadeIn">
                                    <h2 className="desc-cards_card-heading">Artistic</h2>
                                    <div className="desc-cards_card-text">P O N T E C H E L E G A
                                        L E C R E A T O R C O N I L O R O FA N
                                        M A N T E N E N D O SE R IE T à E F O R N E N D O a l L E PA R T I
                                        U N ’ E SP E R IE N Z A E SC L U SIV A
                                        E D IN IM IT A B IL E .
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="desc-cards_card">
                            <div>
                                <div className="desc-cards_card-texts-wrapper fadeIn">
                                    <h2 className="desc-cards_card-heading">Mission</h2>
                                    <div className="desc-cards_card-text">P O N T E C H E L E G A
                                        L E C R E A T O R C O N I L O R O FA N
                                        M A N T E N E N D O SE R IE T à E F O R N E N D O a l L E PA R T I
                                        U N ’ E SP E R IE N Z A E SC L U SIV A
                                        E D IN IM IT A B IL E .
                                    </div>
                                </div>
                            </div>
                            <img src={fashion} loading="lazy" alt="" className="desc-cards_card-image fadeIn" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="section mt">
                <div className="container">
                    <div className="grid is--resources">
                       
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

            <section className="section" ref={sectionRef2}>
                <div className="container">
                    <div className="merch">
                        <div className="grid is--merch-column">
                        
                            <div className="grid_item is--merch-title fadeIn2">
                                <h5>il prossimo evento inizierà in:</h5>
                                
                                
                            </div>
                            <div className="grid_item is--merch-link fadeIn2">
                                <a className="merch_link is--active w-inline-block">
                                    <h5 id="day">{days < 10 ? "0" + days : days}</h5>
                                    <p className="bold">days</p>
                                </a>
                            </div>
                            <div className="grid_item is--merch-link fadeIn2">
                                <a className="merch_link w-inline-block">
                                    <h5 id="hour">{hours < 10 ? "0" + hours : hours}</h5>
                                    <p className="bold">hours</p>
                                </a>
                            </div>
                            <div className="grid_item is--merch-link fadeIn2">
                                <a className="merch_link w-inline-block">
                                    <h5 id="minute">{minutes < 10 ? "0" + minutes : minutes}</h5>
                                    <p className="bold">minutes</p>
                                </a>
                            </div>
                            <div className="grid_item is--merch-link fadeIn2">
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

                        <div className="desc-cards_card">
                            <div>
                                <div className="desc-cards_card-texts-wrapper fadeIn2">
                                    <h2 className="desc-cards_card-heading">perché abbiamo bisogno di un pass?</h2>
                                    <div className="desc-cards_card-text">P O N T E C H E L E G A
L E C R E A T O R C O N I L O R O FA N
M A N T E N E N D O SE R IE T à E F O R N E N D O a l L E PA R T I
U N ’ E SP E R IE N Z A E SC L U SIV A
E D IN IM IT A B IL E .</div>
                                    </div>
                                </div>

                            </div>

                            
                        </div>
                    </div>
                </div>
            </section>

            <div ref={ref} className="checkout mt">
                <div ref={sectionRef3}>   
                    <div className="checkoutLeft">
                        <img src={ticket} className="ticket fadeIn3"/>
                    </div>
                    <div className="checkoutRight">
                        <div className="style1">
                        <h1 className="tickets fadeIn3">PASS</h1>
                        <h1 className="checkout-price fadeIn3">€{total}/year</h1>
                        <div className="quantity-input">

                            <button className="quantity-input__modifier quantity-input__modifier--left fadeIn3" onClick={decNum}>—</button>

                            <input type="text" className="quantity-input__screen fadeIn3" value={num} onChange={handleChange}/>
                            
                            <button className="quantity-input__modifier quantity-input__modifier--right fadeIn3" onClick={incNum}>＋</button>

                        </div>
                        <button
                            className="checkout-button fadeIn3"
                            onClick={redirectToCheckout}
                            disabled={isLoading}
                        >
                            <div className="text-container fadeIn3">
                            <div className="text">{isLoading ? "Carico..." : "paga"}</div>
                            </div>
                        </button>
                        </div>
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
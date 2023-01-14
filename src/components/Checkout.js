import React from 'react';
import { useState, useRef, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import ticket from '../images/ticket.png';
import logo from '../images/logo.png';
import greek1 from '../images/greek1.png';
import gsap from "gsap";
import bghex from "../images/bghex.png";
import arrow from "../images/arrow.png";
import fashion from "../images/fashion.png";
import disco from "../images/disco.png";
import {Link} from "react-router-dom";
import { useScroll, useTransform } from "framer-motion/dist/framer-motion";
import "../styles.css";
import "../../src/components/components/css/styles.css";
import { useIntersection } from 'react-use';
let stripePromise;
import { Title } from "./style";
import { Carousel } from 'react-carousel-minimal';
import { AuthContext } from "../context";
import banner from "../images/banner.png";
import banner1 from "../images/1.png";
import banner2 from "../images/2.png";
import banner3 from "../images/3.png";
import banner4 from "../images/4.png";
import banner5 from "../images/5.png";
// import { auth, createUserDocument } from '../firebase';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";






import userLogo from '../images/user.png';


import '../firebase';
// import { getAuth } from "firebase/auth";


import db from "../firebase";

import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  CollectionReference,
  onSnapshot,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";



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
  let incNum = () =>{
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
//   const coupon = await stripe.coupons.create({percent_off: 20, duration: 'once'});

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
    cancelUrl: `${window.location.origin}/cancel`,
    shippingAddressCollection: {
        allowedCountries: ['IT'],
      },
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




  // const sectionRef = useRef(null);
  // // All the ref to be observed
  // const intersection = useIntersection(sectionRef, {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.4
  // });

  // // Animation for fading in
  // const fadeIn = element1 => {
  //   gsap.to(element1, {
  //     duration: 1,
  //     opacity: 1,
  //     y: 0,
  //     ease: "power4.out",
  //     stagger: {
  //       amount: 1
  //     }
  //   });
  // };
  // // Animation for fading out
  // const fadeOut = element1 => {
  //   gsap.to(element1, {
  //     duration: 1,
  //     opacity: 0,
  //     y: -40,
  //     ease: "power4.out"
  //   });
  // };

  // // checking to see when the vieport is visible to the user
  // intersection && intersection.intersectionRatio < 0.1
  //   ? fadeOut(".fadeIn")
  //   : fadeIn(".fadeIn");


  // const sectionRef2 = useRef(null);
  // // All the ref to be observed
  // const intersection2 = useIntersection(sectionRef2, {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.4
  // });

  // Animation for fading in
  // const fadeIn2 = element2 => {
  //   gsap.to(element2, {
  //     duration: 1,
  //     opacity: 1,
  //     y: 0,
  //     ease: "power4.out",
  //     stagger: {
  //       amount: 0.6
  //     }
  //   });
  // };
  // // Animation for fading out
  // const fadeOut2 = element2 => {
  //   gsap.to(element2, {
  //     duration: 1,
  //     opacity: 0,
  //     y: -80,
  //     ease: "power4.out"
  //   });
  // };

  // // checking to see when the vieport is visible to the user
  // intersection2 && intersection2.intersectionRatio < 0.1
  //   ? fadeOut2(".fadeIn2")
  //   : fadeIn2(".fadeIn2");

  const sectionRef3 = useRef(null);
  // All the ref to be observed
  const intersection3 = useIntersection(sectionRef3, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  });

  // Animation for fading in
  const fadeIn3 = element3 => {
    gsap.to(element3, {
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
  const fadeOut3 = element3 => {
    gsap.to(element3, {
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

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [-400, 400]);

    // const { scrollYProgress } = useScroll();
    // const x = useTransform(scrollYProgress, [0, 1], [-300, 300]);


  const { isLoggedIn , logout } = useContext(AuthContext);

  // const handleLogOut = () => {
  //   signOut(auth)
  //     .then(r => console.log(r)) // undefined
  //     .catch();
  // };

  const data = [
    {
      image: "http://himeros-club.pages.dev/static/media/1.c84b2f38.png",
      // caption: `<div>
      //             San Francisco
      //             <br/>
      //             Next line
      //           </div>`
    },
    {
      image: "http://himeros-club.pages.dev/static/media/2.eb2ac827.png",
      // caption: "Scotland"
    },
    {
      image: "http://himeros-club.pages.dev/static/media/3.a7d43f08.png",
      // caption: "Darjeeling"
    },
    {
      image: "http://himeros-club.pages.dev/static/media/4.0f84b99b.png",
      // caption: "San Francisco"
    },
    {
      image: "http://himeros-club.pages.dev/static/media/5.dc0b828b.png",
      // caption: "Scotland"
    },
    // {
    //   image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    //   // caption: "Darjeeling"
    // },
    // {
    //   image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    //   // caption: "San Francisco"
    // },
    // {
    //   image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    //   // caption: "Scotland"
    // },
    // {
    //   image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    //   // caption: "Darjeeling"
    // }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  const navigate = useNavigate();
  const auth = getAuth();

  const user = auth.currentUser;
  const [products, setProducts] = useState([]);
  // const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  let handleLogOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful");
      
      navigate("/Signup");
    });
  };
  let handleLogOut2 = () => {
    console.log(auth.currentUser);
  };

  if (auth.currentUser != null) {
    let userUID = (auth.currentUser.uid);
    // console.log(userUID)
  };

  let checkSubscription = () => {
    if (subscription !== null) {

        console.log("  Subscription: ACTIVATED" );
      } else {
        console.log("  Get this pass rn💀" );
      }
    }
    
    
    useEffect(() => {
      if(auth.currentUser != null){
  
       let userUID = (auth.currentUser.uid)
       const q = query(collection(db, "users", userUID, "subscriptions"));

       onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach(async (subscription) => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_start:
              subscription.data().current_period_start.seconds,
            current_period_end: subscription.data().current_period_end.seconds,
          });
        });
      });
     }
    });
    
  

     

        
useEffect(() => {
  const q = query(collection(db, "products"), where("active", "==", true));
  
  onSnapshot(q, (querySnapshot) => {
    const products = {};
    
    querySnapshot.forEach(async (productDoc) => {
      products[productDoc.id] = productDoc.data();
      
      const productDocRef = doc(db, "products", productDoc.id);
      const priceSnap = await getDocs(collection(productDocRef, "prices"));
      
      priceSnap.forEach((price) => {
        products[productDoc.id].prices = {
          priceId: price.id,
          priceData: price.data(),
        };
      });
    });
    setProducts(products);
  });
}, []);



const loadCheckOut = async (priceId) => {
  const docRef = await addDoc(
    collection(db, "users", auth.currentUser.uid, "checkout_sessions"),
    {
      price: priceId,
      allow_promotion_codes: true,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    }
  );

  onSnapshot(docRef, async (snap) => {
    const { error, sessionId } = snap.data();

    if (error) {
      // Show an error to a customer and inspect your
      // Cloud functions logs in the firebase console.
      alert(`An error occurred: ${error.message}`);
    }

    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = await loadStripe(
        "pk_test_51M0hAMK1PrYKJW73EuY6xenNHSTLuRoFN7CTDih18CE5swdGip9mrwXgaMwM7KX9tv0rXz3YX2ItlpI4kggZMsEi00ckAanGkb"
      );
      stripe.redirectToCheckout({ sessionId });
    }
  });
};


  return (
    
      <div className="main-container">


            <nav style={{zIndex: "999999", position: "absolute"}}>
              <div className="navbar">
                <div className="containerH nav-container">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                      <span className="line line1"></span>
                      <span className="line line2"></span>
                      <span className="line line3"></span>
                    </div>  
                  <div className="menu-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">info</Link></li>
                      {(function() {
                        if (auth.currentUser != null) {
                          return <li style={{display: "grid"}}>
                            <button onClick={handleLogOut} style={{border: "none"}}>Logout</button>
                            <Link to="/profile" >Profile</Link>
                          </li>
                        } else {
                          return <li style={{display: "grid"}}>
                            <Link to="/login" c>Login</Link>
                            <Link to="/Signup" c>Sing Up</Link>
                          </li>
                        }
                      })()}
                  </div>
                </div>
              </div>
            </nav>
            <section className="sectionD">
                    
                <div className="block mains">
                    <div className="container2 mains center">

                        <div className="section22 navbar vercent">


                                <div className="left1">
                                    <div className="left">
                                        <p className="navlink1 navlink2 ">MAIN</p>
                                    </div>


                                    <div className="left">
                                        <p className="navlink1 ">INFO</p>
                                    </div>


                                    {/* <Link to="/Signup" className="left">
                                        <p className="navlink1 navlink2 ">Signup</p>
                                    </Link>
                                    <Link to="/login" className="left">
                                        <p className="navlink1 navlink2 ">login</p>
                                    </Link>
                                    <button onClick={handleLogOut} className="left">
                                        <p className="navlink1 navlink2 ">Log Out</p>
                                    </button> */}
                                    {/* <button onClick={handleLogOut2} className="left">
                                        <p className="navlink1 navlink2 ">check</p>
                                    </button> */}
                                </div>
                           
                                <a className="nav_logo    center">
                                    <img src={logo} className="nav_logo-img"/>
                                </a>
                               

                            <div className="right1">
                              <nav className="right">
                                {/* <ul>
                                <Link to="/Signup" className="right">Sign Up</Link>
                                </ul> */}


                                {/* <ul>
                                  {isLoggedIn && (
                                    <li>
                                      <button onClick={handleLogOut} className="right">Logout</button>
                                      <Link to="/profile" className="right">Profile</Link>
                                    </li>
                                  )}
                                  {!isLoggedIn && (
                                    <li>
                                      <Link to="/account" className="right">Login</Link>
                                    </li>
                                  )}
                                </ul> */}
                                <ul>
                                {(function() {
                                  if (auth.currentUser != null) {
                                    return <li>
                                      <button onClick={handleLogOut} className="right">Logout</button>
                                      <Link to="/profile" className="right">Profile</Link>
                                    </li>
                                  } else {
                                    return <li>
                                      <Link to="/login" className="right">Login</Link>
                                    </li>
                                  }
                                })()}
                                </ul>

                                
                              </nav>

                        
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            {/* <section>
              <div>
              {(function() 
                        
                        {
                            
                          if (auth.currentUser != null) {
                            let userUID = (auth.currentUser.uid);
                            return <div>
                              <div className="profileText1">{userUID}</div>
                              <button onClick={check}>Check</button>

                            </div>
                          } else {
                            return <div>
                              <Link to="/login" className="profileText1">Please login first</Link>
                            </div>
                          }
                        })()}
              </div>
            </section> */}
            
            <section className="section">
                <div className="block section23">
                    <div className="container3">

                        <div className="section22">
                            <h1 className="naming">HIMEROS CLUB</h1>
                            {/* <img src={bghex} className="bghex" /> */}
                        </div>
                        <div className=" section22 section23-img1 ">
                 
                            <button className="buyticket1  bgbutton buttonwidth" onClick={handleClick}>
                              
                                <p className="buyticket2 buybuttontop2">Acquista i biglietti </p>
                                <img src={arrow} className="buybuttontop"/>
                            </button>
                    
                        </div>
                        
                    </div>
                </div>
            </section>
            
            <div style={{ textAlign: "center",   width: "1460px", maxWidth: "100%", marginRight: "auto", marginLeft: "auto" }}>
              <div style={{
                padding: "0 20px"
              }}>
                <Carousel
                  data={data}
                  time={2000}
                  width="100%"
                  height="500px"
                  captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  automatic={true}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  // thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                    textAlign: "center",
                    width: "100%",
                    maxHeight: "500px",
                    margin: "40px auto",
                    zIndex: "9999",

                  }}
                />
              </div>
            </div>

            <img src={banner1} loading="eager" width="1" sizes="90vw" alt="true" className="image-135"></img>
            <img src={banner2} loading="eager" width="1" sizes="90vw" alt="true" className="image-135"></img>
            <img src={banner3} loading="eager" width="1" sizes="90vw" alt="true" className="image-135"></img>
            <img src={banner4} loading="eager" width="1" sizes="90vw" alt="true" className="image-135"></img>
            <img src={banner5} loading="eager" width="1" sizes="90vw" alt="true" className="image-135"></img>
            
            <section className="section mt">
              <div className="block block2">
                <div className="text11">
                  <div className="text12">
                    <h5>VISION</h5>
                    <br></br>

                    CREARE UN AMBIENTE
                    DOVE IL LEGAME TRA CREATOR E FAN
                    POSSA INTENSIFICARSI.
                  </div>
                  
                  <div className="text12">
                    <h5>MISSION</h5>
                    <br></br>

                    REALIZZARE EVENTI
                    UNICI ED ESCLUSIVI CAPACI DI DONARE
                    UN’ ESPERIENZA IRRIPETIBILE 
                    AGLI UTENTI FIDELIZZATI.
                  </div>
                </div>
              </div>
            </section>
            <div  style={{padding: "0 20px"}}>
              <img src={banner} loading="eager" width="514" sizes="90vw" alt="true" className="image-136"></img>
            </div>

            <section className="section mt">
              <div className="block block2">
                <div className="text21">
                  <div className="text22">
                    <h5 style={{letterSpacing: "40px"}}>EVENTO PRIVATO: </h5>
                    <br></br>

                    EVENTI IN LOCATION DI ALTISSIMO LIVELLO<br/> DOVE LA PARTECIPAZIONE È CONCESSA<br/> AI SOLI TESSERATI DEL CLUB.<br/>
                    <br></br>
                    I PRESUPPOSTI:<br/>
                    <br></br>
                      -	ESCLUSIVITÀ <br/>
                      - AFFIDABILITÀ<br/>
                      -	SEGRETEZZA <br/>
                      - QUALITÀ<br/>
                      <br></br>
                    L’EVENTO OFFRIRÀ INTRATTENIMENTI VARI,<br/>
                    DJ SET , S P ETTACOL I , BUFFET E CONSUMAZIONI DA BAR.
                  </div>
                </div>
              </div>
            </section>
            <section className="section mt">
                <div className="block">
                    <div className="container container34">
                       
                        <a className="himerosclub1 himerosclub11 ">
                            <Title className="display" style={{ x }}>HIMEROS CLUB</Title>
                            <Title className="display" style={{ x }}>HIMEROS CLUB</Title>
                        </a>
                        <a className="himerosclub1 himerosclub12 ">
                            <Title className="display" style={{ x }}>HIMEROS CLUB</Title>
                            <Title className="display" style={{ x }}>HIMEROS CLUB</Title>
                        </a>
                        <div className="section22 container34">
                            <img src={greek1}  className="himerosclub-middle-img"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section mt">
              <div className="block block2">
                <div className="text31">
                  <div className="text312">
                    <div className="text32">
                      <h5 style={{letterSpacing: "20px"}}>VANTAGGI CLIENTE: </h5>
                      <br></br>
                      <br></br>

                      -POSSIBILITÀ DI ADERIRE AGLI EVENTI<br/> ESCLUSIVI <br/>
                      <br></br>
                      - PIATAFOR.MA DI CONTENUTI ESCLUSIVI DECENTRALIZZATA DA ONLYFANS<br/>
                      <br></br>
                      -	(N) CONTENUTI ESCLUSIVI DELLE RAGAZZE COME BENVENUTO NEL CLUB<br/>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div ref={ref} className="checkout mt">
                <div ref={sectionRef3} className="centerPass">   
                    <div className="checkoutLeft">
                        <img src={ticket} className="ticket fadeIn3"/>
                    </div>
                    <div className="checkoutRight">
                        <div className="style1">
                        <h1 className="tickets fadeIn3">PASS</h1>
                        <h1 className="checkout-price fadeIn3" style={{justifyContent: "center", display: "flex"}}>€{total}/year</h1>
                        <div className="quantity-input">

                            <button className="quantity-input__modifier quantity-input__modifier--left fadeIn3" onClick={decNum}>—</button>

                            <input type="text" className="quantity-input__screen fadeIn3" style={{ color: "wheat"}} value={num} onChange={handleChange}/>
                            
                            <button className="quantity-input__modifier quantity-input__modifier--right fadeIn3" onClick={incNum}>＋</button>

                        </div>
                        {(function() {
                          if (auth.currentUser != null) {
                            return <button
                            className="checkout-button fadeIn3"
                            onClick={redirectToCheckout}
                            disabled={isLoading}
                            style={{justifyContent: "center"}}
                        >
                            <div className="text-block fadeIn3">
                              <div className="text">{isLoading ? "Carico..." : "paga"}</div>
                            </div>
                        </button>
                          } else {
                            return <li>
                              <Link to="/login" className="right" style={{    margin: "auto", padding: "0.5em",
              textAlign: "center", border: "solid 2px wheat", borderRadius: "1em" }}>Please login first 🢂</Link>
                            </li>
                          }
                        })()}
                        
                        </div>
                    </div>
                </div>
            </div>
            <section className="section">
            <div  style={{display: "flex", justifyContent: "center"}}>
                          {(function() 
                            
                            {
                                
                              if (subscription != null) {
                              
                                return <div>
                                  <div className="profileText1">Subscription: ACTIVATED</div>

                                  {subscription && (
                                    <p>
                                      Renewal date:{" "}
                                      {new Date(
                                        subscription?.current_period_end * 1000
                                      ).toLocaleDateString()}
                                    </p>
                                  )}

                                </div>
                              } else {
                                return <div>
                                  <div className="profileText1">Subscription: NOT FOUND💀</div>

                                  {Object.entries(products).map(([productId, productData]) => {
                                    ///  TODO: add logic
                                    const isCurrentPackage = productData.name
                                      ?.toLowerCase()
                                      .includes(subscription?.role);
                                    return (
                                      <div
                                        key={productId}
                                        className={`${
                                          isCurrentPackage && "plansScreen__plan--disabled"
                                        } plansScreen__plan`}
                                      >
                                        <div className="plansScreen__info">
                                          <h5>{productData.name}</h5>
                                          <h6>{productData.description}</h6>
                                        </div>

                                        <button
                                          onClick={() =>
                                            !isCurrentPackage && loadCheckOut(productData.prices.priceId)
                                          }
                                        >
                                          {isCurrentPackage ? "Current Package" : "Subscribe"}
                                        </button>
                                      </div>
                                    );
                                  })}
                                </div>
                              }
                          })()}

                        </div>
                    <div style={{marginBottom:"4em"}}>
                      
                      
                    </div>
            </section>
        </div>


  );
};

export default Checkout;
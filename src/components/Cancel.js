import logo from '../images/logo.png';
import {Link} from "react-router-dom";



function GoToHomePage()
{
  window.location = '/';   
}

const Cancel = () => {
    return (
      
      <div>
      <div className="container is--nav">
      <section className="section">
                    
                    <div className="container is--nav ">
                        <div className="grid2 is--nav center">
    
                            <div className="grid_item is--menu vercent">
    

                                    <div className="left1" src="/">
                                        <Link  to="/" className="left">
                                            <p className="menu_p menu_link w-inline-block">MAIN</p>
                                        </Link>
    
    
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
                </div>
        <div className="Canceled">
          <h1 className="Canceled-cancel">Cancel</h1>
          <h2>Your payment was canceled.</h2>
        </div>
      </div>
    );
  };
  
  export default Cancel;
  
import logo from '../images/logo.png';
import {Link} from "react-router-dom";

const Account = () => {
    return (
      
      <div>
        <div className="main-container">
            <section className="section">
                    
                <div className="block mains">
                    <div className="container2 mains center">

                        <div className="section22 navbar vercent">


                                <div className="left1">
                                    <Link to="/" className="left">
                                        <p className="navlink1 navlink2 ">MAIN</p>
                                    </Link>


                                    <div className="left">
                                        <p className="navlink1 ">INFO</p>
                                    </div>
                                </div>
                           
                                <a className="nav_logo    center">
                                    <img src={logo} className="nav_logo-img"/>
                                </a>

                            <div className="right1">

                                <div className="right">
                                    <p className="navlink1 navlink2 "></p>
                                </div>

                                <div className="right">
                                    <p className="navlink1 ">Account</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
                </div>
        <div className="Canceled">
          <h1 className="Canceled-cancel">Account</h1>
          <h2>Auth</h2>
        </div>
      </div>
    );
  };
  
  export default Account;
  

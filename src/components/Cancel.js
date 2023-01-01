import logo from '../images/logo.png';
import {Link} from "react-router-dom";

const Cancel = () => {


    return (
      
    <div>
        <div className="Canceled">
            <h1 className="Canceled-cancel">Cancel</h1>
            <h2>Your payment was canceled.</h2>
            <Link to="/"><h5>Return home</h5></Link>
        </div>
    </div>
    );
  };
  
  export default Cancel;
  
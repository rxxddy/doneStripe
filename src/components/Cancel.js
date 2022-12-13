function GoToHomePage()
{
  window.location = '/';   
}

const Cancel = () => {
    return (
      
      <div>
      <div className="container is--nav">
                    <div className="grid is--nav">
                        <div className="grid_item is--nav-logo">
                            <a className="nav_logo w-inline-block">
                                <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a048b62e5ac_logo.svg" className="nav_logo-img"/>
                            </a>
                        </div>
                        <div className="grid_item is--menu">

                              <button className="menu_link w-inline-block" onClick={GoToHomePage}>
                                  <p className="menu_p" >Home</p>
                                  <div className="menu_line"></div>
                              </button>


                            <a className="menu_link w-inline-block">
                                <div className="menu_line"></div>
                                <p className="menu_p">Tour</p>
                            </a>
                            <a className="menu_link w-inline-block">
                                <p className="menu_p">RESOURCES</p>
                                <div className="menu_line"></div>
                            </a>
                            <a className="menu_link w-inline-block">
                                <p className="menu_p">STORE</p>
                                <div className="menu_line"></div>
                            </a>
                            <a className="menu_link w-inline-block">
                                <div className="menu_line"></div>
                                <p className="menu_p">CONTACT</p>
                            </a>
                            <div className="menu_button">
                                <p className="menu_p bold">Get The Album</p>
                                <div className="menu_button-circle">
                                    <img src="https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/622210ec2e3d3a512462e5af_nav-apple-icon.svg" className="menu_button-icon"/>
                                </div>
                            </div>
                        </div>
                        <a className="grid_item is--hamburger w-inline-block">
                            <div className="hamburger_icon"></div>
                        </a>
                    </div>
                </div>
        <div className="Canceled">
          <h1 className="Canceled-cancel">Cancel</h1>
          <h2>Your payment was canceled.</h2>
        </div>
      </div>
    );
  };
  
  export default Cancel;
  
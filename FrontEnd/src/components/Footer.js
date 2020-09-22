import React from 'react'

//footer, common to all pages
export default function Footer() {
    return (
        <footer className="page-footer font-small blue-grey lighten-5">
            <div style={{ backgroundColor: "#e0e0e0 " }}>
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <a className="fb-ic" href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f white-text mr-4" > </i>
                            </a>
                            <a className="tw-ic" href="https://twitter.com/LOGIN" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter white-text mr-4"> </i>
                            </a>
                            <a className="gplus-ic" href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-google-plus-g white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic" href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer">

                                <i className="fab fa-instagram white-text"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#bdbdbd" }}>
                <div className="container text-center text-md-left pt-5" >
                    <div className="row dark-grey-text" >
                        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                            <h6 className="text-uppercase font-weight-bold">About</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
                            <p>Our services are delivered through dedicated divisions, aligned by professional craft groups and service delivery.</p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                            <h6 className="text-uppercase  font-weight-bold">Contact</h6>
                            <hr className="teal accent-3 mb-2 mt-0 d-inline-block mx-auto" />
                            <p>
                                <i className="fas fa-building mr-3"></i>RMIT University, Melbourne VIC</p>
                            <p>
                                <i className="fas fa-phone mr-3"></i>+61 3 9925 2000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3" style={{ color: "black" }}>© 2020 Copyright
          </div>
        </footer>
    )
}

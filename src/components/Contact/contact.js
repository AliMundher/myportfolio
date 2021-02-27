import React from 'react';
import "./contact.css";


const Contact = () => {

    return (
        <React.Fragment>
            <div className="contact">
                <h2 className="text-capitalize text-left mb-5 ml-3">location</h2>
                {/* First Row */}
                <div className="row ">
                    <div className="col-12 col-md-4 text-center">
                        <p className="text-capitalize mb-0 add_rue">rue du vallon,1081</p>
                        <p className="text-capitalize add_rue">angleur,liège</p>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <i className="fa fa-phone mr-2" aria-hidden="true"></i>
                        <span className="phone">+32465656051</span>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <i className="fa fa-map-marker marker" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            {/* Seconde Row */}
            <div className="row mt-4">
                <div className="col-12 col-md-6">
                    <form>
                        <div className="row">
                            {/* Names Input */}
                            <div className="col">
                                <input type="text" className="form-control my_input_style" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control my_input_style" placeholder="Last name" />
                            </div>
                        </div>
                        {/* Email Input */}
                        <div className="row mt-2">
                            <div className="col">
                                <input type="text" className="form-control my_input_style" placeholder="First name" />
                            </div>
                        </div>
                        {/* Textarea */}
                        <div className="row mt-2">
                            <div className="col">
                                <textarea className="form-control my_input_style myTextArea"
                                    placeholder="Message" rows="6" />
                            </div>
                        </div>
                        <button className="text-capitalize btn_submit mt-2">submit</button>
                    </form>
                </div>
                <div className="col-12 col-md-6 map-col">
                    <img src="images/map.png" alt="" className="img-fluid" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;
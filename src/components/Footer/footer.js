import React from 'react';
import "./footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-4">
                        <div className="logo_footer my-4">
                            <h3 className="text_logo_footer">m</h3>
                        </div>
                        <p>Qui y sera Qui y sera Qui y sera Qui y sera Qui y sera Qui y seraQui y sera Qui y sera Qui y sera</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3 className="text-capitalize text-center my-3 quick">quick link</h3>
                        <div className="buttons text-center my-4">
                            <button className="btn_about">about</button>
                            <button className="btn_mywork">my work</button>
                            <button className="btn_cv">cV</button>
                            <button className="btn_contact">contact</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h3 className="text-capitalize my-3 quick">subscribe</h3>
                        <div className="my-4">
                            <input type="email" />
                            <button className="btn_sub">subscribe</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
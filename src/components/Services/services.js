import React from 'react';
import "./services.css"
import axios from "axios";
import { useEffect, useState, Fragment } from 'react';


const Services = () => {

    const [works, setWorks] = useState([]);
    useEffect(() => {
        axios.get("js/data.json").then(res => { setWorks(res.data.services) })
    }, []);

    const result = works.map(i => {
        return (
            <Fragment key={i.id}>
                <div className="col-12 col-md-4 my_row">
                    <i className={i.icon_name}></i>
                    <p>{i.body}</p>
                    <button className="my-2 my-md-0">read more</button>
                </div>
            </Fragment>
        )
    });

    return (
        <div>
            <h2 className="text-capitalize text-center serve_title">services</h2>
            <div className="container">
                <div className="row mbt_serv">
                    {result}
                </div>
                {/* Start Testmonial */}
                <h2 className="text-capitalize text-center title_test ">testimonial</h2>
                <div className="testimonial text-center">
                    <img src="images/mo.jpg" className="img-fluid img_test" alt="" />
                    <p className="disc_test my-3">similaires pour fournir, mettre à jour et améliorer ses services et annonces. Si vous l’acceptez,
                    nous utiliserons ces données des analyses </p>
                    <h3 className="text-capitalize text-center name">mohammed ali</h3>
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Services;
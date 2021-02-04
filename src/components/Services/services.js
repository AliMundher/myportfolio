import React from 'react';
import "./services.css"
import axios from "axios";
import { useEffect, useState, Fragment } from 'react';


const Services = () => {

    const [works, setWorks] = useState([]);
    useEffect(() => {
        axios.get("js/data.json").then(res => { setWorks(res.data.services) })
    }, [works]);

    const r = works.map(i => {
        return (
            <Fragment key={i.id}>
                <div className="col-12 col-md-4 my_row">
                    <i className={i.icon_name}></i>
                    <p>{i.body}</p>
                    <button>read more</button>
                </div>
            </Fragment>
        )
    });

    return (
        <div>
            <h2 className="text-capitalize text-center serve_title">services</h2>
            <div className="container">
                <div className="row mt_serve">
                    {r}
                </div>
            </div>
        </div>
    )
}

export default Services;
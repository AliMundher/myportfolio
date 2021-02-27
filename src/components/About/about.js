import React from 'react';
import "./about.css"


const About = () => {
    return (
        <div className="row mbt">
            <div className="col-12 col-md-5 text-center mb-5 mb-md-0">
                <img src="images/mo.jpg" alt="" className="img-fluid my_img" />
            </div>
            <div className="col-12 col-md-7">
                <h2 className="text-capitalize about_title">about</h2>
                {/* <p className="about_disc">I am a Developer front-end I can create pages by programing languages
                and too I can create user interface
                by programmes designe like illustrator,photoshop and adobe xd</p> */}
                <p className="about_disc">Qu'est-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du
                faux texte employé dans la composition et la mise en page avant
                impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                depuis les années 1500, quand un imprimeur
                anonyme assembla ensemble des morceaux de texte pour réaliser
                    un livre spécimen de polices de texte.</p>
                <button className="text-capitalize mt-4 my_read my-2 my-md-0">read more</button>
            </div>
        </div>
    )
}

export default About;
import React from 'react';
import "./my-work.css";


const MyWork = () => {
    return (
        <React.Fragment>
            <h2 className="text-capitalize text-center my_work_title">my work</h2>
            {/* First Row */}
            <div className="row mt-5">
                <div className="col-12 col-md-6">
                    <p className="img_disc">Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                    utilisée à titre provisoire pour calibrer une mise en page, le texte définitif
                    venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
                        énéralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
                    <p className="img_disc">Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                    utilisée à titre provisoire pour calibrer une mise en page, le texte définitif
                    venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est </p>
                </div>
                <div className="col-12 col-md-6">
                    <div className="box_work">
                        <img src="images/two.png" alt="" className="img-fluid" />

                    </div>
                </div>
            </div>
            {/* Second Row */}
            <div className="row my-5">
                <div className="col-12 col-md-6">
                    <div className="box_work">
                        <img src="images/three.png" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <p className="img_disc">Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                    utilisée à titre provisoire pour calibrer une mise en page, le texte définitif
                    venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
                        énéralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
                    <p className="img_disc">Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                    utilisée à titre provisoire pour calibrer une mise en page, le texte définitif
                    venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est </p>
                </div>
            </div>
            <div className="git_hub">
                <i class="fa fa-github mr-2" aria-hidden="true"></i>
                <a href="https://github.com/AliMundher" className="text-capitalize">my github</a>
            </div>
        </React.Fragment>
    )
}

export default MyWork;
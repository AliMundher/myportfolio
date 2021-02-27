import React from 'react';
import "./cv.css";


const CV = () => {
    return (
        <React.Fragment>
            {/* Start Experience */}
            <div className="experience">
                <div className="div_title">
                    <h3 className="title_exp text-capitalize">experience</h3>
                </div>
                <h2 className="text-capitalize becode">becode.org | liège</h2>
                <h4 className="text-capitalize date">september 2020 - july-2021</h4>
                <p className="job-disc">My experience was through projects that were
                implemented individually and collectively on the
                    basis of self-learning at becode</p>
            </div>
            {/* Start Education */}
            <div className="education">
                <div className="div_title">
                    <h3 className="title_edu text-capitalize">education</h3>
                </div>
                <h2 className="text-capitalize Junior">Junior web developer</h2>
                <h4 className="text-capitalize date">september 2020 - july-2021</h4>

                <h2 className="text-capitalize Software mt-4">Software Engineer</h2>
                <h4 className="text-capitalize date">january 2012 - july-2017</h4>
                <h4 className="text-capitalize date">september 2020 - july-2021</h4>
            </div>
            {/* Start Soft Skills */}
            <div className="soft_skill">
                <div className="div_title">
                    <h3 className="title_edu text-capitalize">soft skills</h3>
                </div>
                <ul>
                    <li className="date">Organised</li>
                    <li className="date">Continuous Learner</li>
                    <li className="date">Change Enthusiast</li>
                    <li className="date">Reliable</li>
                </ul>
            </div>
            {/* Start Languages */}
            <div className="language">
                <div className="div_title">
                    <h3 className="title_edu text-capitalize">languages</h3>
                </div>
                <ul>
                    <li className="date">Française ( B1 )</li>
                    <li className="date">Arbe ( Mother Tongue )</li>
                </ul>

            </div>

        </React.Fragment>
    )
}

export default CV;
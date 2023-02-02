import React, {memo, useState} from 'react';
import "./qualifications.css"

export const Qualification = memo(({}) => {
    const [toggleState, setToggleState] = useState('education')
    // const toggleTab = (index) => setToggleState(index)
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>


            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <a
                        className={
                            toggleState === 'education'
                            ? "qualification__button button--flex active-link"
                            : "qualification__button button--flex"}
                        onClick={() => setToggleState('education')}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </a>

                    <a
                        className={
                            toggleState === 'experience'
                            ? "qualification__button button--flex active-link"
                            : "qualification__button button--flex"}
                        onClick={() => setToggleState('experience')}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </a>

                </div>
                <div className="qualification__sections">

                    <div
                        className={toggleState === 'education'
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Art Director</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2021 - Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2021 - Present
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className={toggleState === 'experience'
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}
                    >
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Microsoft - Spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2021 - Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>


    );
});

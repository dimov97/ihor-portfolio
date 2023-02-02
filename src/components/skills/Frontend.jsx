import React, {memo} from 'react';

export const Frontend = memo(({}) => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend</h3>
            <div className="skills__box">


                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                </div>

                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Redux</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">JS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">TS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
});

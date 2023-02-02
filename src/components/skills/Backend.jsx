import React, { memo} from 'react';

export const Backend = memo(({}) => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>
            <div className="skills__box">


                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Mongoose</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Express</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    {/*<div className="skills__data">*/}
                    {/*    <i className='bx bx-badge-check'></i>*/}

                    {/*    <div>*/}
                    {/*        <h3 className="skills__name">React</h3>*/}
                    {/*        <span className="skills__level">Advanced</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>


            </div>
        </div>
    );
});

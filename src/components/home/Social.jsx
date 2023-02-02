import React, { memo} from 'react';


export const Social = memo(({}) => {
    return (
        <div className='home__social'>
            <a href="https://instagram.com/dimov_ihor" className="home__social-icon" target='_blank'>
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/ihor-dimov/" className="home__social-icon" target='_blank'>
                <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100082965194946" className="home__social-icon" target='_blank'>
                <i className="uil uil-facebook"></i>
            </a>
            <a href="https://github.com/dimov97" className="home__social-icon" target='_blank'>
                <i className="uil uil-github"></i>
            </a>
        </div>
    );
});

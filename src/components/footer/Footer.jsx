import React, {memo} from 'react';
import "./footer.css"

export const Footer = memo(({}) => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ihor</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Project</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>


                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/ihor-dimov/" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100082965194946" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://instagram.com/dimov_ihor" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://t.me/Ihor_Dimov" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-telegram"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Ihor. All rigths reserved
                </span>
            </div>
        </footer>
    );
});

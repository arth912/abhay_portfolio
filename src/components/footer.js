import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
    return (
        <div>
            <footer id="main-footer">
                <div id="footer-bottom">
                    <div className="container clearfix">
                        <ul className="et-social-icons">

                            <li className="et-social-icon et-social-facebook">
                                <Link to="https://www.facebook.com/jack.m.parrish?" className="icon">
                                    <span>Facebook</span>
                                </Link >
                            </li>
                            <li className="et-social-icon et-social-twitter">
                                <Link to="https://twitter.com/Jack_Parrish96?lang=en" className="icon">
                                    <span>Twitter</span>
                                </Link >
                            </li>

                        </ul>
                        <div id="footer-info">©Designed by Jack Parrish. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footer
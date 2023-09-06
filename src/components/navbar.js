import React from 'react'
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div>
            <nav id="top-menu-nav">
                <ul id="top-menu" className="nav">
                    <li id="menu-item-11"
                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-11">
                        <Link to="/" aria-current="page">Home</Link >
                    </li>
                    <li id="menu-item-1416"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1416">
                        <Link>Portfolio</Link >
                        <ul className="sub-menu" style={{ "width": "300px" }}>
                            <li id="menu-item-1379"
                                className="menu-item menu-item-type-post_type menu-item-object-project menu-item-1379">
                                <div>
                                    <Link to="/Scenario">Scenario</Link >
                                </div>
                            </li>
                            <li id="menu-item-1374"
                                className="menu-item menu-item-type-post_type menu-item-object-project menu-item-1374">
                                <div style={{ "width": "250px" }}><Link to="/ResearchAndPlanning">Research & Planning</Link >
                                </div>
                            </li>
                            <li id="menu-item-1378"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1378">
                                <div style={{ "width": "250px" }}><Link to="/StrategyDevelopment">Strategy Development</Link ></div>
                            </li>
                            <li id="menu-item-1380"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1380">
                                <div className="d-flex align-middle">
                                    <div style={{ "width": "250px" }}><Link to="/KeyRelationMapping">Key Relation Mapping</Link ></div>
                                </div>
                            </li>
                            <li id="menu-item-1381"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1381">
                                <div className="d-flex align-middle">
                                    <div style={{ "width": "250px" }}><Link to="/MessageDevelopment">Message Development</Link ></div>
                                </div>
                            </li>
                            <li id="menu-item-1381"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1381">
                                <div className="d-flex align-middle">
                                    <div style={{ "width": "250px" }}><Link to="/">Media Relation</Link ></div>
                                    <div className="mt-2">
                                        <i className="bi bi-chevron-right text-light"></i>
                                    </div>
                                </div>
                                <ul className="sub-menu">
                                    <li id="menu-item-2160"
                                        className="menu-item menu-item-type-post_type menu-item-object-project menu-item-2160">
                                        <Link to="/MediaAdvisory" style={{ "width": "250px" }}>Media advisory</Link >
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-1381"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1381">
                                <div className="d-flex align-middle">
                                    <div style={{ "width": "250px" }}><Link to="/">Content Creation</Link ></div>
                                    <div className="mt-2">
                                        <i className="bi bi-chevron-right text-light"></i>
                                    </div>
                                </div>
                                <ul className="sub-menu">
                                    <li id="menu-item-2160"
                                        className="menu-item menu-item-type-post_type menu-item-object-project menu-item-2160">
                                        <Link to="/Memorandum" style={{ "width": "300px" }}>Memorandum</Link >
                                    </li>
                                    <li id="menu-item-2160"
                                        className="menu-item menu-item-type-post_type menu-item-object-project menu-item-2160">
                                        <Link to="/MissionStatement" style={{ "width": "300px" }}>Mission statement</Link >
                                    </li>
                                    <li id="menu-item-2160"
                                        className="menu-item menu-item-type-post_type menu-item-object-project menu-item-2160">
                                        <Link to="/PitchLetter" style={{ "width": "300px" }}>Pitch letter</Link >
                                    </li>
                                    <li id="menu-item-2160"
                                        className="menu-item menu-item-type-post_type menu-item-object-project menu-item-2160">
                                        <Link to="/PSAScript" style={{ "width": "300px" }}>PSA script</Link >
                                    </li>
                                    <li id="menu-item-2160"
                                        className="menu-item menu-item-type-post_type menu-item-object-project menu-item-2160">
                                        <Link to="/NewsReleases" style={{ "width": "300px" }}>News releases</Link >
                                    </li>
                                    <li id="menu-item-2160"
                                        className="menu-item menu-item-type-post_type menu-item-object-project menu-item-2160">
                                        <Link to="/MockInterview" style={{ "width": "300px" }}>Mock Interview | Media
                                            Preparation</Link >
                                    </li>
                                    <li id="menu-item-2160"
                                        className="menu-item menu-item-type-post_type menu-item-object-project menu-item-2160">
                                        <Link to="/CEOBlog" style={{ "width": "300px" }}>CEO Blog</Link >
                                    </li>
                                    <li id="menu-item-2160"
                                        className="menu-item menu-item-type-post_type menu-item-object-project menu-item-2160">
                                        <Link to="/SponsoredContent" style={{ "width": "300px" }}>Sponsored content</Link >
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-1381"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1381">
                                <div className="d-flex align-middle">
                                    <div style={{ "width": "250px" }}><Link to="/ExecutionAndImplementation">Execution & Implementation</Link ></div>
                                </div>
                            </li>
                            <li id="menu-item-1381"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1381">
                                <div className="d-flex align-middle">
                                    <div style={{ "width": "250px" }}><Link to="/MonitorAndEvaluation">Monitor & Evaluation</Link ></div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li id="menu-item-964"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-964">
                        <Link>Resume</Link >
                        <ul className="sub-menu">
                            <li id="menu-item-961"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-961">
                                <div style={{ "width": "250px" }}>
                                    <Link to="/Experience">Experience</Link >
                                </div>
                            </li>
                            <li id="menu-item-960"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-960">
                                <div style={{ "width": "250px" }}>
                                    <Link to="/Education">Education</Link >
                                </div>
                            </li>
                            <li id="menu-item-958"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-958">
                                <div style={{ "width": "250px" }}>
                                    <Link to="/Involvement">Involvement</Link >
                                </div>
                            </li>
                            <li id="menu-item-959"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-959">
                                <div style={{ "width": "250px" }}>
                                    <Link to="/Skills">Skills</Link >
                                </div>
                            </li>
                            <li id="menu-item-1027"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1027">
                                <div style={{ "width": "250px" }}>
                                    <Link to="/PDFResume">PDF Resume</Link >
                                </div>
                            </li>
                        </ul>
                    </li>
                    {/* <li id="menu-item-1384"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1384">
                                    <Link
                                        to="my-blog.html">My Blog</Link ></li> */}
                    <li id="menu-item-1414"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1414"><Link
                            to="/About">About</Link ></li>
                    <li id="menu-item-1383"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1383"><Link
                            to="/ContactMe">Contact Me</Link ></li>
                </ul>
            </nav>
        </div>
    )
}

export default navbar
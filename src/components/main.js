import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navbar from './navbar'
import homePage from '../pages/homePage';
import Footer from '../components/footer.js'
import portfolioTopic from './portfolioTopic';
import Experience from './Experience';
import EducationPage from '../pages/educationPage';
import Involvement from './Involvement';
import Skills from './Skills';
import BodyClassUpdater from './BodyClassUpdater';


const main = () => {
    return (
        <div>
            <Router>
                <div id="page-container">
                    <header id="main-header" data-height-onload="66">
                        <div className="container clearfix et_menu_container">
                            <div id="et-top-navigation" data-height="66" data-fixed-height="40">
                                <Navbar />
                            </div>
                        </div>
                    </header>
                    <div id="et-main-area">
                        <div id="main-content">
                            <article id="post-51" className="post-946 page type-page status-publish hentry">
                                <div className="entry-content">
                                    <div id="et-boc" className="et-boc">
                                        <Routes>
                                            {/* <BodyClassUpdater /> */}
                                            <Route path="/" exact Component={homePage} />
                                            <Route path="/scenario" Component={portfolioTopic} />
                                            <Route path="/ResearchAndPlanning" Component={portfolioTopic} />
                                            <Route path="/StrategyDevelopment" Component={portfolioTopic} />
                                            <Route path="/KeyRelationMapping" Component={portfolioTopic} />
                                            <Route path="/MessageDevelopment" Component={portfolioTopic} />
                                            <Route path="/MediaAdvisory" Component={portfolioTopic} />
                                            <Route path="/Memorandum" Component={portfolioTopic} />
                                            <Route path="/MissionStatement" Component={portfolioTopic} />
                                            <Route path="/PitchLetter" Component={portfolioTopic} />
                                            <Route path="/PSAScript" Component={portfolioTopic} />
                                            <Route path="/NewsReleases" Component={portfolioTopic} />
                                            <Route path="/MockInterview" Component={portfolioTopic} />
                                            <Route path="/CEOBlog" Component={portfolioTopic} />
                                            <Route path="/SponsoredContent" Component={portfolioTopic} />
                                            <Route path="/ExecutionAndImplementation" Component={portfolioTopic} />
                                            <Route path="/MonitorAndEvaluation" Component={portfolioTopic} />
                                            <Route path="/Experience" Component={Experience} />
                                            <Route path="/Education" Component={EducationPage} />
                                            <Route path="/Involvement" Component={Involvement} />
                                            <Route path="/Skills" Component={Skills} />
                                            <Route path="/PDFResume" Component={portfolioTopic} />
                                            <Route path="/About" Component={portfolioTopic} />
                                            <Route path="/ContactMe" Component={portfolioTopic} />
                                        </Routes>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <span className="et_pb_scroll_top et-pb-icon"></span>
                        <Footer />
                    </div>
                </div>
            </Router>
        </div >
    )
}

export default main
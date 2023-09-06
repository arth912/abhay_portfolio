import React from 'react'
import WelcomeName from '../components/welcomeName.js'
import LitleAboutMe from '../components/litleAboutMe.js'
import Quots from '../components/Quots.js'
import HowCanIHelp from '../components/howCanIHelp.js'
import PortfolioHighlights from '../components/portfolioHighlights.js'
import ProjectList from '../components/projectList.js'
import Testomonial from '../components/testomonial.js'



const homePage = () => {
  return (
    <div>
        <div class="et_builder_inner_content et_pb_gutters3">
            <WelcomeName/>
            <LitleAboutMe/>
            <Quots/>
            {/* <HowCanIHelp/> */}
            <PortfolioHighlights/>
            <ProjectList/>
            <Testomonial/>
        </div>
    </div>
  )
}

export default homePage
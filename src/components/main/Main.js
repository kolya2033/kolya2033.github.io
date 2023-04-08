import Intro from './intro/Intro'
import About from './about/About'
import Expertise from './expertise/Expertise'
import Team from './team/Team'
import Works from './works/Works'
import Testimonials from './testimonials/Testimonials'
import Contact from './contact/Contact'
import WebsiteFooter from './websiteFooter/WebsiteFooter'

const Main = ({fixedHeader, isActive, handleToggle}) => {

    return (
        <main>
            <Intro fixedHeader={fixedHeader} isActive={isActive} handleToggle={handleToggle}/>
            <About/>
            <Expertise/>
            <Team/>
            <Works/>
            <Testimonials/>
            <Contact/>
            <WebsiteFooter/>
        </main>
    )
    
}

export default Main
import './main-page.css'
import Footer from '../footer/footer'
import Coverhead from './cover_section/coverhead'
import MiddleSection from './middle_section/middle'
import OurSection from './our_section/ourSection'





const MainPage=(props)=>{
return(
    <div className="wrapper">
      <div className="main">
        <Coverhead/>
        <MiddleSection/>
        <OurSection/>
        <Footer/>
      </div>
    </div>


)
}
export default MainPage
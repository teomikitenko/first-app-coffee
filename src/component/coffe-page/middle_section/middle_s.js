import blackBeans from './blackBeans.svg'
import Middle from './Middle.jpg'
import './middle_s.css'

export default function MiddlePath(){
    return(
        <div className="middle">
        <div className="middle_text_photo">
          <div className="photo">
            <img src={Middle} alt=""/>
          </div>
          <div className="text_middle">
            <p className="about">About our beans</p>
            <div className="beans_middle_black_block">
              <img className="beans_middle_black_img" src={blackBeans} alt="" />
            </div>
              <p className="main_text">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br/><br/>
  
                so questions. 
                Afraid at highly months do things on at. Situation recommend objection do intention
                As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
              </p>
           
          </div>
        </div>    <div className="block_line"><div className="line"></div></div>
        <div className="blocks_for_items">
    </div>
      </div>
    )
}
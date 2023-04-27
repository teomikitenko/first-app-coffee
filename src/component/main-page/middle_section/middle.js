import blackBeans from './blackBeans.svg'
import './middle.css'

function MiddleSection(){
    return(
        <div className="conteiner">
          <div className="middle_text about_us">
            <div className="text_for_middle">
              <p className="about_us_text_head">About Us</p>
              <div className="beans_black_block">
                <img className="beans_black" src={blackBeans}  alt="" />
              </div>
              <p className="about_us_text">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible. Afraid at highly months do things on at.
                Situation recommend objection do intention so questions. As
                greatly removed calling pleased improve an. Last ask him cold
                feel met spot shy want. Children me laughing we prospect
                answered followed. At it went is song that held help face.
                <br /><br />

                Now residence dashwoods she excellent you. Shade being under his
                bed her, Much read on as draw. Blessing for ignorant exercise
                any yourself unpacked. Pleasant horrible but confined day end
                marriage. Eagerness furniture set preserved far recommend. Did
                even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
              </p>
            </div>
          </div>
        </div>
    )
}
export default MiddleSection
import './coverhead.css'
import Main from './img/Main.jpg'
import beansNew from './img/beansNew.svg' 
import { Link } from "react-router-dom";


function Coverhead(){
    return(
        <div className="cover_conteiner_for">
        <div className="conteiner">
          <img className="cover_head_img" src={Main} alt="" />
          <div className="header">
            <ul>
              <li>Coffee House</li>
              <li><Link to='/coffee-page'> Our Coffee</Link></li>
              <li><Link to='/for-pleasure'>For your pleasure</Link> </li>
            </ul>
            <div className="header_text">
              <p className="header_text_head">Everything You Love About Coffee</p>
              <div className="beacon_line">
                <img
                  className="beacon_img"
                  src={beansNew}
                  alt=""
                />
              </div>
              <div className="text_beans">
                <p>We makes every day full of energy and taste</p>
                <p>Want to try our beans?</p>
                <div className="button_block">
                  <button className="more">More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Coverhead
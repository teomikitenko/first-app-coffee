import './headPage.css'
import Mask from './Mask.jpg'
import { Link } from "react-router-dom";



function PageHead(){
    return(
        <div className="cover_conteiner">
        <div className="conteiner">
          <img className="cover" src={Mask} alt=""/>
          <div className="link_header">
            <ul>
              <li><Link to='/'>Coffee House</Link></li>
              <li>Our Coffee</li>
              <li><Link to='/for-pleasure'>For your pleasure</Link> </li>
            </ul>
          </div>
        </div>
      </div>
    )
}
export default PageHead
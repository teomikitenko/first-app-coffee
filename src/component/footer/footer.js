import './footer.css'
import blackBeans from './blackBeans.svg'
import { Link } from "react-router-dom";




function Footer(){
    return(
        <div className="footer_emd">
        <div className="conteiner">
          <div className="text_footer">
            <ul>
              <li><Link to='/'>Coffee house</Link></li>
              <li><Link to='/coffee-page'> Our coffee</Link></li>
              <li><Link to='/for-pleasure'>For your pleasure</Link> </li>
            </ul>
          </div>
          <div className="beans_black_block_footer">
            <img
              className="beans_black_footer"
              src={blackBeans}
              alt=""
            />
          </div>
        </div>
      </div>

    )
}
export default Footer
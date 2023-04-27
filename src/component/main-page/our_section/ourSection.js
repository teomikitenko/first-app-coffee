import MaskGroup from './MaskGroup.jpg'
import item1 from './item1.jpg'
import item2 from './item2.jpg'
import item3 from './item3.jpg'
import './ourSection.css'
import { Link } from "react-router-dom";


function OurSection(){
    return(
        <div className="our_best_block">
          <div className="conteiner">
            <div className="cover_items">
              <img className="mask_items" src={MaskGroup} alt="" />
              <div className="our_items">
                <p>Our best</p>
              </div>
              <div className="items_flex">
                <Link to='/coffee-page'>
                <div className="my_blocks">
                  <div className="img">
                    <img src={item1} alt="" />
                  </div>
                  <div className="text_blocks">
                    <p className="text_item">Solimo Coffee Beans 2 kg</p>
                    <p className="price_item">10.73$</p>
                  </div>
                </div>
                </Link>
                 <Link to='/coffee-page'>
                 <div className="my_blocks">
                  <div className="img">
                    <img src={item2} alt="" />
                  </div>
                  <div className="text_blocks">
                    <p className="text_item">Presto Coffee Beans 1 kg</p>
                    <p className="price_item">15.99$</p>
                  </div>
                </div>
                 </Link>
                 <Link to='/coffee-page'>
                 <div className="my_blocks">
                  <div className="img">
                    <img src={item3} alt="" />
                  </div>
                  <div className="text_blocks">
                    <p className="text_item">AROMISTICO Coffee 1 kg</p>
                    <p className="price_item">6.99$</p>
                  </div>
                </div>
                 </Link>
              </div>
            </div>
          </div>
        </div>
    )
}
export default OurSection
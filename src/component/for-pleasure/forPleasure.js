import { Component } from "react";
import Pleasure from './Pleasure.jpg';
import coffee from './coffee.jpg'
import blackBeans from './blackBeans.svg'
import { Link } from 'react-router-dom';
import Footer from "../footer/footer";



class ForPleasure extends Component{
    constructor(props){
        super(props)
    }
    onSend=(name,img,country,price)=>{
        let{onCreate}=this.props;
        onCreate(name,img,country,price)
       }
    render(){
        let {data}=this.props
        let arr=data.map(item=>{
            return(
                <Link onClick={()=>this.onSend(item.name,item.img,item.country,item.price)} to='/coffee-item-page'>
                <div  key={item.id} className="card_item">
                  <img  className="image_card"src={item.img} alt=""/>
                  <p className="name_coffee">{item.name}</p>
                  <p className="country_coffee" >{item.country}</p>
                  <p  className="price_cofee">{item.price}</p>
                </div></Link>
            )
        })
        return(
            <>
            <div className="cover_conteiner">
        <div className="conteiner">
          <img className="cover" src={Pleasure} alt=""/>
          <div className="link_header">
            <ul>
              <li><Link to='/'>Coffee House</Link></li>
              <li><Link to='/coffee-page'> Our coffee</Link></li>
              <li>For your pleasure</li>
            </ul>
          </div>
        </div>
      </div>
       <div className="middle">
       <div className="middle_text_photo">
         <div className="photo">
           <img src={coffee} alt=""/>
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
     <div className="conteiner_for_items">
          <div className="items_card">
            {arr}
         
          </div>
        </div>
        <Footer/>
     </>
        )
    }
}
export default ForPleasure
import { Component } from "react";
import PageHead from "../coffe-page/head_page/headPage";
import blackBeans from './blackBeans.svg'
import Footer from "../footer/footer";
import AROMISTICO from './img coffee/AROMISTICO.jpg'
import NESCAFE from './img coffee/NESCAFE.jpg'
import BLASERCAFE from './img coffee/BLASERCAFE.jpg'
import JACOBS from './img coffee/JACOBS.jpg'
import STARBUCKS from './img coffee/STARBUCKS.jpg'
import LAVAZZA from './img coffee/LAVAZZA.jpg'







class Goods extends Component{
    constructor(props){
    super(props)
    this.state={
      data:[
        {name:'AROMISTICO Coffee 1 kg',img:AROMISTICO,text:"Experience premium taste in every coffee cup of the Roma Italian Medium Roast Coffee Blend by Aromistico.Crafted with excellent-quality beans and careful processes, our coffee blend is a gourmet treat you can easily enjoy at home."},
        {name:'NESCAFE Coffee 1 kg',img:NESCAFE,text:'NESCAFE Tasters Choice House Blend Coffee Stick Packs create a smooth and mild roasted instant coffee made from 100% pure, responsibly sourced coffee beans.  '},
        {name:'LAVAZZA Coffee 1 kg',img:LAVAZZA,text:'It’s no accident that Lavazza is Italy’s favorite coffee. Four generations of the Lavazza family have dedicated over 120 years to finding the best blends of coffee beans from all over the world to provide you the authentic Italian experience.'},
        {name:'JACOBS Coffee 1 kg',img:JACOBS,text:'Jacobs expert roasting is made with the passion of our experienced roast masters. Continuously they check the roasting process'},
        {name:'BLASERCAFE Coffee 1 kg',img:BLASERCAFE,text:'An amazing coffee bouquet with original taste qualities, which were achieved by combining the best varieties of Specialty Arabica. Has a high concentration of flavors, ideal for preparing coffee cream (100 ml), as well as delicate, aromatic espresso'},
        {name:'STARBUCKS Coffee 1 kg',img:STARBUCKS,text:'A shade lighter than most of our offerings—more toasty than roasty—it was the result of playing with roast and taste profiles together for a flavor that appealed to a wider range of palates.'},
      ]
    }
 
    }
    render(){
      let {data}=this.state
      let choiseCoffee=data.filter(item=>item.name === this.props.data.name)
      console.log(choiseCoffee[0])
        return(
            <>
            <PageHead/>
            <div className="middle">
        <div className="middle_text_photo">
          <div className="photo">
            <img src={choiseCoffee[0].img} alt=""/>
          </div>
          <div className="text_middle">
            <p className="about">About our beans</p>
            <div className="beans_middle_black_block">
              <img className="beans_middle_black_img" src={blackBeans} alt="" />
            </div>
              <p className="main_text">
                {this.props.data.name}
                <br/><br/>
  
                Country: {this.props.data.country}
                <br/>
               {this.state.data.text}
                <br/><br/>
               {choiseCoffee[0].text}
               <br /><br />
                Price:  {this.props.data.price}
              </p>
           
          </div>
        </div>    <div className="block_line"><div className="line"></div></div>
        <div className="blocks_for_items">
    </div>
      </div>
     <Footer/>
            </>
        )
     
    }
}
export default Goods


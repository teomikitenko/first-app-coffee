import './Endsection.css'
import { Component } from 'react'
import { Link } from 'react-router-dom';


 class End extends Component{
    constructor(props){
        super(props)
        this.state={
            filter:'All',
            search:''
        }
    }

  update=(e)=>{
    this.setState(({filter})=>{
        return{
            filter:e.target.innerHTML
        } 
     })
  }
  filtered=(arr,name)=>{
    if(name === 'All'){
      return arr
    }else{
      let newArr=arr.filter(item=>item.country === name)
      return newArr
    }
    
  }

  updateSearch=(e)=>{
    let text=e.currentTarget.value.toUpperCase()
    this.setState({search:text})
   }

   search=(arr,search)=>{
    if(search.length === 0){
      return arr
    }
    return arr.filter(item=>{
      return item.name.indexOf(search)> -1
    })
   }

    onSend=(name,img,country,price)=>{
     let{onCreate}=this.props;
     onCreate(name,img,country,price)
    }
    
    render(){
        let{filter,search}=this.state;
        let {data}=this.props;
        let searchArr=this.search(data,search)
        let filteredArr=this.filtered(searchArr,filter)
        let element=filteredArr.map(item=>{
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
     
            <div className="block_for_items">
          <div className="input_filter">
            <div className="input_text">
               <p className="looking_for">Looking for </p> <input onChange={this.updateSearch} className="input_loking" type="text" placeholder="start typing here..."/></div>
           
          <div className="filters">
            <div className="or_filters"> <p className="our_filters">Or Filters</p></div>
           <div className="buttons_filters">
            <button onClick={this.update}  className="buttons_country">Brazil</button>
            <button onClick={this.update} className="buttons_country">Kenya</button>
            <button onClick={this.update} className="buttons_country">Columbia</button>
            <button onClick={this.update} className="buttons_country">All</button>
           </div> 
          </div>
          </div>
          <div className="conteiner_for_items">
          <div className="items_card">
            {element}
         
          </div>
        </div>
        </div>
        )
    }
    
}
export default End
import { Component } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './main-page/main-page';
import CoffeePage from './coffe-page/coffee-page';
import Goods from './coffe-item-page/coffee-item-page';
import ForPleasure from './for-pleasure/forPleasure';
import nextId from "react-id-generator";
import Card from './Card.jpg'



 
class App extends Component  {
  constructor(props){
    super(props)
    this.state={
      ourProducts:[
        {name:'NESCAFE Coffee 1 kg',img:Card,country:'Brazil',price:'5.99$',id:nextId()},
        {name:'AROMISTICO Coffee 1 kg',img:Card,country:'Kenya',price:'8.99$',id:nextId()},
        {name:'STARBUCKS Coffee 1 kg',img:Card,country:'Columbia',price:'5.99$',id:nextId()},    
        {name:'LAVAZZA Coffee 1 kg',img:Card,country:'Brazil',price:'8.99$',id:nextId()},
        {name:'BLASERCAFE Coffee 1 kg',img:Card,country:'Brazil',price:'9.99$',id:nextId()},
        {name:'JACOBS Coffee 1 kg',img:Card,country:'Brazil',price:'5.99$',id:nextId()},
    ],
      create:'',
    }
  }
create=(name)=>{
  let obj=this.state.ourProducts.filter(item=>item.name === name)
  this.setState({create:obj[0]})
}


render(){
  return (
    <BrowserRouter>
    <Routes>
      < Route path='/' element={<MainPage/>} />
      <Route path='/coffee-page' element={<CoffeePage onCreate={this.create} data={this.state.ourProducts}/>}></Route>
      <Route path='/coffee-item-page' element={<Goods data={this.state.create}/>}></Route>
      <Route path='/for-pleasure' element={<ForPleasure data={this.state.ourProducts} onCreate={this.create}/>}></Route>
    </Routes>
     
    </BrowserRouter>
  );
}
}

export default App;

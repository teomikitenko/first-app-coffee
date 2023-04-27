import PageHead from './head_page/headPage';
import MiddlePath from './middle_section/middle_s';
import End from "./end-section/Endsection";
import Footer from "../footer/footer";




function CoffeePage(props){
    return(
        <>
         <PageHead/>
         <MiddlePath/>
         <End onCreate={props.onCreate} data={props.data}/>
         <Footer/>
        </>
       
        
    )
}
export default CoffeePage
import Cards from './Components/Cards';
import Flip from './Components/Flip';
import Vid_Up from './Components/Vid_Up';
import Vid_Down from './Components/Vid_down';
import Video from './Components/Video';
import Footer from './componends/footer/footer';
import Navbar from './componends/navbar/navbar';
import Navbar2 from './componends/navbar2/navbar2';
import Slider from './componends/slider/slider';
import Shopbygoal from './componends/shopby/shopbygoal';
import Abfooter from './componends/abovefooter/abfooter';
import Fitnessbrac from './componends/fitnessbrac/fitnessbrac';
import { popular } from './Components/data_1';
import { Blockbuster } from './Components/data_1';
import { Fitness_Budget_Stacks } from './Components/data_1';
import { MB_Lifestyle } from './Components/data_1';
import Cat from './Components/Cat';
import { trending } from './componends/trending';
import { justlaunch } from './componends/justlaun';
import CombinedComponent from './Components/popular';
function App() {
  return (
    <>
    {/* <Navbar/> 
    <Navbar2/> */}
    <Slider/>
    <div style={{backgroundImage:"url("+"https://static1.hkrtcdn.com/mbnext/static/media/common/best-selling-desktop-be.svg"+")"}}><Cards title={"Blockbuster Deals"} cardData={Blockbuster}/></div>
    <div style={{backgroundImage:"url("+"https://static1.hkrtcdn.com/mbnext/static/media/common/popular_v1.svg"+")"}}> <CombinedComponent  title={"Popular"} cardData={popular}/> </div>
    <div style={{backgroundImage:"url("+"https://static1.hkrtcdn.com/mbnext/static/media/common/best-selling-desktop-be.svg"+")"}}><Cards  title={"Fitness Budget Stack "} cardData={Fitness_Budget_Stacks}/></div>
    <div style={{backgroundImage:"url("+"https://static1.hkrtcdn.com/mbnext/static/media/common/best-selling-desktop-be.svg"+")"}}><Cards title={"MB Lifestyle"} cardData={MB_Lifestyle}/></div>
    <div style={{backgroundImage:"url("+"https://static1.hkrtcdn.com/mbnext/static/media/common/best-selling-desktop-be.svg"+")"}}><Cards title={"Trending"} cardData={trending}/></div>
    
    <Fitnessbrac/>
    <Shopbygoal/>
    <Flip/>
    <div style={{backgroundImage:"url("+"https://static1.hkrtcdn.com/mbnext/static/media/common/best-selling-desktop-be.svg"+")"}}><Cards title={"Just Launch"} cardData={justlaunch}/></div>
    <Vid_Up/>
    <Video/>
    <Vid_Down/>
    <Abfooter/>
    <Footer/>
    {/* <Cat/> */}

    </>
  );
}

export default App;

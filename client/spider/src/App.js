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

const cardData = [
  {
    image: "https://img3.hkrtcdn.com/27426/prd_2742542-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_c_m.jpg",
    title: "Biozyme Performance Whey",
    description: "4.4 lb Rich chocolate",
    price: 400,
    originalPrice: 500,
    discount: 100
  },
  {
      image: "https://img2.hkrtcdn.com/29736/prd_2973551-MuscleBlaze-Super-Gainer-XXL-Weight-Gainer-11-lb-Chocolate_c_m.jpg",
      title: "High Protein Peanut Butter,",
      description: "1 kg Dark Chocolate Creamy",
      price: 4000,
      originalPrice: 5000,
      discount: 1000
    },{
      image: "https://img8.hkrtcdn.com/32169/prd_3216827-MuscleBlaze-Creatine-Monohydrate-0.88-lb-Unflavoured_c_m.jpg",
      title: "Super Gainer XXL Weight Gainer",
      description: "11 lb Chocolate",
      price: 4444,
      originalPrice: 5555,
      discount: 1000
    },{
      image: "https://img8.hkrtcdn.com/29896/prd_2989517-MuscleBlaze-High-Protein-Peanut-Butter-1-kg-Dark-Chocolate-Creamy_c_m.jpg",
      title: "Creatine Monohydrate CreAMP",
      description: "0.88 lb Unflavoured",
      price: 400,
      originalPrice: 500,
      discount: 100
    },
]
function App() {
  return (
    <>
    <Navbar/> 
    <Navbar2/>
    <Slider/>
    <Cards cardData={cardData}/>
    <Shopbygoal/>
    <Flip/>
    <Vid_Up/>
    <Video/>
    <Vid_Down/>
    <Abfooter/>
    <Footer/>
    </>
  );
}

export default App;

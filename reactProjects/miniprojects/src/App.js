
import './App.css';
import ImageSlider from './components/image-slider';
// import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/*  Accordian component*/}
      {/* <Accordian/> */}

      {/* Random Color */}
      {/* <RandomColor/> */}

      {/* Star rating */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider  */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'2'}/>
    </div>
  );
}

export default App;

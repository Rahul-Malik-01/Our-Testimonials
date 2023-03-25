import './App.css'
import Testimonials from './components/Testimonials';
import reviews from './data';

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#E5E7EB] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center"> 
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="w-[50%] h-1 bg-blue-400 mt-3 md:mt-1"></div>
      </div>

      <div className="mt-10">
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
}

export default App

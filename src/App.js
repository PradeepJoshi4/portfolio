import Home from './component/home';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="container">
      <div> 
        <Navbar />
      </div>

      <div className='mt-5'>
        <Home />
      </div>
    </div>
  );
}

export default App;

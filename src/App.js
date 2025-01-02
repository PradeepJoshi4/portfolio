import Experience from './component/experience/experience';
import Home from './component/home';
import Navbar from './component/navbar';
import Skills from './component/skills';

function App() {
  return (
    <div >
      <div>
        <Navbar />
      </div>

      <div className='mt-5'>
        <Home />
      </div>
      <hr />
      <div>
        <Experience />
      </div>
      <hr />
      <div>
        <Skills />
      </div>
      <hr />

    </div>
  );
}

export default App;

import Navbar from "./components/A-Navbar/Navbar";
import Header from "./components/B-Header/Header";
import ProductList from "./components/C-Body/ProductList";
import BuilderTwo from "./components/C-Body/BuilderTwo";

import About from "./components/D-Footer/About";
import './index.css';
import BuilderThree from "./components/C-Body/BuilderThree/BuilderThree";
import BuilderFour from "./components/C-Body/BuilderFour/BuilderFour";
import WebBuilder from "./components/C-Body/WebBuilder/WebBuilder";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
       <Header />
       <BuilderTwo />
       <BuilderThree />
       <BuilderFour />
       <WebBuilder />
       <ProductList /> 
       <About />
      </header>
    </div>
  );
}

export default App;

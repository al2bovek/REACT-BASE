import logo from './logo.svg';
import './App.css';
import LabasZuikis from './components/LabasZuikis';
import GaunaPropa from './components/GaunaPropa';
import ZebraiIrBebrai from './components/ZebraiIrBebrai';
import GaunaDuPropsus from './components/GaunaDuProps';
import GaunaTrisPropsus from './components/GaunaTrisPropsus';


function App() {
  return (
  
    <div className="App">
     
      <header className="App-header">
        <LabasZuikis />
        <GaunaPropa pasilabinimas='Labas'/>
        <ZebraiIrBebrai tikVienasArbaDu={12}/>
        <GaunaDuPropsus pasilabinimas='Sveiki' strong='!'/>
        <GaunaTrisPropsus pasilabinimas='Hi there' strong='!!!' spalva='orange'/>
        <h3></h3>
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
       
      </header>
      
    </div>
  );
}

export default App;

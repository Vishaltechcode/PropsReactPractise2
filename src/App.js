import './App.css';
import ParentComponent from './ParentComponent';
import ThemeContext from './ThemeContext';
import Page from './page';

function App() {
  
  let color="red";
  return (
    <div className="App">
      <h1>experiments of context api - 1</h1>
      <ParentComponent mycolor={color}/>
 
      {/*  <ThemeContext.Provider>


      <ThemeContext.Provider/> */}
      <Page/>
    </div>
  );
}

export default App;

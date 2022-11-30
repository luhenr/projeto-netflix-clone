import './App.css';
import Row from "./components/Row.js";
import categories from "./api";
import Banner from './components/Banner';
function App() {
  return (
    <div className="App">
      <Banner></Banner>
      {categories.map((category) => {
        return(
        <Row 
          key={category.nome} 
          title={category.title} 
          path={category.path}
          isLarge={category.isLarge}
        />
        );
      })}
    </div>
  );
}

export default App;

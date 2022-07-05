import './App.css';

import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;

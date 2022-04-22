import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Character from './components/characters/Character';
import Seasons from './components/seasons/Seasons';
import News from './components/news/News';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div>
        <Home />
        <Character />
        <Seasons />
        <News />
        <Footer />
      </div>
    </div>
  );
}

export default App;

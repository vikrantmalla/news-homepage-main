import Nav from "./components/Nav";
import Banner from "./components/Banner";
import News from "./components/News";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Banner/>
        <News/>
      </main>
    </div>
  );
}

export default App;

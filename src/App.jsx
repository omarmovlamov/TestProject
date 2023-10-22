import "./App.css";
import "./styles/reset.css";
import "./styles/global.css";
import Header from "./components/Header";
import ContentT from "./components/ContentT";

function App() {
  return (
    <>
      <div className="App">
        <div className="Container">
          <Header />
          <ContentT />
        </div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Card from "./components/Card";
import { ContextIndex } from "./contexts/ContextIndex";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContextIndex>
          <Card />
        </ContextIndex>
      </header>
    </div>
  );
}

export default App;

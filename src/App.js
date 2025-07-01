import { RoutesAll } from "./routes/RoutesAll";
import { Footer, Header } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <RoutesAll />
      <Footer />
    </div>
  );
}

export default App;

import { HomePage } from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { PortifolioProvider } from "./context/PortifolioContext";

function App() {
  return (
    <div className="App">
      <PortifolioProvider>
        <HomePage />
      </PortifolioProvider>
    </div>
  );
}

export default App;

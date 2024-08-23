import Navigation from "./components/Navigation";
import './App.css'
import SplineTool from "./components/Spline";

function App() {
  return (
    <div className="flex flex-row">
      <Navigation className="absolute" />
      <SplineTool className="w-[100%]" />
    </div>
  );
}

export default App;

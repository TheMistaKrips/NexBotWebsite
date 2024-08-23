import Navigation from "./components/Navigation";
import './App.css'
import SplineTool from "./components/Spline";
import Details from "./components/Details";

function App() {
  return (
    <div className="flex flex-row ">
      <Navigation />
      <SplineTool />
      <Details />
    </div>
  );
}

export default App;

import "./App.css";
import { ImagineSlider } from "./components/ImagineSlider";
import { data } from "./components/data";

function App() {
  return (
    <div className="App">
      <ImagineSlider images={data}></ImagineSlider>
    </div>
  );
}

export default App;

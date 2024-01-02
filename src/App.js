import { Header } from "./components/Header";
import {
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import { About } from "./views/About";
import { Home } from "./views/Home";
import { MovieDetaill } from "./views/MovieDetaill";


function App() {

  return (
    <div className="App">
     <BrowserRouter>
        <Header />

        <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/movie/:id" element={<MovieDetaill />} />{" "}
        <Route path="/About" element={<About />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

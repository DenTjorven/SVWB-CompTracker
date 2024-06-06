import './App.css';
import { Routes, Route} from "react-router-dom";
import Players from "./routes/Players";
import Tournaments from "./routes/Tournaments";
import Home from "./routes/Home";
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/tournaments" element={<Tournaments />} />
      </Routes>
    </>
  );
}
export default App;
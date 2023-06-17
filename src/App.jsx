import Navigation from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./Recommended/Recommended";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;

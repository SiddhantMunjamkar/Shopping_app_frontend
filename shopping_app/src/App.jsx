import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Product from "./components/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="products" element={<Product />}></Route>
        </Route>
        <Route path="login" element={<div>this is login page</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

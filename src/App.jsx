import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Games from "./pages/Games";
import Replenishment from "./pages/Replenishment";
import SubscriptionPage from "./pages/SubscriptionPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/games" element={<Games />} />
        <Route path="/replenish" element={<Replenishment />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

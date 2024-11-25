import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePages from "./pages/HomePages";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />
      {/* CONTENT */}
      <HomePages />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;

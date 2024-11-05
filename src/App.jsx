import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";

export default function App() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <HomePage />

            {/* Footer*/}
            <Footer />
        </div>
    );
}

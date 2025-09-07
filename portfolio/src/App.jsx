import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Tutoring from "./components/sections/Tutoring";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-primary text-textPrimary overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      {/* Main Content */}
      <main>
        <About />
        <Projects />
        <Tutoring />
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

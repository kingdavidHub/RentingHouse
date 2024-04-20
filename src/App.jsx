import Footer from "./Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="sm:w-4/5 sm:mx-auto">
        <Header />
        <Hero />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;

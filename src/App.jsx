// src/App.js
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    console.log("Splash screen finished!");
    setSplashVisible(false);
  };

  return (
    <>
      {isSplashVisible ? (
        <SplashScreen onFinish={handleSplashFinish} duration={2000} />
      ) : (
        <div className="min-h-screen w-full bg-zinc-900 text-zinc-100 flex flex-col">
        
        <main className="flex-1 flex flex-col mx-auto ">
          <Header/>
          {/* Home */}
          <Hero/>
          {/* About */}
          <About/>
        </main>
      </div>
      )}
    </>
  );
}

export default App;

import "./App.css";
import { useEffect } from "react";
import gsap from "gsap";

function App() {
  useEffect(() => {
    const t1 = gsap.timeline();
  }, []);

  return (
    <div className="app">
      <div className="box1">
        <h1>
          <span className="box1-1">Hi Everyone ,</span>
          <span className="box1-2"> I am Shailesh Bisht</span>
        </h1>
      </div>
    </div>
  );
}

export default App;

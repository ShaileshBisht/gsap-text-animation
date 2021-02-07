import "./App.css";
import { useEffect } from "react";
import gsap from "gsap";

function App() {
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".box1", {
      duration: 1,
      opacity: 0,
      x: "-200px",
      ease: "back.out(1.7)",
    })
      .to(".box1-1", {
        duration: 1.5,
        background: "blue",
        ease: "steps(12)",
      })
      .to(
        ".box1-1",
        { duration: 1.5, color: "white", ease: "steps(12)" },
        "-=1.5"
      );
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

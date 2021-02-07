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
        borderRadius: "50px",
        padding: "10px",
      })
      .to(
        ".box1-1",
        { duration: 1.5, color: "white", ease: "steps(12)" },
        "-=1.5"
      )
      .to(".box1-2", { duration: 2, opacity: 1, textDecoration: "underline" });
  }, []);

  return (
    <div className="app">
      <div className="box1">
        <h1>
          <span className="box1-1">Hi Everyone ,</span>
          <span className="box1-2"> I am Shailesh Bisht</span>
        </h1>
      </div>
      <div className="box2">
        <span>This </span>
        <span>is </span>
        <span>a </span>
        <span>random </span>
        <span>animation</span>
      </div>
    </div>
  );
}

export default App;

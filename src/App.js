import "./App.css";
import { useEffect } from "react";
import gsap from "gsap";

function App() {
  useEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
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
      .to(".box1-1", { duration: 1.5, color: "white", ease: "steps(12)" })
      .to(".box1-2", { duration: 2, opacity: 1, textDecoration: "underline" });

    t2.from(".box2-1", { duration: 1, scale: 3, opacity: 0, stagger: 1 });
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
        <div className="box2-1">This </div>
        <div className="box2-1">is </div>
        <div className="box2-1">a </div>
        <div className="box2-1">random </div>
        <div className="box2-1">animation</div>
      </div>
    </div>
  );
}

export default App;

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
      scale: 2,
      ease: "back.out(1.7)",
    })
      .to(".box1-1", {
        duration: 2,
        transformOrigin: "left",
        background: "blue",
        fontWeight: "900",
        ease: "bounce.out",
        borderRadius: "30px",
        padding: "10px",
      })
      .to(
        ".box1-1",
        { duration: 1.5, color: "yellow", ease: "steps(12)" },
        "-=1.5"
      )
      .from(".box1-2", {
        duration: 1,
        opacity: 0,
        ease: "elastic.out(1, 0.3)",
        y: -200,
      })
      .to(".box1-2", {
        duration: 2,
        textDecoration: "underline",
      });

    t2.from(
      ".box2-1",
      {
        repeat: -1,
        yoyo: true,
        duration: 1,
        y: 10,
        opacity: 0,
        stagger: 0.5,
        ease: "elastic.out(1, 0.3)",
      },
      "+=4"
    ).to(
      ".innerBox",
      {
        duration: 2,
        borderLeft: "30px double blue",
        borderRight: "30px double blue",
        ease: "bounce.out",
        yoyo: true,
        repeat: -1,
      },
      "-=2"
    );
  }, []);

  return (
    <div className="outerBox">
      <div className="innerBox">
        <div className="app">
          <div className="box1">
            <div className="box1-1">Hi Everyone ,</div>
            <div className="box1-2"> it's Shailesh Bisht</div>
          </div>
          <div className="box2">
            <div className="box2-1">This </div>
            <div className="box2-1">is </div>
            <div className="box2-1">a </div>
            <div className="box2-1">random </div>
            <div className="box2-1">animation</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

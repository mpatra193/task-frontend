import './App.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function App() {

  useGSAP(() => {

    let panels = gsap.utils.toArray(".panel");

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false
      })

      if (i === 0) return; // Skip the first panel (no panel underneath to fade)

      gsap.to(panels[i - 1], {
        opacity: 0, // Fade out previous panel
        ease: "power1.out",
        scrollTrigger: {
          trigger: panel,
          start: "80px 80%", // Start fade when new panel reaches 80% of viewport
          end: "bottom 30%", // Fully faded at 30%
          scrub: true, // Smooth fade effect while scrolling
        },
      });


    })
  }, []);
  return (
    <>
      <div id='black' className='panel'>
        <h1>Create 
          interactive content
          in minutes
          without limits</h1>
        <p style={{color:'rgb(206, 209, 209)'}}>Transform your brand's growth with AI-powered quizzes and tests – drive leads, engage audiences, and boost your brand recognition</p>
        <div id="button">
          <button style={{backgroundColor:"rgb(213, 254, 82)",color:"black",padding:"1em",borderRadius:"20px",fontSize:"700",marginBottom:"3em"}}>Get Started For Free</button>
        </div>
      </div>
      {/* <div id='video' className='panel'> */}
        <div className='panel' style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",borderRadius:"50% 50%"}}>
          <video src="https://customer-qgr44r9yt2lkcpif.cloudflarestream.com/737e3ae7278c91a89c3e1925e2ecd9f6/downloads/default.mp4" loop autoPlay muted poster="https://framerusercontent.com/images/ZFdqU53lnXYMCFo7mFG7Ri2hI.jpeg" playsinline="" style={{ cursor: "pointer", width: "80%", height: "100%", borderRadius: "50px", display:"block", objectFit: "cover", objectPosition: "50% 50%" }}></video>
        </div>
      {/* </div> */}
      {/* <div id='blue' className='panel'></div> */}
    </>
  )
}

export default App

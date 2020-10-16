import Head from 'next/head'
import { useRef, useEffect, useState } from "react"
import { TweenMax} from "gsap"

const customEase = [0.6, 0.02, 0.05, 0.9]
export default function Index() {
  let menuButton = useRef(null)
  let navOverlay = useRef(null)
  let span1 = useRef(null)
  let span2 = useRef(null)
  let span3 = useRef(null)
  let span4 = useRef(null)
  let links = useRef(null)
  let backgroundImage = useRef(null)
  let navigation = useRef(null)
  let headlineTop = useRef(null)
  let headlineBottom = useRef(null)
  let actionLink = useRef(null)
  let underline = useRef(null)
  let description = useRef(null)
  useEffect(() => {
    TweenMax.from(backgroundImage, 1, {
      scale: 1.25,
      ease: customEase,
      delay: 0.3,
    })
    TweenMax.from(navigation, 1.7, {
      y: -15,
      ease: customEase,
      delay: 1.5,
    })
    TweenMax.to(navigation, 1.7, {
      opacity: 1,
      ease: customEase,
      delay: 1,
    })
    TweenMax.staggerTo(
      [headlineTop, headlineBottom],
      1,
      { width: "100%", ease: customEase, delay: 0.7 },
      0.2
    )
    TweenMax.from(actionLink, 0.8, {
      opacity: 0,
      y: -15,
      ease: customEase,
      delay: 1.5,
    })
    TweenMax.from(underline, 0.8, {
      opacity: 0,
      width: 0,
      ease: customEase,
      delay: 1.8,
    })
    TweenMax.from(description, 0.8, {
      opacity: 0,
      y: 30,
      ease: customEase,
      delay: 1.8,
    })
  }, [])
  const [toggle, setToggle] = useState(false)
  const toggleMenu = () => {  
    if(!toggle){
      TweenMax.to(
        navOverlay,
        0.6,
        {
          display: "block",
          width: "100%",
          ease: customEase,
          delay: 0.2
        }
      )      
      TweenMax.from(
        links,
        0.1,
        {
          opacity: 0,
          ease:customEase,
          delay: 1
        }
      )
      TweenMax.staggerTo(
        [span1,span2,span3,span4],
        0.8,
        { width: "0%", ease: customEase, delay: 0.7},
        0.2
      )
      TweenMax.to(
        menuButton,
        1,
        {
          opacity: 1,
          delay:0.5          
        }
      )
    }  
    else{
      TweenMax.to(
        navOverlay,
        0.4,
        {
          width: "0%",
          display: "none",
          ease: customEase,
          delay: 0.2
        }
      )  
      TweenMax.staggerTo(
        [span1,span2,span3,span4],
        0.1,
        { width: "100%", ease: customEase},        
      )              
    }
    setToggle(!toggle);
  }
  return (
    <>
      <Head>
        <title>Dicover Wilderness</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="navigation-overlay" ref={el=>navOverlay=el}></div>
      <div className="root-container">
        <div
          className="background-img"          
          ref={(el) => (backgroundImage = el)}
        ></div>
        <div className="container">          
          <header ref={(el) => (navigation = el)}>
            <nav className={toggle?"toggle":""}>
              <div><a href="/" className={`logo ${toggle?"toggle":""}`}>Discover</a></div>
              <ul className={toggle?"nav-links-large":""} ref={el=>links=el}>
                <li><a href="/">About us</a><span className={toggle?"link-overlay":""} ref={el=>span1=el}></span></li>
                <li><a href="/">Stories</a><span className={toggle?"link-overlay":""} ref={el=>span2=el}></span></li>
                <li><a href="/">Learn</a><span className={toggle?"link-overlay":""} ref={el=>span3=el}></span></li>
                <li><a href="/">Growth</a><span className={toggle?"link-overlay":""} ref={el=>span4=el}></span></li>
              </ul>
              <div className="contact">Contact</div>
              <button ref={el=>menuButton=el}className={`menu ${toggle?"toggle":""}`} onClick={toggleMenu} >
                <span> </span>
                <span> </span>
                <span> </span>
              </button>
            </nav>
          </header>
          <main>
            <div className="headline">
              <div className="headline-top" ref={(el) => (headlineTop = el)}>
                <h1>Experience your</h1>
              </div>
              <div
                className="headline-bottom"
                ref={(el) => (headlineBottom = el)}
              >
                <h1>next chapter</h1>
              </div>
            </div>
            <div className="action-link" ref={(el) => (actionLink = el)}>
              <a href="/">Find out more</a>
              <div className="underline" ref={(el) => (underline = el)}></div>
            </div>
            <div className="description" ref={(el) => (description = el)}>
              You have to leave the city of your comfort and go into the
              wilderness of your intuition. What you'll discover will be
              wonderful. What you'll discover is yourself.
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

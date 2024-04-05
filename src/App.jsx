import { Fragment } from "react";
import './App.css'
import './index.css'
import logo from './assets/logo-header.png'
import heroTitle from './assets/hero-title.png'
import heroImg from './assets/hero-img.png'
import heroBtn from './assets/hero__btn-icon.png'

const App = () => {
  return (
    <Fragment>
      <section className="halloween">
        <div className="container">
          <h3>www.nickelfox.com</h3>
          <div className="hero">
            <header className="header">
              <div className="header__wrap">
                <img src={logo} alt="header-logo" />
                <div className="links">
                  <div className="menu">
                    <a href="#">Home</a>
                    <a href="#">Home</a>
                    <a href="#">Home</a>
                    <a href="#">Home</a>
                  </div>
                  <button>
                    Contact Us
                  </button>
                </div>
              </div>
            </header>

            <div className="hero__wrap">
              <div className="hero__card">
                <img src={heroTitle} alt="title" />
                <p>We  create solutions that have top notch ui/ux designs and software development standards, suitable for best web products &  iOS & Android apps, crafted with love & passion.</p>
                <button className="hero__btn">Contact Us</button>
                <div className="hero__menu">
                  <button>
                    <img src={heroBtn} alt="" />
                    Web Design
                  </button>
                  <button>
                    <img src={heroBtn} alt="" />
                    Web Design
                  </button>
                  <button>
                    <img src={heroBtn} alt="" />
                    Web Design
                  </button>

                </div>
              </div>
              <img className="img" src={heroImg} alt="img" />
            </div>

          </div>

        </div>
      </section>
    </Fragment>
  )
}
export default App; 
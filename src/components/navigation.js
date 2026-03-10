import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-overlay.is-active .navigation-stagger-item {
  animation: none;
  opacity: 1;
  transform: none;
}
.navigation-overlay.is-active {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation-root">
        <div className="navigation-container">
          <a href="Homepage">
            <div aria-label="Tosca Advogados Home" className="navigation-brand">
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path>
                    <path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path>
                  </g>
                </svg>
              </div>
              <span className="navigation-brand-name section-title">
                <span>
                  {' '}
                  Tosca
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="navigation-thq-navigation-brand-accent-elm1">
                  Advogados
                </span>
              </span>
            </div>
          </a>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links">
              <li>
                <a href="Homepage">
                  <div className="navigation-link">
                    <span>Início</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="Homepage">
                  <div className="navigation-link">
                    <span>Áreas de Atuação</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="Homepage">
                  <div className="navigation-link">
                    <span>Sobre Nós</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="Homepage">
                  <div className="navigation-link">
                    <span>Equipe</span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="Homepage">
              <div className="btn-primary btn btn-sm">
                <span>Contato</span>
              </div>
            </a>
          </div>
          <button
            id="navigation-mobile-toggle"
            aria-label="Abrir Menu"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="navigation-overlay" className="navigation-overlay">
        <div className="navigation-overlay-header">
          <a href="Homepage">
            <div aria-label="Tosca Advogados Home" className="navigation-brand">
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path>
                    <path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path>
                  </g>
                </svg>
              </div>
              <span className="navigation-brand-name section-title">
                <span>
                  {' '}
                  Tosca
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="navigation-thq-navigation-brand-accent-elm2">
                  Advogados
                </span>
              </span>
            </div>
          </a>
          <button
            id="navigation-mobile-close"
            aria-label="Fechar Menu"
            className="navigation-mobile-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-overlay-links">
            <li className="navigation-stagger-item">
              <a href="Homepage">
                <div className="navigation-overlay-link">
                  <span>Início</span>
                </div>
              </a>
            </li>
            <li className="navigation-stagger-item">
              <a href="Homepage">
                <div className="navigation-overlay-link">
                  <span>Áreas de Atuação</span>
                </div>
              </a>
            </li>
            <li className="navigation-stagger-item">
              <a href="Homepage">
                <div className="navigation-overlay-link">
                  <span>Sobre Nós</span>
                </div>
              </a>
            </li>
            <li className="navigation-stagger-item">
              <a href="Homepage">
                <div className="navigation-overlay-link">
                  <span>Equipe</span>
                </div>
              </a>
            </li>
            <li className="navigation-stagger-item">
              <a href="Homepage">
                <div className="navigation-overlay-link">
                  <span>Contato</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-overlay-footer navigation-stagger-item">
            <p className="section-content">Porto Alegre, RS</p>
            <div className="navigation-social-row">
              <a href="#">
                <div aria-label="LinkedIn" className="navigation-social-link">
                  <span>LinkedIn</span>
                </div>
              </a>
              <a href="#">
                <div aria-label="Instagram" className="navigation-social-link">
                  <span>Instagram</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes fadeIn {from {opacity: 0;}
to {opacity: 1;}}@keyframes slideUpFade {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("navigation-mobile-toggle")
  const mobileClose = document.getElementById("navigation-mobile-close")
  const overlay = document.getElementById("navigation-overlay")
  const body = document.body

  const toggleMenu = (isOpen) => {
    overlay.classList.toggle("is-active", isOpen)
    mobileToggle.setAttribute("aria-expanded", isOpen)

    if (isOpen) {
      body.style.overflow = "hidden"
    } else {
      body.style.overflow = ""
    }
  }

  mobileToggle.addEventListener("click", () => toggleMenu(true))
  mobileClose.addEventListener("click", () => toggleMenu(false))

  const overlayLinks = overlay.querySelectorAll(".navigation-overlay-link")
  overlayLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false))
  })

  let lastScroll = 0
  const navRoot = document.querySelector(".navigation-root")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      navRoot.style.transform = "translateY(0)"
      return
    }

    if (currentScroll > lastScroll && currentScroll > 150) {
      navRoot.style.transform = "translateY(-100%)"
    } else {
      navRoot.style.transform = "translateY(0)"
    }

    lastScroll = currentScroll
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-active")) {
      toggleMenu(false)
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation

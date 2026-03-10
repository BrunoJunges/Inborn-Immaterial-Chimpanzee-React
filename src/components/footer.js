import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-top-grid">
            <div className="footer-brand-column">
              <div className="footer-logo-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="footer-logo-icon"
                >
                  <path
                    d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="footer-brand-name">Tosca Advogados</span>
              </div>
              <p className="footer-brand-description">
                Excelência jurídica em Porto Alegre. Dedicação multidisciplinar
                e ética profissional em consultoria consensual, preventiva e
                contenciosa.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div aria-label="Facebook" className="footer-social-item">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-item">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="LinkedIn" className="footer-social-item">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle r="2" cx="4" cy="4"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <nav
              aria-labelledby="footer-expertise-title"
              className="footer-nav-column"
            >
              <h2 id="footer-expertise-title" className="footer-nav-title">
                Áreas de Atuação
              </h2>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Direito Administrativo</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Direito Empresarial</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Direito de Família e Sucessões</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Direito Imobiliário</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Direito Tributário e Civil</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Pareceres e Consultoria</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="footer-contact-column">
              <h2 className="footer-nav-title">Contato</h2>
              <address className="footer-contact-info">
                <div className="footer-contact-item">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span className="footer-contact-text">
                    Porto Alegre, RS - Brasil
                  </span>
                </div>
                <div className="footer-contact-item">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <a href="tel:+555100000000">
                    <div className="footer-contact-link">
                      <span>+55 (51) 0000-0000</span>
                    </div>
                  </a>
                </div>
                <div className="footer-contact-item">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                  <a href="mailto:contato@tosca.adv.br?subject=">
                    <div className="footer-contact-link">
                      <span>contato@tosca.adv.br</span>
                    </div>
                  </a>
                </div>
              </address>
              <div className="footer-cta-wrapper">
                <a href="#">
                  <div className="btn-outline footer-cta-btn btn btn-sm">
                    <span>Agendar Consulta</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom-bar">
            <div className="footer-legal-copy">
              <span>
                &amp;copy; 2024 Tosca Advogados. Todos os direitos reservados.
              </span>
            </div>
            <div className="footer-legal-links">
              <a href="#">
                <div className="footer-legal-link">
                  <span>Privacidade</span>
                </div>
              </a>
              <a href="#">
                <div className="footer-legal-link">
                  <span>Termos de Uso</span>
                </div>
              </a>
              <a href="#">
                <div className="footer-legal-link">
                  <span>OAB/RS</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-interactivity">
(function(){
  // Hover effect for social icons to add a subtle scale
  const socialIcons = document.querySelectorAll(".footer-social-item")
  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "translateY(-5px) scale(1.1)"
    })
    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "translateY(0) scale(1)"
    })
  })

  // Smooth appearance for navigation links
  const navLinks = document.querySelectorAll(".footer-nav-link")
  navLinks.forEach((link, index) => {
    link.style.opacity = "0"
    link.style.transform = "translateX(-10px)"
    link.style.transition = \`all 0.5s ease \${index * 0.1}s\`

    // Intersection Observer to trigger entrance animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            link.style.opacity = "1"
            link.style.transform = "translateX(0)"
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(link)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer

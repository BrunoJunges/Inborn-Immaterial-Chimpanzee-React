import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Inborn Immaterial Chimpanzee</title>
        <meta property="og:title" content="Inborn Immaterial Chimpanzee" />
        <link
          rel="canonical"
          href="https://inborn-immaterial-chimpanzee-reqero.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://inborn-immaterial-chimpanzee-reqero.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-welcome">
        <div className="hero-welcome-media">
          <img
            alt="Equipe Tosca Advogados em Porto Alegre"
            src="https://images.pexels.com/photos/5673490/pexels-photo-5673490.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-welcome-image"
          />
          <div className="hero-welcome-overlay"></div>
        </div>
        <div className="hero-welcome-container">
          <div className="hero-welcome-content">
            <h1 className="hero-title">Tosca Advogados</h1>
            <p className="hero-subtitle">
              Consultoria jurídica multidisciplinar em Porto Alegre. Excelência
              técnica e ética em soluções preventivas e contenciosas.
            </p>
            <div className="hero-welcome-actions">
              <a href="#contact">
                <div className="btn-primary btn btn-lg">
                  <span>Agendar Consulta</span>
                </div>
              </a>
              <a href="#services">
                <div className="btn-outline btn btn-lg">
                  <span>Nossas Áreas</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services-snapshot">
        <div className="services-snapshot-container">
          <div className="services-snapshot-header">
            <h2 className="section-title">Nossas Áreas de Atuação</h2>
            <p className="section-subtitle">
              Soluções jurídicas integradas para cada necessidade do seu negócio
              ou vida pessoal.
            </p>
          </div>
          <div className="services-snapshot-grid">
            <div className="services-snapshot-card">
              <div className="services-snapshot-icon">
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
                    <path d="M12 12h.01M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m14 7a18.15 18.15 0 0 1-20 0"></path>
                    <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="services-snapshot-title">Direito Empresarial</h3>
              <p className="section-content">
                Assessoria estratégica para o crescimento e segurança jurídica
                da sua empresa.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Saiba mais</span>
                </div>
              </a>
            </div>
            <div className="services-snapshot-card">
              <div className="services-snapshot-icon">
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
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </g>
                </svg>
              </div>
              <h3 className="services-snapshot-title">Direito Imobiliário</h3>
              <p className="section-content">
                Segurança em transações imobiliárias, regularizações e gestão de
                propriedades.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Saiba mais</span>
                </div>
              </a>
            </div>
            <div className="services-snapshot-card">
              <div className="services-snapshot-icon">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="m17 8l5 5m0-5l-5 5"></path>
                  </g>
                </svg>
              </div>
              <h3 className="services-snapshot-title">Família e Sucessões</h3>
              <p className="section-content">
                Planejamento sucessório e resolução consensual de conflitos
                familiares.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Saiba mais</span>
                </div>
              </a>
            </div>
            <div className="services-snapshot-card">
              <div className="services-snapshot-icon">
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
                    <path d="M8.487 21h7.026a4 4 0 0 0 3.808-5.224l-1.706-5.306A5 5 0 0 0 12.855 7h-1.71a5 5 0 0 0-4.76 3.47l-1.706 5.306A4 4 0 0 0 8.487 21M15 3q-1 4-3 4T9 3z"></path>
                    <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H10m2-7v1m0 6v1"></path>
                  </g>
                </svg>
              </div>
              <h3 className="services-snapshot-title">Direito Tributário</h3>
              <p className="section-content">
                Otimização fiscal e defesa em processos administrativos e
                judiciais.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Saiba mais</span>
                </div>
              </a>
            </div>
            <div className="services-snapshot-card">
              <div className="services-snapshot-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="services-snapshot-title">Direito Civil</h3>
              <p className="section-content">
                Proteção de direitos civis, contratos e responsabilidade civil
                abrangente.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Saiba mais</span>
                </div>
              </a>
            </div>
            <div className="services-snapshot-card">
              <div className="services-snapshot-icon">
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
                    <path d="M12 12h.01M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m14 7a18.15 18.15 0 0 1-20 0"></path>
                    <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="services-snapshot-title">
                Direito Administrativo
              </h3>
              <p className="section-content">
                Consultoria em licitações, contratos públicos e processos
                disciplinares.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Saiba mais</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="why-tosca">
        <div className="why-tosca-container">
          <div className="why-tosca-header">
            <h2 className="section-title">
              Por que escolher a Tosca Advogados?
            </h2>
          </div>
          <div className="why-tosca-bento">
            <div className="bento-large why-tosca-cell">
              <div className="why-tosca-icon-wrapper">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="section-subtitle">
                Expertise Preventiva e Contenciosa
              </h3>
              <p className="section-content">
                Atuamos de forma estratégica para evitar litígios desnecessários
                através de um planejamento preventivo rigoroso, mantendo
                prontidão e combatividade técnica em demandas judiciais
                complexas.
              </p>
            </div>
            <div className="why-tosca-cell bento-small">
              <div className="why-tosca-icon-wrapper">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <circle r="3" cx="12" cy="10"></circle>
                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                  </g>
                </svg>
              </div>
              <h3 className="section-subtitle">Equipe Multidisciplinar</h3>
              <p className="section-content">
                Profissionais competentes que integram conhecimentos de diversas
                áreas para oferecer uma visão 360º de cada caso.
              </p>
            </div>
            <div className="why-tosca-cell bento-small">
              <div className="why-tosca-icon-wrapper">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Ética e Foco no Cliente</h3>
              <p className="section-content">
                Aderência estrita à ética profissional com dedicação total aos
                interesses e objetivos de nossos constituintes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-approach">
        <div className="our-approach-container">
          <div className="our-approach-header">
            <h2 className="section-title">Nosso Método de Trabalho</h2>
            <p className="section-subtitle">
              Um processo claro e estruturado para garantir a melhor defesa de
              seus direitos.
            </p>
          </div>
          <div className="our-approach-steps">
            <div className="our-approach-step">
              <div className="step-number">
                <span>01</span>
              </div>
              <h3 className="step-title">Consulta Inicial</h3>
              <p className="section-content">
                Análise profunda do caso e identificação das necessidades
                jurídicas imediatas.
              </p>
            </div>
            <div className="our-approach-step">
              <div className="step-number">
                <span>02</span>
              </div>
              <h3 className="step-title">Planejamento Preventivo</h3>
              <p className="section-content">
                Elaboração de pareceres e estratégias para mitigar riscos e
                evitar conflitos.
              </p>
            </div>
            <div className="our-approach-step">
              <div className="step-number">
                <span>03</span>
              </div>
              <h3 className="step-title">Pareceres Jurídicos</h3>
              <p className="section-content">
                Documentação técnica detalhada para embasar decisões
                estratégicas e seguras.
              </p>
            </div>
            <div className="our-approach-step">
              <div className="step-number">
                <span>04</span>
              </div>
              <h3 className="step-title">Ação e Resolução</h3>
              <p className="section-content">
                Execução de medidas judiciais ou extrajudiciais com foco no
                resultado efetivo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="team-snapshot">
        <div className="team-snapshot-container">
          <div className="team-snapshot-header">
            <h2 className="section-title">Nossa Equipe</h2>
            <p className="section-subtitle">
              Conheça os especialistas dedicados à sua segurança jurídica.
            </p>
          </div>
          <div className="team-snapshot-grid">
            <div className="team-card">
              <div className="team-card-image">
                <img
                  alt="Dra. Helena Tosca"
                  src="https://images.pexels.com/photos/7841465/pexels-photo-7841465.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="team-card-info">
                <h3 className="team-card-name">Dra. Helena Tosca</h3>
                <p className="team-card-role">
                  Sócia Fundadora | Direito Civil
                </p>
                <p className="section-content">
                  Especialista em Direito Civil e Processual Civil com 15 anos
                  de atuação em Porto Alegre.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-card-image">
                <img
                  alt="Dr. Ricardo Mendes"
                  src="https://images.pexels.com/photos/7841814/pexels-photo-7841814.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="team-card-info">
                <h3 className="team-card-name">Dr. Ricardo Mendes</h3>
                <p className="team-card-role">
                  Especialista em Direito Empresarial
                </p>
                <p className="section-content">
                  Consultoria estratégica para fusões, aquisições e estruturação
                  societária.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-card-image">
                <img
                  alt="Dra. Mariana Silva"
                  src="https://images.pexels.com/photos/7841445/pexels-photo-7841445.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="team-card-info">
                <h3 className="team-card-name">Dra. Mariana Silva</h3>
                <p className="team-card-role">
                  Especialista em Direito Tributário
                </p>
                <p className="section-content">
                  Expert em planejamento tributário e recuperação de créditos
                  fiscais.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-card-image">
                <img
                  alt="Dr. André Santos"
                  src="https://images.pexels.com/photos/7841456/pexels-photo-7841456.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="team-card-info">
                <h3 className="team-card-name">Dr. André Santos</h3>
                <p className="team-card-role">
                  Especialista em Direito Imobiliário
                </p>
                <p className="section-content">
                  Atuação focada em regularização de imóveis e grandes
                  transações imobiliárias.
                </p>
              </div>
            </div>
          </div>
          <div className="team-snapshot-footer">
            <a href="#">
              <div className="btn-outline btn">
                <span>Conheça toda a equipe</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-cta">
        <div className="contact-cta-container">
          <div className="contact-cta-split">
            <div className="contact-cta-info">
              <h2 className="section-title">Agende sua Consultoria</h2>
              <p className="section-content">
                Estamos prontos para ouvir sua demanda e oferecer a melhor
                orientação jurídica. Entre em contato pelos nossos canais
                oficiais ou preencha o formulário ao lado.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>contato@toscaadvogados.com.br</span>
                </div>
                <div className="contact-item">
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
                      <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                      <path d="M7 8h10M7 12h10M7 16h10"></path>
                    </g>
                  </svg>
                  <span>(51) 3222-0000 | (51) 99999-0000</span>
                </div>
                <div className="contact-item">
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
                      <circle r="10" cx="12" cy="12"></circle>
                      <rect x="9" y="9" rx="1" width="6" height="6"></rect>
                    </g>
                  </svg>
                  <span>Segunda a Sexta: 09:00 - 18:00</span>
                </div>
              </div>
            </div>
            <div className="contact-cta-form-wrapper">
              <form
                action="#"
                method="POST"
                data-form-id="9bafe6f1-e481-4ac7-8ff6-37acb96028bd"
                className="contact-form"
              >
                <div className="form-group">
                  <label htmlFor="name" className="section-content">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="true"
                    required="true"
                    placeholder="Seu nome"
                    data-form-field-id="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="section-content">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required="true"
                    placeholder="seu@email.com"
                    data-form-field-id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="section-content">
                    Sua Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required="true"
                    placeholder="Como podemos ajudar?"
                    data-form-field-id="message"
                  ></textarea>
                </div>
                <button
                  id="thq_button_yDik"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_yDik"
                  className="btn-primary btn btn-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="office-location">
        <div className="office-location-container">
          <div className="office-location-split">
            <div className="office-location-map">
              <div className="map-placeholder">
                <img
                  alt="Escritório Porto Alegre"
                  src="https://images.pexels.com/photos/7841469/pexels-photo-7841469.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="map-bg-image"
                />
                <div className="map-overlay">
                  <div className="map-pin">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="office-location-info">
              <h2 className="section-title">Onde Estamos</h2>
              <div className="address-block">
                <p className="section-subtitle">Porto Alegre, RS</p>
                <p className="section-content">
                  <span>
                    {' '}
                    Av. Carlos Gomes, 1000 - Conjunto 801
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    Bairro Auxiliadora, Porto Alegre - RS
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    CEP: 90480-001
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
              <div className="visiting-instructions">
                <h3 className="section-subtitle">Instruções de Visita</h3>
                <p className="section-content">
                  O escritório conta com estacionamento rotativo no prédio para
                  maior comodidade. Estamos localizados em um dos principais
                  eixos empresariais da cidade, com fácil acesso via transporte
                  público.
                </p>
                <div className="transit-notes">
                  <p className="section-content">
                    <span className="home-text29">Estacionamento:</span>
                    <span>
                      {' '}
                      Entrada pela Rua lateral.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <p className="section-content">
                    <span className="home-text31">Transporte:</span>
                    <span>
                      {' '}
                      Próximo às linhas T11 e T12.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
        @keyframes bounce {0%,100% {transform: translateY(0);}
50% {transform: translateY(-10px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<script defer data-name="tosca-advogados-animations">
(function(){
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealOnScroll.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Initialize elements for animation
  document.querySelectorAll(".services-snapshot-card, .why-tosca-cell, .our-approach-step, .team-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease-out"
    revealOnScroll.observe(el)
  })

  // Simple form feedback
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // Allow native validation to happen
      if (contactForm.checkValidity()) {
        // Here we could show a success message after the native submit
        console.log("Formulário enviado com sucesso.")
      }
    })
  }

  // Parallax effect for hero
  window.addEventListener("scroll", () => {
    const heroImage = document.querySelector(".hero-welcome-image")
    if (heroImage) {
      const scrollValue = window.scrollY
      heroImage.style.transform = \`translateY(\${scrollValue * 0.3}px)\`
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon58"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text33">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home

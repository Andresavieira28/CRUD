import './about.css';
import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // ícone do Instagram

export default function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">

        {/* Contato Rápido */}
        <div className="about-top-bar">
          <a href="tel:+5511943258047" className="info-item" target="_blank" rel="noopener noreferrer">
            <span className="icon">📞</span>
            <div>
              <strong>Contato</strong>
              <p>(11) 94325-8047</p>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/place/SV+Instala%C3%A7%C3%A3o+e+convers%C3%A3o+de+fog%C3%A3o/@-23.5097679,-46.7539977,690m/data=!3m1!1e3!4m8!3m7!1s0xaf76d433e9c27563:0xe0d1ae5570115ca9!8m2!3d-23.5097728!4d-46.7514228!9m1!1b1!16s%2Fg%2F11v4n4v9gn?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
            className="info-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">⭐</span>
            <div>
              <strong>Indicações</strong>
              <p>Clique aqui!</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/svinstalacao/"
            className="info-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon"><FaInstagram style={{ color: '#E1306C' }}/></span>
            <div>
              <strong>Instagram</strong>
              <p>svinstalacao</p>
            </div>
          </a>
        </div>

        {/* Corpo do Sobre nós */}
        <div className="about-main">
          <div className="about-image-wrapper">
            <img
              src="sv-tecnico.jpg"
              alt="Técnico em serviço"
              className="about-image"
            />
            <div className="badge">
              
              <span>
                Técnicos<br/>
                certificados<br/>
                pelo SENAI
              </span>
            </div>
            <div className="advantages">
              <h4>Vantagens</h4>
              <ul>
                <li>✅ Ampla experiência</li>
                <li>✅ Equipe profissional</li>
                <li>✅ Atendimento rápido</li>
              </ul>
            </div>
          </div>

          <div className="about-text">
            <h2>SV Instalações e Serviços</h2>
            <p>
              Com uma trajetória de 8 anos no mercado, a SV Instalações e Serviços se destaca como referência líder em serviços de elétrica e instalações de fogões. Nosso compromisso com a excelência e a qualidade é evidenciado em cada projeto que empreendemos.
            </p>
            <p>
              Atendemos tanto residências quanto estabelecimentos comerciais em toda a região de São Paulo, proporcionando serviços de instalação com expertise incomparável. Utilizamos as melhores práticas de segurança em todos os nossos procedimentos, assegurando que seu equipamento esteja em mãos confiáveis.
            </p>
            <a
              href="https://wa.me/5511943258047"
              className="contact-button"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                
                backgroundColor: '#d4a017',
                border: 'none',
                borderRadius: '20px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: 'bold'
              }}
            >
              Fale conosco
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

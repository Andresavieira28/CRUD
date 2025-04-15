import './navbar.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <h1>SV INSTALAÇÕES E SERVIÇOS</h1>
        </div>

        {/* Menu central */}
        <nav className="navbar-menu">
          <a href="#sobre">SOBRE</a>
          <a href="#servicos">SERVIÇOS</a>
          <a href="#indicacoes">INDICAÇÕES</a>
          <a href="#orcamento">ORÇAMENTO</a>
        </nav>

        {/* WhatsApp Button */}
        <div>
          <a
            href="https://wa.me/5511943258047"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <FaWhatsapp className="whatsapp-icon" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

import './principal.css';
import { Play } from 'lucide-react';

export default function Principal() {
  return (
    <section className="section-principal"
      style={{
        backgroundImage: "url('/principal.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="principal-conteudo">
        <h1>SV Instalações e Serviços</h1>
        <p>A solução para a sua residência <span className="font-light">ou empresa</span></p>
        <p>Atendemos São Paulo e Região</p>

        <div className="botao-sobre-nos">
          <a href="#sobre">Sobre nós</a>
          <div className="icone-play">
            <Play size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}

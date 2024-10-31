import "./Hero.css";
import { images } from "../../assets/images";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="presentation">
        <p className="salutation">Bonjour, je suis</p>
        <h1 className="hero-title">Tornike ZARDIASHVILI</h1>
        <p className="hero-description">Développeur web full-stack</p>
        <div className="hero-details">
          <p>Spécialisé en Développement web: </p>
          <p>PHP: Magento2/Symfony</p>
          <p>JS: ReactJS</p>
          <p>🚀 Développeur Freelance en quête de nouveaux projets</p>
        </div>
        <div className="cta-group">
          <button className="contact-btn" onClick={() => (window.location.href = "/contact")}>
            Me contacter
          </button>
        </div>
      </div>
      <div className="photo">
        <img src={images.photo} alt="Tornike ZARDIASHVILI" />
      </div>
    </div>
  );
}

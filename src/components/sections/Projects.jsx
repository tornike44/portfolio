import "./Projects.css";
import { images } from "../../assets/images";

export default function Projects() {
  const projects = [
    {
      title: "A4.fr",
      image: images.a4,
      description: "E-commerce spécialisé dans les fournitures scolaires et le matériel éducatif.",
      tag: "Magento 2",
      url: "https://www.a4.fr",
    },
    {
      title: "Gien.com",
      image: images.gien,
      description:
        "Boutique en ligne de la célèbre faïencerie française, proposant des collections de vaisselle haut de gamme.",
      tag: "Magento 2",
      url: "https://www.gien.com",
    },
    {
      title: "Boutique de Chambord",
      image: images.chambord,
      description:
        "E-commerce officiel du château de Chambord, présentant produits dérivés et souvenirs.",
      tag: "Magento 2",
      url: "https://boutiquedechambord.fr",
    },
    {
      title: "BTP45",
      image: images.btp,
      description:
        "Plateforme web développée avec Symfony pour la Fédération Française du Bâtiment du Loiret.",
      tag: "Symfony",
      url: "https://www.btp45.fr",
    },
  ];

  return (
    <div id="projets" className="projects-section">
      <h2 className="section-title">Projets Professionnels Avec Altaïs</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <span className="project-tag">{project.tag}</span>
                <a href={project.url} target="_blank" className="project-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Visiter
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

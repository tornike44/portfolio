import "./Career.css";

export default function Career() {
  const careerSteps = [
    {
      period: {
        start: "2024",
        end: "Aujourd'hui",
      },
      title: "Développeur Full-Stack Freelance",
      company: "Indépendant",
      description:
        "En quête de nouvelles opportunités, je propose mes services en tant que développeur full-stack spécialisé en PHP/Symfony et Magento 2.",
      tags: ["Magento 2", "Symfony", "Full-Stack"],
    },
    {
      period: {
        start: "2023",
        end: "2024",
      },
      title: "Développeur Full-Stack",
      company: "Altaïs, Orléans (Remote)",
      description: "Poste en CDI, développeur PHP, Symfony et Magento2",
      tags: ["Magento 2", "Symfony", "Full-Stack"],
    },
    {
      period: {
        start: "2021",
        end: "2023",
      },
      title: "Alternance Développeur Full-Stack",
      company: "Altaïs, Orléans (Remote)",
      description:
        "Formation pratique en développement web, combinant études à Epitech et projets professionnels.",
      tags: ["Magento 2", "Symfony", "Git"],
    },
    {
      period: {
        start: "2019",
        end: "2023",
      },
      title: "Architecte Logiciel",
      company: "Epitech Nantes",
      description:
        "Master en architecture logicielle et développement d'applications. Mention très bien.",
      tags: ["Architecture", "DevOps", "Full-Stack"],
    },
  ];

  return (
    <div className="career-section" id="parcours">
      <h2 className="section-title">Parcours</h2>
      <div className="timeline">
        {careerSteps.map((step, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">
              <span>{step.period.start}</span>
              <span className="timeline-subtitle">{step.period.end}</span>
            </div>
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <span className="company">{step.company}</span>
              <p>{step.description}</p>
              <div className="achievement-tags">
                {step.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="achievement-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

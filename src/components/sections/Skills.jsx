import "./Skills.css";

export default function Skills() {
  return (
    <div id="competences" className="skills-section">
      <h2 className="section-title">Compétences</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>
            <svg
              className="category-icon"
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
              <path d="M18 10h-4V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6z" />
              <line x1="10" y1="16" x2="14" y2="16" />
            </svg>
            Backend Development
          </h3>
          <div className="skills-list">
            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                alt="PHP"
                className="skill-icon"
              />
              <span className="skill-name">PHP 7/8+</span>
            </div>
            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg"
                alt="Symfony"
                className="skill-icon"
              />
              <span className="skill-name">Symfony 4/5+</span>
            </div>
            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg"
                alt="Magento"
                className="skill-icon"
              />
              <span className="skill-name">Magento2</span>
            </div>
            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                alt="C#"
                className="skill-icon"
              />
              <span className="skill-name">C#</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>
            <svg
              className="category-icon"
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
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18" />
              <path d="M15 3v18" />
              <path d="M3 9h18" />
              <path d="M3 15h18" />
            </svg>
            Frontend Development
          </h3>
          <div className="skills-list">
            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
                className="skill-icon"
              />
              <span className="skill-name">HTML/CSS</span>
            </div>
            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="skill-icon"
              />
              <span className="skill-name">Javascript Vanilla</span>
            </div>
            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="JavaScript"
                className="skill-icon"
              />
              <span className="skill-name">ReactJS</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>
            <svg
              className="category-icon"
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
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <path d="m7.5 4.21 4.5 2.6 4.5-2.6" />
              <path d="m7.5 19.79 4.5-2.6 4.5 2.6" />
              <path d="M3.27 6.96 12 12.01l8.73-5.05" />
              <path d="M12 22.08V12" />
            </svg>
            DevOps & Tools
          </h3>
          <div className="skills-list">
            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                className="skill-icon"
              />
              <span className="skill-name">Git</span>
            </div>
            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                alt="Linux"
                className="skill-icon"
              />
              <span className="skill-name">Linux / Bash</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>
            <svg
              className="category-icon"
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
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
              <path d="M10 2c1 .5 2 2 2 5" />
            </svg>
            Langues
          </h3>
          <div className="skills-list">
            <div className="skill-item">
              <span className="skill-name">Français</span>
              <span className="skill-level">Bilingue</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Géorgien</span>
              <span className="skill-level">Bilingue</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Anglais</span>
              <span className="skill-level">Courant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

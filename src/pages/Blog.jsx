import "./Blog.css";

export default function Blog() {
  return (
    <div className="blog-section">
      <h2 className="section-title">Articles de Blog</h2>
      <div className="blog-coming-soon">
        <div className="coming-soon-content">
          <span className="coming-soon-icon">✍️</span>
          <h3>Articles en préparation</h3>
          <p>De nouveaux articles sont en cours de rédaction. Revenez bientôt !</p>
        </div>
      </div>
    </div>
  );
}

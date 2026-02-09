import CardComponent from "../components/CardComponent";

function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>
      <div className="card-container">
        <CardComponent
          title="Portfolio Website"
          description="A responsive portfolio built using React and modern CSS."
        />
        <CardComponent
          title="Landing Page"
          description="Product landing page with clean UI and smooth navigation."
        />
      </div>
    </div>
  );
}

export default Projects;

import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="page">
        <h1>Core Technologies</h1>
        <div className="card-container">
          <CardComponent
            title="React"
            description="Component-based JavaScript library for building user interfaces."
          />
          <CardComponent
            title="React Router"
            description="Enables seamless navigation between multiple pages."
          />
          <CardComponent
            title="Reusable Components"
            description="Improves maintainability and code organization."
          />
        </div>
      </div>
    </>
  );
}

export default Home;

import { useNavigate } from 'react-router-dom'
import './Home.scss';

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home-container">
      <div className="home-wrapper">
        <h1>Welcome to the Effects Playground</h1>
        <div className="buttons-div">
          <button className="navigation-button" onClick={() => navigate("/meteor-effect")}>
            Meteor Effect
          </button>
          <button className="navigation-button">
            Next Effect
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home

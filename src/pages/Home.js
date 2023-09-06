import {Link} from 'react-router-dom'

function Home() {
  document.querySelector('html').setAttribute("id", "Home");
  return (
    <div className="Home">
      
      <div>
          <h1> Risk Control and Analysis </h1>  
      </div>

      <div>
          <nav> <Link to="/file" className="nav-item">Reports</Link> </nav>
      </div>

    </div>
  );
}

export default Home;

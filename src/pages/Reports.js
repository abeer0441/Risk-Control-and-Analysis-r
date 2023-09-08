import { useLocation } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom'
import img1 from '../img/NWC-Logo.svg';




function Reports() {
    const locaction = useLocation();
    const data = locaction.state;

    document.querySelector('html').setAttribute("id", "Reports");
   
    const sendDataToStreamlit = (data) => {
        fetch("https://risk-control-and-analysis-0974368b9653.herokuapp.com/streamlit", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        });
    };
      
    // Usage example
    const status_code = sendDataToStreamlit(data)
    console.log(status_code);

    return (        
        <div className="Reports">
          <header> 
            <nav>
              <Link to="/" className="home"> Home page </Link>
              <Link to="/file" className="file"> Import new file </Link> 
              </nav>
              <img src={img1} className='logo'/>
          </header>

          <iframe src="https://riskanalysis-f9a284bc46f5.herokuapp.com/" frameborder="0" 
          marginheight="0" 
          marginwidth="0" 
          width="100%" 
          height="100%" 
          title='charts'
          scrolling="auto"></iframe>

        </div>
    );
}

export default Reports;

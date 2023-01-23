import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import ProfileCard from './ProfileCard';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div>
      <div>Personal Digital Assistans</div>
    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column is-4">
          <ProfileCard 
          title="Alexa" 
          handle="@alexa99" 
          image={AlexaImage} 
          />
          </div>
          <div className="column is-4">
          <ProfileCard 
          title="Cortana" 
          handle="@cortana5" 
          image={SiriImage} 
          />
            </div>
        </div>
      </section>
    </div>
    
   
    </div>
   
  );  
}

export default App;

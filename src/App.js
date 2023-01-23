import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <div>Personal Digital Assistans</div>
   
    <ProfileCard title="Mert" handle="Ozturk" image={AlexaImage} />
    <ProfileCard title="asd" handle="dfdf" image={SiriImage} />
    </div>
   
  );
}

export default App;

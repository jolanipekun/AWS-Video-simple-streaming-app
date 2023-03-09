
import './App.css';

function App() {
  return (
    <div className="App">
       <h2>Welcome to My Video Stream </h2>
       <video width="700px" height="400px"  controls>
          <source src="https://d1t84kp4tmeccs.cloudfront.net/Protesters%20CLASH%20with%20Riot%20Police%20in%20Athens%20After%20Train%20Crash.mp4" type="video/mp4" />
       </video>
    </div>
  );
}

export default App;

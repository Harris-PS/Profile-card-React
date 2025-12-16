import Profile from './Profile.jsx'

function App() {

  return (
   <>
      <Profile name = "Jason" age = {23}>
        <p>Role = Frontend Developer</p> 
      </Profile> 
      <Profile name = "Jhon" age= {25}>
        <p>Role = Frontend Developer</p> 
      </Profile>
      <Profile name = "Adam" age= {30}>
        <p>Role = FullStack Developer</p> 
      </Profile> 
      <Profile>
        <p>Role = FullStack Developer</p> 
      </Profile> 
   </>
  );
}

export default App

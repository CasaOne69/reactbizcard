import reactLogo from "./assets/mainimg.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Neil Scnegger</h1>
      <p className="intro">React Developer</p>
      <button className="embtn">Email</button>
      <div className="card">
        <hr />
        <h2>About Me</h2>
        <p className="cunts">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h2>Interests</h2>
        <p className="cunts">
          Protein. Food expert. Music scholar. Reader. Internet fanatic. Bacon
          buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
      <div className="foot">
        <p>FB, Twiiter, Insta, Linkdedin</p>
      </div>
    </>
  );
}

export default App;

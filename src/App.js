import "./App.css";
import peopleImage from '../src/people.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Marissa Ana</p>
      </header>

      <main>
        <section>
          <h2>Welcome to Marissa Ana's Page</h2>
          <p>
            This is a new section added to the app. Here you can find more
            information about Marissa Ana and my journey in learning Git and
            GitHub.
          </p>
        </section>
        <section>
          <p>Halo ini adalah section tambahan dari Tafif</p>
          <img src={peopleImage} alt="halo" />
        </section>
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import PersonCard from "./Components/PersonCard";
function App() {
  return (
    <div className="App">
      <PersonCard lastName={"Doe"} firstName={"Jane"} hair={"Black"} age={45} />
      <PersonCard
        lastName={"Smith"}
        firstName={"John"}
        hair={"Brown"}
        age={88}
      />
      <PersonCard
        lastName={"Fillmore"}
        firstName={"Millard"}
        hair={"Brown"}
        age={50}
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"Maria"}
        hair={"Brown"}
        age={62}
      />
    </div>
  );
}

export default App;

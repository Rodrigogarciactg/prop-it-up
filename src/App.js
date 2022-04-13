import "./App.css";
import PersonCard from "./Components/PersonCard";
function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Doe"}
        firstName={"Jane"}
        hairColor={"Black"}
        initialAge={45}
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"John"}
        hairColor={"Brown"}
        initialAge={88}
      />
      <PersonCard
        lastName={"Fillmore"}
        firstName={"Millard"}
        hairColor={"Brown"}
        initialAge={50}
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"Maria"}
        hairColor={"Brown"}
        initialAge={62}
      />
    </div>
  );
}

export default App;

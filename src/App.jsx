import "./index.css";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput";

function App() {
  return (
    <>
      <Header Heading={"Investment Calculator"} />
      <UserInput />
    </>
  );
}

export default App;

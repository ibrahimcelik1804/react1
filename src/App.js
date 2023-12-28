import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Form from "./Form"

function App() {
  let kendiAdim = "Ertuğrul";

  const pstil = {
    color: "red",
    fontSize: "45px",
  };
 
  return (
    <div>
      <Header />
      <Form/>
    </div>
  
  );
}

export default App;

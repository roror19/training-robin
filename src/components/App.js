import '../assets/App.css';
import Leftbar from "./Leftbar";
import Header from "./Header";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Header />
      <Leftbar />
      <Chat />
    </div>
  );
}

export default App;

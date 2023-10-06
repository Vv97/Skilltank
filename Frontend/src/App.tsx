import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Allroutes from "./routes/Allroutes";
import Navbar from "./components/Navbar/Navbar";
import { AuthcontextProvider } from "./context/Authcontext";

function App() {
  return (
    <BrowserRouter>
      <>
        <AuthcontextProvider>
          <Navbar />
          <Allroutes />
        </AuthcontextProvider>
      </>
    </BrowserRouter>
  );
}

export default App;

import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/UserContext";
import { TechProvider } from "./contexts/TechContext";

function App() {
  return (
    <>
      <UserProvider>
        <TechProvider>
          <Routes />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </TechProvider>
      </UserProvider>
    </>
  );
}

export default App;

import Header from "./components/Header/Header";
import GoogleMapView from "./components/Map/GoogleMapView";
import DetailPopup from "./components/Menu/DetailPopup";
import Sidebar from "./components/Sidebar/Sidebar";
import { SelectedContextProvider } from "./context/SelectedContext";

function App() {
  return (
    <SelectedContextProvider>
      <div className="relative flex w-full h-screen box-border">
        <Sidebar />
        <Header />
        <DetailPopup />
        <GoogleMapView />
      </div>
    </SelectedContextProvider>
  );
}

export default App;

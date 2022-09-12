import Header from "./components/Header/Header";
import GoogleMapView from "./components/Map/GoogleMapView";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="relative flex w-full min-h-screen box-border">
      <Sidebar />

      <Header />

      <GoogleMapView />
    </div>
  );
}

export default App;

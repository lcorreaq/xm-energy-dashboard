import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import PricesPage from "./pages/PricesPage";
import GenerationPage from "./pages/GenerationPage";
import DemandPage from "./pages/DemandPage";
import VolumePage from "./pages/VolumePage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<PricesPage />} />

        <Route
          path="/generation"
          element={<GenerationPage />}
        />

        <Route
          path="/demand"
          element={<DemandPage />}
        />

        <Route
          path="/volume"
          element={<VolumePage />}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
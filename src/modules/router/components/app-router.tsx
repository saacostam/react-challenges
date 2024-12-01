import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from "../../views";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from "../../views";
import { MainLayout } from "../../layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

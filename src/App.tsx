import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import LabPage from "./pages/LabPage";
import TaskPage from "./pages/TaskPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/lab/:labId" element={<LabPage />} />
            <Route path="/lab/:labId/task/:taskId" element={<TaskPage />} />
        </Routes>
    );
}
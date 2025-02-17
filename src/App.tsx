import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import LabsLayout from "./layouts/LabsLayout.tsx";
import TasksLayout from "./layouts/TasksLayout.tsx";
import 'rsuite/dist/rsuite.min.css';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/lab/:labId" element={<LabsLayout />} />
            <Route path="/lab/:labId/task/:taskId" element={<TasksLayout />} />
        </Routes>
    );
}
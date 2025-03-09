import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import LabsLayout from "./layouts/LabsLayout.tsx";
import TasksLayout from "./layouts/TasksLayout.tsx";
import PixelFarmSlider from "./pages/lab3/PixelFarmSlider.tsx";
import 'rsuite/dist/rsuite.min.css';

import { useEffect } from "react";

export default function App() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/pixelFarmSlider") {
            import("./index.css");
        }
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/lab/:labId" element={<LabsLayout />} />
            <Route path="/lab/:labId/task/:taskId" element={<TasksLayout />} />
            <Route path="/pixelFarmSlider" element={<PixelFarmSlider />} />
        </Routes>
    );
}

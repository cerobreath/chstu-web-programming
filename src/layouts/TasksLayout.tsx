import {Link, useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import {labs} from "../config.ts";

export default function TasksLayout() {
    const { labId, taskId } = useParams<{ labId: string; taskId: string }>();
    const [TaskComponent, setTaskComponent] = useState<React.FC | null>(null);
    useEffect(() => {
        if (!labId || !taskId) return;
        document.title = `Лабораторна ${labId}. Завдання ${taskId}.`;

        import(`../pages/lab${labId}/Task${taskId}.tsx`)
            .then((module) => setTaskComponent(() => module.default))
            .catch(() => setTaskComponent(null));
    }, [labId, taskId]);

    const lab = labs.find((lab) => lab.id === Number(labId));
    if (!lab) {
        return <h1>Лабораторна не знайдена</h1>;
    }
    const task = lab.tasks.find((t) => t.id === Number(taskId));

    if (!labId || !taskId || !task) {
        return <h1>Завдання не знайдено</h1>;
    }

    return (
        <div className="relative p-4">

            <Link
                to={`/lab/${labId}`}
                className="fixed top-2 left-2 flex items-center gap-2 p-2 text-blue-500 hover:text-blue-700 transition"
            >
                <ArrowLeft size={24} />
                <span className="text-lg font-medium">Назад</span>
            </Link>

            <h1 className="header-site">
                Завдання {task.id}. {task.description}
            </h1>

            {TaskComponent ? <TaskComponent /> : <h2 className="text-center text-red-500">Завдання не знайдено</h2>}
        </div>
    );
}
import {Link, useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
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
        <div>
            <h1 className="flex justify-center items-center" >
                <Link to={`/lab/${labId}`}>
                        <p>home</p>
                </Link>
                <p className="header-site">Завдання {task.id}. {task.description}</p>
            </h1>
            {TaskComponent ? <TaskComponent/> : <h2>Завдання не знайдено</h2>}
        </div>
    );
}
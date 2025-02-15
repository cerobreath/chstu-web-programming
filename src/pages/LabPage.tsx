import { Link, useParams } from "react-router-dom";

// Определяем доступные лабораторные и задания
const availableLabs: Record<string, number[]> = {
    "1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "2": [1, 2],
    "3": [1, 2, 3, 4, 5],
};

export default function LabPage() {
    const { labId } = useParams<{ labId: string }>();

    if (!labId || !availableLabs[labId]) {
        return <h1>Лабораторна робота не знайдена</h1>;
    }

    const tasks = availableLabs[labId];

    return (
        <div>
            <h1>Лабораторна робота {labId}</h1>
            <div className="lab-task-list">
                {tasks.map((task) => (
                    <div key={task} className="lab-task-item">
                        <Link to={`/lab/${labId}/task/${task}`}>
                            Завдання {task}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
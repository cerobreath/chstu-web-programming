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
        return <h1>Лабораторная работа не найдена</h1>;
    }

    const tasks = availableLabs[labId];

    return (
        <div>
            <h1>Лабораторная работа {labId}</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task}>
                        <Link to={`/lab/${labId}/task/${task}`}>Задание {task}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/">Назад</Link>
        </div>
    );
}

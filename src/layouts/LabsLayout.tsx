import { Link, useParams } from "react-router-dom";
import { labs } from "../config.ts";
import { ArrowLeft } from "lucide-react";

export default function LabsLayout() {
    const { labId } = useParams<{ labId: string }>();

    // Перетворюємо labId у число
    const labIdNum = Number(labId);
    const lab = labs.find((l) => l.id === labIdNum);
    const isValidLab = !!lab;

    if (!isValidLab) {
        return <h1 className="text-center text-red-500">Лабораторна робота не знайдена</h1>;
    }

    return (
        <div className="p-4">
            {/* Кнопка назад */}
            <Link
                to={`/`}
                className="fixed top-2 left-2 flex items-center gap-2 p-2 text-blue-500 hover:text-blue-700 transition"
            >
                <ArrowLeft size={24} />
                <span className="text-lg font-medium">Назад</span>
            </Link>

            {/* Заголовок */}
            <h1 className="header-site">Лабораторна робота {lab.id}</h1>

            {/* Список завдань */}
            <div className="lab-task-list">
                {lab.tasks.map((task) => (
                    <div key={task.id} className="lab-task-item">
                        <Link to={`/lab/${lab.id}/task/${task.id}`}>
                            Завдання {task.id} - {task.description}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
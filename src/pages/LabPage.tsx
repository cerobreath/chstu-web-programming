import { Link, useParams } from "react-router-dom";
import {labs} from "../config.ts";



export default function LabPage() {
    const { labId } = useParams<{ labId: string }>();

    const lab = labs.find((l) => l.id === Number(labId));
    if (!lab || !lab) {
        return <h1>Лабораторна робота не знайдена</h1>;
    }


    return (
        <div>
            <h1 className={"header-site"}>Лабораторна робота {lab.id}</h1>
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
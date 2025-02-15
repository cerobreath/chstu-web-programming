import { Link } from "react-router-dom";

const labs = [1, 2, 3, 4];

export default function MainPage() {
    return (
        <div>
            <h1 className={"header-site"}>Головна сторінка</h1>
            <div className="lab-task-list">
                {labs.map((lab) => (
                    <div key={lab} className="lab-task-item">
                        <Link to={`/lab/${lab}`}>
                            Лабораторна робота {lab}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

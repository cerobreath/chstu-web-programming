import { Link } from "react-router-dom";
import {labs} from "../config.ts";

export default function MainPage() {
    return (
        <div>
            <h1 className={"header-site"}>Головна сторінка</h1>
            <div className="lab-task-list">
                {labs.map((lab) => (
                    <div key={lab.id} className="lab-page-item">
                        <Link to={`/lab/${lab.id}`}>
                            Лабораторна робота {lab.id}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

import { Link } from "react-router-dom";

const labs = [1, 2, 3, 4, 5];

export default function MainPage() {
    return (
        <div>
            <h1>Главная страница</h1>
            <ul>
                {labs.map((lab) => (
                    <li key={lab}>
                        <Link to={`/lab/${lab}`}>Лабораторная работа {lab}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
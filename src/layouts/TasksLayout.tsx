import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { labs } from "../config.ts";

export default function TasksLayout() {
    // Отримуємо labId (номер лабораторної) та taskId (номер завдання) з URL
    const { labId, taskId } = useParams<{ labId: string; taskId: string }>();

    // Стан для збереження компонента завдання
    const [TaskComponent, setTaskComponent] = useState<React.FC | null>(null);

    // Конвертуємо параметри у числа
    const labIdNum = Number(labId);
    const taskIdNum = Number(taskId);

    // Знаходимо відповідну лабораторну роботу та завдання у конфігурації
    const lab = labs.find((lab) => lab.id === labIdNum);
    const task = lab?.tasks.find((t) => t.id === taskIdNum);

    // Перевіряємо, чи знайдено лабораторну та завдання
    const isValidLab = !!lab;
    const isValidTask = !!task;

    // Використовуємо useEffect для динамічного завантаження компонента завдання
    useEffect(() => {
        // Якщо лабораторна або завдання не знайдені, не завантажуємо компонент
        if (!isValidLab || !isValidTask) return;

        // Оновлюємо заголовок сторінки
        document.title = `Лабораторна ${labId}. Завдання ${taskId}.`;

        // Динамічно імпортуємо компонент завдання
        import(`../pages/lab${labId}/Task${taskId}.tsx`)
            .then((module) => setTaskComponent(() => module.default)) // Якщо імпорт успішний, зберігаємо компонент у стані
            .catch(() => setTaskComponent(null)); // Якщо сталася помилка, скидаємо стан компонента
    }, [labId, taskId, isValidLab, isValidTask]); // Запускаємо useEffect при зміні labId, taskId, isValidLab, isValidTask

    // Якщо лабораторна не знайдена, виводимо повідомлення про помилку
    if (!isValidLab) return <h1 className="text-center text-red-500">Лабораторна не знайдена</h1>;

    // Якщо завдання не знайдено, виводимо відповідне повідомлення
    if (!isValidTask) return <h1 className="text-center text-red-500">Завдання не знайдено</h1>;

    return (
        <div className="relative p-4">
            {/* Кнопка назад */}
            <Link
                to={`/lab/${labId}`}
                className="fixed top-2 left-2 flex items-center gap-2 p-2 text-blue-500 hover:text-blue-700 transition"
            >
                <ArrowLeft size={24} />
                <span className="text-lg font-medium">Назад</span>
            </Link>

            {/* Заголовок */}
            <h1 className="header-site">
                Завдання {task.id}. {task.description}
            </h1>

            {/* Завантаження завдання */}
            {TaskComponent ? <TaskComponent /> : <h2 className="text-center text-red-500">Завдання не знайдено</h2>}
        </div>
    );
}
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TaskPage() {
    const { labId, taskId } = useParams<{ labId: string; taskId: string }>();
    const [TaskComponent, setTaskComponent] = useState<React.FC | null>(null);

    useEffect(() => {
        if (!labId || !taskId) return;

        // Динамический импорт нужного компонента
        import(`../pages/lab${labId}/Task${taskId}.tsx`)
            .then((module) => setTaskComponent(() => module.default))
            .catch(() => setTaskComponent(null));
    }, [labId, taskId]);

    if (!labId || !taskId) {
        return <h1>Задание не найдено</h1>;
    }

    return (
        <div>
            {TaskComponent ? <TaskComponent /> : <h2>Задание не найдено</h2>}
        </div>
    );
}
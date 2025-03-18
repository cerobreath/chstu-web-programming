import { useState } from "react";

export default function Task3() {
    const [text, setText] = useState("");

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="mb-4">Text Mirror Widget</h1>

            {/* Поле вводу тексту */}
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введіть текст тут..."
                className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-md"
                rows={5}
            />

            {/* Відображення тексту в іншому блоці */}
            <div className="mt-4 w-full max-w-md p-3 bg-[#ddb892] rounded-lg shadow-md break-words">
                {text || "Тут відобразиться ваш текст..."}
            </div>
        </div>
    );
}

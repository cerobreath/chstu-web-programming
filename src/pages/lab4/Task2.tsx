import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Task2() {
    // Масив кольорів, які будуть використовуватися для зміни фону
    const colors = ["#FFDDC1", "#D4A5FF", "#FFC0CB", "#C1FFD7", "#FFF5BA", "#C1E1FF"];

    // Стан для відстеження поточного індексу кольору
    const [currentIndex, setCurrentIndex] = useState(0);

    // Використання useEffect для оновлення кольору фону сторінки при зміні currentIndex
    useEffect(() => {
        document.body.style.transition = "background-color 0.5s"; // Додаємо плавну анімацію зміни кольору
        document.body.style.backgroundColor = colors[currentIndex]; // Встановлюємо новий колір фону
    }, [currentIndex]);

    // Функція для зміни кольору на наступний у списку
    const changeColor = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length); // Оновлюємо індекс кольору по колу
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-2">Background Color Widget</h1>
            <p className="mb-4">Click the button to change the color</p>

            <Card className="p-4 bg-white shadow-lg rounded-2xl">
                <CardContent className="flex flex-col items-center">
                    <h2 className="text-lg mb-2">Change Background</h2>

                    {/* Кнопка для зміни кольору */}
                    <Button onClick={changeColor} className="bg-gray-800 text-white px-4 py-2 rounded-lg duration-500 hover:bg-gray-600">
                        Change Color →
                    </Button>

                    {/* Відображення списку доступних кольорів */}
                    <div className="flex gap-2 my-4">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className={`w-8 h-8 rounded-full border-2 cursor-pointer ${currentIndex === index ? "border-black" : "border-transparent"}`}
                                style={{ backgroundColor: color }}
                                onClick={() => setCurrentIndex(index)} // Зміна кольору при натисканні на елемент
                            />
                        ))}
                    </div>

                    {/* Відображення поточного кольору */}
                    <p className="text-sm">Current Color: <span style={{ color: colors[currentIndex] }}>{colors[currentIndex]}</span></p>
                </CardContent>
            </Card>
        </div>
    );
}

import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function Task2() {
    // Стан для збереження введених значень довжини та ширини
    const [length, setLength] = useState<string>("");
    const [width, setWidth] = useState<string>("");
    // Стан для збереження розрахованої площі
    const [area, setArea] = useState<number | null>(null);
    // Стан для збереження використаної формули
    const [formula, setFormula] = useState<string>("");
    // Стан для збереження повідомлення про помилку
    const [error, setError] = useState<string | null>(null);

    // Функція для розрахунку площі
    const calculateArea = () => {
        const l = parseFloat(length); // Конвертуємо довжину у число
        const w = width ? parseFloat(width) : l; // Якщо ширина не задана, то це квадрат

        // Перевіряємо коректність введених даних
        if (isNaN(l) || l <= 0 || (width && (isNaN(w) || w <= 0))) {
            setError("Будь ласка, введіть коректні значення довжини та ширини.");
            setArea(null);
            setFormula("");
            return;
        }

        setError(null); // Скидаємо помилку, якщо дані правильні
        setArea(l * w); // Обчислюємо площу
        setFormula(width ? `S = ${l} × ${w}` : `S = ${l} × ${l}`); // Формуємо формулу
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            {/* Карта введення даних */}
            <Card className="p-6 shadow-lg rounded-2xl bg-[#f8f5f2]">
                <CardContent className="flex flex-col gap-4">
                    <h2 className="text-2xl text-gray-900 text-center">Розрахунок площі</h2>
                    <p className="text-gray-500 text-center">Введіть довжину та ширину (або лише довжину для квадрата)</p>
                    {/* Поле введення довжини */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="length" className="font-medium text-gray-700">Довжина</Label>
                        <Input id="length" type="number" value={length} onChange={(e) => setLength(e.target.value)} className="border p-3 rounded-lg" />
                    </div>
                    {/* Поле введення ширини (необов'язкове) */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="width" className="font-medium text-gray-700">Ширина (необов'язково)</Label>
                        <Input id="width" type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="border p-3 rounded-lg" />
                    </div>
                    {/* Кнопка для розрахунку */}
                    <Button onClick={calculateArea} className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Розрахувати</Button>
                    {/* Відображення помилки, якщо є */}
                    {error && <p className="text-red-500 text-center">{error}</p>}
                </CardContent>
            </Card>

            {/* Карта з результатом */}
            {area !== null && (
                <Card className="w-full max-w-md mt-6 p-6 shadow-lg rounded-2xl bg-[#f8f5f2]">
                    <CardContent className="flex flex-col gap-4 text-center">
                        <h2 className="text-2xl text-gray-900">Результат</h2>
                        {/* Відображення обчисленої площі */}
                        <p className="font-semibold text-blue-600">{area.toFixed(2)} кв. од.</p>
                        {/* Відображення використаної формули */}
                        <p className="text-gray-700 font-semibold">Формула: {formula}</p>
                        {/* Графічне представлення прямокутника/квадрата */}
                        <div className="flex justify-center">
                            <svg width="200" height="200" viewBox="0 0 200 200">
                                <rect
                                    x="10" y="10"
                                    width={Math.min(180, 180 * (parseFloat(length) / Math.max(parseFloat(width) || parseFloat(length), 1)))}
                                    height={Math.min(180, 180 * (parseFloat(width) ? parseFloat(width) / Math.max(parseFloat(length), 1) : 1))}
                                    fill="AntiqueWhite" stroke="black" strokeWidth="2"
                                />
                            </svg>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
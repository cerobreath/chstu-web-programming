import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card.js";
import { Button } from "@/components/ui/button.js";
import { Input } from "@/components/ui/input.js";
import { Label } from "@/components/ui/label.js";

export default function Task1() {
    const [input, setInput] = useState(""); // Стан для введеного рядка
    const [sortedLetters, setSortedLetters] = useState(""); // Стан для відсортованих літер

    // Функція для сортування літер за числовими значеннями
    const sortLetters = () => {
        const matches = input.match(/([a-zA-Z])(\d)/g); // Знаходимо всі літери з цифрами
        if (!matches) {
            setSortedLetters("Некоректний ввід");
            return;
        }

        // Перетворюємо у масив об'єктів { letter, priority }
        const letterArray = matches.map((pair) => {
            return { letter: pair[0], priority: parseInt(pair[1]) };
        });

        // Сортуємо за пріоритетом (за зростанням числового значення)
        letterArray.sort((a, b) => a.priority - b.priority);

        // Формуємо відсортований рядок літер
        setSortedLetters(letterArray.map((item) => item.letter).join(", "));
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <Card className="p-6 shadow-lg rounded-2xl bg-[#f8f5f2]">
                <CardContent className="flex flex-col gap-4">
                    <h2 className="text-2xl text-gray-900 text-center">Сортування символів</h2>
                    <p className="text-gray-500 text-center">Введіть рядок, що містить літери та цифри</p>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="input" className="font-medium text-gray-700">Вхідний рядок</Label>
                        <Input
                            id="input"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="border p-3 rounded-lg"
                        />
                    </div>
                    <Button onClick={sortLetters} className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                        Відсортувати
                    </Button>
                    {sortedLetters && <p className="text-xl font-semibold text-center text-blue-600">{sortedLetters}</p>}
                </CardContent>
            </Card>
        </div>
    );
}
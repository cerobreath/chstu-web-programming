import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card.js";
import { Button } from "@/components/ui/button.js";
import { Input } from "@/components/ui/input.js";
import { Label } from "@/components/ui/label.js";

export default function Task2() {
    const [input, setInput] = useState(""); // Стан для введеного рядка
    const [restoredString, setRestoredString] = useState(""); // Стан для відновленого рядка

    const restoreString = () => {
        const matches = input.match(/([a-zA-Z])(\d+)/g); // Знаходимо літери з кількістю повторів
        if (!matches) {
            setRestoredString("Некоректний ввід");
            return;
        }

        let result = "";
        matches.forEach((pair) => {
            const letter = pair[0];
            const count = parseInt(pair.slice(1));
            result += letter.repeat(count);
        });

        setRestoredString(result);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <Card className="p-6 shadow-lg rounded-2xl bg-[#f8f5f2]">
                <CardContent className="flex flex-col gap-4">
                    <h2 className="text-2xl text-gray-900 text-center">Відновлення рядка</h2>
                    <p className="text-gray-500 text-center">Введіть архівований рядок</p>
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
                    <Button onClick={restoreString} className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                        Відновити
                    </Button>
                    {restoredString && <p className="text-xl font-semibold text-center text-blue-600">{restoredString}</p>}
                </CardContent>
            </Card>
        </div>
    );
}

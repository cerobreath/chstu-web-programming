import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function Task1() {
    // Використовуємо useState для збереження введеної email-адреси
    const [email, setEmail] = useState("");

    // Функція валідації email
    const validateEmail = (email: string): string => {

        // Якщо поле пусте, не показуємо повідомлення про помилку
        if (!email) return "";

        // Перевірка наявності символу '@'
        if (!email.includes("@")) return "Must contain '@'."; // Перевіряємо наявність '@'

        // Перевірка, що перед '@' можуть бути лише літери, цифри або спецсимволи ._%+-
        if (!/^[\w.-]+@/.test(email)) return "Incorrect part before '@'. Only letters, numbers, dots, and dashes are allowed."; // Перевірка локальної частини

        // Перевірка наявності домену після '@' та хоча б однієї крапки
        if (!/@[a-zA-Z_]+?\./.test(email)) return "Incorrect domain part. Should contain letters followed by a dot."; // Перевірка доменного імені

        // Перевірка, що домен містить мінімум дві літери після останньої крапки
        if (!/\.[a-zA-Z]{2,3}$/.test(email)) return "Domain must be .com, .net, etc."; // Перевірка кінцевого домену

        // Якщо всі перевірки пройдені, повертаємо порожній рядок (немає помилки)
        return "";
    };

    const errorMessage = validateEmail(email); // Отримання повідомлення про помилку, якщо є
    const isValid = !errorMessage; // Якщо немає помилки, то email вважається валідним

    return (
        <div className="center-obj bg-[#d5c1b3] text-[#fdfaf8] rounded-md shadow-lg p-6">
            <h2 className="text-xl font-bold text-center mb-2">Email Format Checker</h2>
            <label className="text-[#f9efe9] text-sm font-bold mb-2">Email Address</label>
            <div className="relative">
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Оновлення стану при зміні значення поля
                    className={`w-full p-2 border-3 rounded-md focus:outline-none bg-[#9c735c] text-[#f5e6d9] ${
                        email ? (isValid ? "border-green-500" : "border-red-500") : "border-[#c8b6a6]"
                    }`}
                    placeholder="Enter your email"
                />

                {/* Іконка перевірки правильності email */}
                {email && (
                    <span className="absolute right-3 top-2 text-xl">
                        {isValid ? <CheckCircle className="text-green-400" /> : <AlertCircle className="text-red-400" />}
                    </span>
                )}
            </div>

            {/* Відображення повідомлення про помилку або підтвердження правильності email */}
            <p className={`mt-2 ${isValid ? "text-green-400 font-bold" : "text-red-400 font-bold"}`}>
                {email ? (isValid ? "Correct" : errorMessage) : ""}
            </p>

            {/* Лічильник введених символів */}
            <p className="mt-2 text-[#f9efe9]">Character count: <span className="font-bold">{email.length}</span></p>
        </div>
    );
}

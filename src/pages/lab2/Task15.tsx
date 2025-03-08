import { useState } from "react"; // Використовується React Hook useState для зберігання активної вкладки (activeTab)
import { Coffee, Vegan, Croissant, Cake } from "lucide-react";

export default function Task15() {
    const [activeTab, setActiveTab] = useState("coffee");

    return (
        <div className="mx-auto p-4 bg-[#f5ebe0] rounded-2xl shadow-lg">
            {/* Меню вкладок */}
            <div className="mb-4 font-bold">
                {/* .map((tab) => ( ... )) – перебирає кожен елемент масиву та повертає JSX-код для кнопки */}
                {["coffee", "tea", "desserts"].map((tab) => (
                    <button
                        key={tab} // унікальний ключ для кожної кнопки
                        onClick={() => setActiveTab(tab)} // при натисканні змінює activeTab, що оновлює контент
                        className={`px-4 py-2 ${
                            activeTab === tab
                                ? "bg-[#b08968]"
                                : "bg-[#ddb892]"
                        }`}>

                        {tab === "coffee" && "Coffee"}
                        {tab === "tea" && "Tea"}
                        {tab === "desserts" && "Desserts"}
                    </button>
                ))}
            </div>

            {/* Натискання на кнопку змінює стан activeTab, що оновлює вміст блоку з контентом */}
            {/* Контент вкладок */}
            <div className="p-4 bg-[#fff3e0] rounded-lg">
                {activeTab === "coffee" && (
                    <ul className="space-y-2">
                        <li className="flex items-center text-lg lavishly-yours-regular">
                            <Coffee className="w-5 h-5 mr-2 text-[#6d4c41]" />
                            Espresso
                        </li>
                        <li className="flex items-center text-lg lavishly-yours-regular">
                            <Coffee className="w-5 h-5 mr-2 text-[#6d4c41]" />
                            Latte
                        </li>
                    </ul>
                )}
                {activeTab === "tea" && (
                    <ul className="space-y-2">
                        <li className="flex items-center text-lg lavishly-yours-regular">
                            <Vegan className="w-5 h-5 mr-2 text-[#6d4c41]" />
                            Black tea
                        </li>
                        <li className="flex items-center text-lg lavishly-yours-regular">
                            <Vegan className="w-5 h-5 mr-2 text-[#6d4c41]" />
                            Green tea
                        </li>
                    </ul>
                )}
                {activeTab === "desserts" && (
                    <ul className="space-y-2">
                        <li className="flex items-center text-lg lavishly-yours-regular">
                            <Croissant className="w-5 h-5 mr-2 text-[#6d4c41]" />
                            Croissant
                        </li>
                        <li className="flex items-center text-lg lavishly-yours-regular">
                            <Cake className="w-5 h-5 mr-2 text-[#6d4c41]" />
                            Tiramisu
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}
import { useState } from "react"; // Використовується React Hook useState для зберігання активної вкладки (activeTab)

export default function Task13() {
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
        </div>
    );
}

export default function Task9() {
    return (
        <div className="flex flex-col text-lg items-center gap-5 p-6">

            {/* Завдання 7 - Кнопки */}
            <div className="flex gap-4">
                {/* Кнопка зі скругленими кутами */}
                <button className="px-4 py-2 bg-indigo-400" style={{ borderRadius: "15px" }}>
                    Rounded Button
                </button>

                {/* Кнопка зі зміною фону при наведенні */}
                <button className="px-4 py-2 bg-pink-400 duration-300 hover:bg-pink-700">
                    Hover Change
                </button>

                {/* Кнопка з анімацією зміни розміру при натисканні */}
                <button className="px-4 py-2 bg-purple-400 active:scale-90 duration-150">
                    Click Animation
                </button>
            </div>

            {/* Завдання 8 - Заголовок з тінню */}
            <h1 style={{ textShadow: "2px 2px 60px rgba(0, 0, 0, 0.5)" }}>
                Stylish Heading with Shadow
            </h1>

            {/* Завдання 9 - Параграфи */}
            <div className="text-lg">
                <p className="underline decoration-double">This paragraph has a double underline.</p>
                <p className="uppercase">this paragraph is in uppercase.</p>
                <p className="font-[monospace]">This paragraph uses a monospace font.</p>
            </div>
        </div>
    );
}

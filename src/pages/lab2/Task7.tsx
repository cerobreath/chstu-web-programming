export default function Task7() {
    return (
        <div className="flex gap-4 text-lg justify-center">
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
    );
}

export default function Task9() {
    return (
        <div>
            <div className="w-full max-w-sm bg-[#f6f2ef] p-6 rounded-lg shadow-lg">
                <h2>Вхід в систему</h2>
                <form>
                    <div>
                        <label htmlFor="email" className="block font-medium mb-1">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#d5c1b1]"
                            placeholder="Введіть email"
                            required
                        />
                        {/*
                           type="email" — браузер очікує саме email (перевіряє правильність введення)
                           id="email" — унікальний ідентифікатор для зв’язку з <label>
                           required — поле обов’язкове для заповнення
                         */}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-1">
                            Пароль:
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#d5c1b1]"
                            placeholder="Введіть пароль"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#ddcdc0] text-white py-2 rounded-lg hover:bg-[#d5c1b1] transition duration-200"
                    >
                        Увійти
                    </button>
                </form>
            </div>
        </div>
    );
}

export default function Task7() {
    return (
        <div>
            <h2 className="flex items-center justify-center">Розклад щоденних занять</h2>
            <div className="overflow-x-auto p-6 text-lg ">
                <table className="w-full shadow-lg table-task-7 td-task">
                    <thead>
                    <tr className="bg-[#ddcdc0]">
                        <th className="border border-gray-400">День</th>
                        <th className="border border-gray-400">Час</th>
                        <th className="border border-gray-400">Дисципліна</th>
                        <th className="border border-gray-400">Викладач</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-gray-400" rowSpan={2}>Понеділок</td>
                        <td className="border border-gray-400">09:40 - 11:00</td>
                        <td className="border border-gray-400">Web-програмування та дизайн</td>
                        <td className="border border-gray-400">Усік А. М., асистент</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400">11:25 - 12:45</td>
                        <td className="border border-gray-400">Web-програмування та дизайн</td>
                        <td className="border border-gray-400">Усік А. М., асистент</td>
                    </tr>

                    <tr className="bg-[#eee6df]">
                        <td className="border border-gray-400" rowSpan={2}>Вівторок</td>
                        <td className="border border-gray-400">09:40 - 11:00</td>
                        <td className="border border-gray-400">Громадянська освіта</td>
                        <td className="border border-gray-400">Мандрагеля В. А., д.філос.н., професор</td>
                    </tr>
                    <tr className="bg-[#eee6df]">
                        <td className="border border-gray-400">11:25 - 12:45</td>
                        <td className="border border-gray-400">Громадянська освіта</td>
                        <td className="border border-gray-400">Мандрагеля В. А., д.філос.н., професор</td>
                    </tr>

                    <tr>
                        <td className="border border-gray-400" rowSpan={2}>Середа</td>
                        <td className="border border-gray-400">09:40 - 11:00</td>
                        <td className="border border-gray-400">Захист інформації в комп'ютерних системах</td>
                        <td className="border border-gray-400">Хропатий О. М., викладач</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400">11:25 - 12:45</td>
                        <td className="border border-gray-400">Промислові комп'ютерні мережі та інтерфейси</td>
                        <td className="border border-gray-400">Хижняк А. В., старший викладач</td>
                    </tr>

                    <tr className="bg-[#eee6df]">
                        <td className="border border-gray-400" rowSpan={3}>Четвер</td>
                        <td className="border border-gray-400">09:40 - 11:00</td>
                        <td className="border border-gray-400">Іноземна мова</td>
                        <td className="border border-gray-400">Пікун Л. В., к.філол.н., доцент</td>
                    </tr>
                    <tr className="bg-[#eee6df]">
                        <td className="border border-gray-400">11:25 - 12:45</td>
                        <td className="border border-gray-400">Паралельні та розподілені обчислення</td>
                        <td className="border border-gray-400">Бичко В. А., к.ф.-м.н., доцент</td>
                    </tr>
                    <tr className="bg-[#eee6df]">
                        <td className="border border-gray-400">13.10 - 14:30</td>
                        <td className="border border-gray-400">Паралельні та розподілені обчислення</td>
                        <td className="border border-gray-400">Бичко В. А., к.ф.-м.н., доцент</td>
                    </tr>

                    <tr>
                        <td className="border border-gray-400" rowSpan={2}>П’ятниця</td>
                        <td className="border border-gray-400">09:40 - 11:00</td>
                        <td className="border border-gray-400">Моделювання систем</td>
                        <td className="border border-gray-400">Бивойно П. Г., к.т.н., доцент</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400">11:25 - 12:45</td>
                        <td className="border border-gray-400">Моделювання систем</td>
                        <td className="border border-gray-400">Бивойно П. Г., к.т.н., доцент</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

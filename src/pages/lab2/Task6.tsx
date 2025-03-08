export default function Task6() {
    return (
        <div className="p-6 text-lg">
            {/* w-full – розтягує таблицю на всю ширину контейнера */}
            <table className="w-full shadow-lg">
                <thead>
                <tr className="bg-[#69ac58] text-white text-center">
                    <th className="border border-gray-800">Company</th>
                    <th className="border border-gray-800">Contact</th>
                    <th className="border border-gray-800">Country</th>
                </tr>
                </thead>
                {/*
                    .map((row, index) => ( ... )) – проходить по кожному рядку і створює <tr>
                    row.map((cell, cellIndex) => ( ... )) – проходить по кожній комірці і створює <td>
                */}
                <tbody>
                {[
                    ["Alfreds Futterkiste", "Maria Anders", "Germany"],
                    ["Berglunds snabbköp", "Christina Berglund", "Sweden"],
                    ["Centro comercial Moctezuma", "Francisco Chang", "Mexico"],
                    ["Ernst Handel", "Roland Mendel", "Austria"],
                    ["Island Trading", "Helen Bennett", "UK"],
                    ["Königlich Essen", "Philip Cramer", "Germany"],
                    ["Laughing Bacchus Winecellars", "Yoshi Tannamuri", "Canada"],
                    ["Magazzini Alimentari Riuniti", "Giovanni Rovelli", "Italy"],
                    ["North/South", "Simon Crowther", "UK"],
                    ["Paris spécialités", "Marie Bertrand", "France"]
                ].map((row, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="border border-gray-800">{cell}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default function Task4() {
    return (
        <div>
            {/*margin = ml*/}
            <ol className="list-decimal ml-10 text-lg">
                <li>Пункт 1
                    <ul className="list-circle ml-10">
                        <li className="list-[disc] marker:text-red-500">Підпункт 1.1</li>
                        <li className="list-[circle] marker:text-green-500">Підпункт 1.2</li>
                        <li className="list-[square] marker:text-blue-500">Підпункт 1.3</li>
                    </ul>
                </li>
                <li>Пункт 2
                    <ul className="ml-10">
                        <li className="list-[disc] marker:text-red-500">Підпункт 2.1</li>
                        <li className="list-[circle] marker:text-green-500">Підпункт 2.2</li>
                        <li className="list-[square] marker:text-blue-500">Підпункт 2.3</li>
                    </ul>
                </li>
            </ol>
        </div>
    );
}

export default function Task5() {
    return (
        <div>

            <ul className="list-disc pl-6 text-lg">
                <li>Пункт 1
                    <ul className="list-disc list-inside pl-6">
                        <li>Підпункт 1.1</li>
                        <li>Підпункт 1.2
                            <ul className="list-disc list-inside pl-6">
                                <li>Підпідпункт 1.2.1</li>
                                <li>Підпідпункт 1.2.2</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Пункт 2
                    <ol className="list-decimal pl-6">
                        <li>Підпункт 2.1</li>
                        <li>Підпункт 2.2
                            <ol className="list-decimal list-inside pl-6">
                                <li>Підпідпункт 2.2.1</li>
                                <li>Підпідпункт 2.2.2</li>
                            </ol>
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    );
}

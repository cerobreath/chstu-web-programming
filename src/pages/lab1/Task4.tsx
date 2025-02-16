export default function Task4() {
    return (
        <div>

            <h2>Емерджентна властивість</h2>
            <ul className="list-disc list-inside text-lg">
                <li>Вона є тільки у цілого, але немає у його окремих частин</li>
            </ul>

            <h3>Приклад властивості</h3>
            <ul className="list-disc list-inside text-lg">
                <li>Ніж має властивість <strong>гострота</strong>
                    <li>Ніж складається з атомів</li>
                    <ul className="list-circle list-inside pl-4 text-lg">
                        <li>
                            <ul className="list-[square] list-inside pl-8 text-lg">
                                <li>❗ Атоми окремо не мають властивості гострота</li>
                                <li>Але об'єднані атоми у систему <strong>"Ніж"</strong> можуть мати властивість <strong>гострота</strong></li>
                                <li>А гострота може бути пов'язана з порізами, болем тощо</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <h3>Принцип властивості у дослідженнях</h3>
            <ul className="list-disc list-inside text-lg">
                <li>Одне знання, яке не пов'язане з іншими, не має жодного сенсу</li>
                <li>Але багато об'єднаних знань дають цей <em>сенс</em></li>
            </ul>
        </div>
    );
}

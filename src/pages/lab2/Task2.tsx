export default function Task2() {
    return (
        <div className="flex justify-center">
            {/*
            flex - контейнер для ul та за замовчуванням по горизонталі вирівнює
            justify-center - центрація усіх li
            */}
            <ul className="flex items-center">
                {/*
                .map(...) перебирає елементи масиву, повертаючи розмітку <li> для кожного
                index, щоб коректно додати лінії між елементами
                */}
                {Array(5).fill("Текст").map((text, index) => (
                    <>
                        <li key={index} className="px-8 py-4 font-bold text-lg text-white
                                                   bg-gradient-to-t from-blue-500 to-red-500 border">
                            <p className="cursor-pointer hover:text-red-500 hover:underline">{text}</p>
                        </li>
                        {index < 4 && (
                            <li className="w-[6px] h-full bg-gradient-to-t from-blue-500 to-red-500"></li>
                        )}
                    </>
                ))}
            </ul>
        </div>
    );
}
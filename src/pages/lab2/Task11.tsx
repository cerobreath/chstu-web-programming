import { useEffect } from "react";
import Image_hide_1 from "../../assets/hideto_matsumoto_1.jpg";
import Image_hide_2 from "../../assets/hideto_matsumoto_2.jpg";
import Image_hide_3 from "../../assets/hideto_matsumoto_3.jpg";

export default function Task11() {
    useEffect(() => {
        document.body.style.background = "linear-gradient(to right, #FFD3B6, #D4A5FF, #FFC0CB)";
        return () => {
            document.body.style.background = "";
        };
    }, []);

    return (
        <div className="flex flex-col text-lg items-center gap-5 p-6">

            {/* Завдання 7 - Кнопки */}
            <div className="flex gap-6 items-center">
                {/* Кнопка зі скругленими кутами */}
                <a href="https://en.wikipedia.org/wiki/Hide_(musician)">
                    <button className="px-4 py-2 bg-[#ff88d2]" style={{borderRadius: "15px"}}>
                        Wikipedia
                    </button>
                </a>


                {/* Кнопка зі зміною фону при наведенні */}
                <a href="https://www.englishstarz.com/blog/hideto-matsumoto">
                    <button className="px-4 py-2 bg-[#ff78a2] duration-300 hover:bg-[#cc6081]">
                        Article
                    </button>
                </a>

                {/* Кнопка з анімацією зміни розміру при натисканні */}
                <a href="https://open.spotify.com/artist/0FN9uqveLW33mz8hlDLiFU">
                    <button className="px-4 py-2 bg-[#a786eb] active:scale-90 duration-150">
                        Spotify
                    </button>
                </a>
            </div>

            {/* Завдання 8 - Заголовок з тінню */}
            <h1 style={{ textShadow: "2px 2px 60px rgba(0, 0, 0, 0.5)" }}>
                My love for Hideto Matsumoto
            </h1>

            {/* Завдання 9 - Параграфи */}
            <div className="text-lg text-center">
                <p className="underline decoration-double">Japanese singer and songwriter</p>
                <p className="uppercase">December 13, 1964 - May 2, 1998</p>
                <p className="font-[monospace]">“When people called me freak, I closed my eyes and laughed, because they are blinded to happiness.”</p>
            </div>

            {/* Завдання 11 - Зображення з ефектом згасання */}
            <div className="flex gap-6">
                <img className="w-60 h-60 shadow-2xl rounded-lg duration-300 hover:opacity-50"
                     src={Image_hide_1} alt="Hideto Matsumoto"/>
                <img className="w-60 h-60 shadow-2xl rounded-lg duration-300 hover:opacity-50"
                     src={Image_hide_2} alt="Hideto Matsumoto"/>
                <img className="w-60 h-60 shadow-2xl rounded-lg duration-300 hover:opacity-50"
                     src={Image_hide_3} alt="Hideto Matsumoto"/>
            </div>
        </div>
    );
}

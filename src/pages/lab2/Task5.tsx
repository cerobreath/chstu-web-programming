export default function Task5() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-[200px] h-[200px] bg-yellow-400">
                <div className="absolute w-[50px] h-[50px] bg-blue-500 bottom-0 right-0"></div>
                {/*https://tailwindcss.com/docs/top-right-bottom-left#using-logical-properties*/}
            </div>
        </div>
    );
}

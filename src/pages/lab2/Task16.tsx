import { useState, useEffect } from "react";

export default function Task16() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold mb-4">Loading...</h1>
            {/*overflow-hidden - Use the overflow-hidden utility to clip any content within an element that overflows the bounds of that element*/}
            <div className="w-64 h-6 bg-gray-300 rounded-full overflow-hidden shadow-lg">
                <div
                    className="h-full bg-gradient-to-r from-[#b08968] to-[#ddb892] transition-all duration-300 ease-in-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="mt-2 font-medium">{progress}%</p>
        </div>
    );
}
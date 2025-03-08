export default function Task3() {
    return (
        <div className="flex justify-center">
            {Array(5).fill(null).map((_, index) => (
                <div
                    key={index}
                    className="bg-yellow-400 h-[200px] flex-1 border-4
                               border-blue-600 border-dashed">
                    {/*
                    Use flex-<number> utilities like flex-1 to allow a flex item
                    to grow and shrink as needed, ignoring its initial size
                    */}
                </div>
            ))}
        </div>
    );
}
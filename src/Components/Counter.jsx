const Counter = ({handleIncre,handleDec,id}) => {
  
    return (
        <div>
            <div className="max-w-md mx-auto mt-10 space-y-5">
                <div
                    className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <div className="text-2xl font-semibold"></div>
                    <div className="flex space-x-3">
                        <button
                            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                            onClick={()=>handleIncre(id)}
                        >
                            Increment
                        </button>
                        <button
                            className="bg-red-400 text-white px-3 py-2 rounded shadow"
                             onClick={()=>handleDec(id)}
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
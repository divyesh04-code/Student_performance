function PrimaryButton({ text }) {
    return (
        <button className="bg-gradient-to-r from-[#00a8e8] to-[#3b479a] text-white px-8 py-3 rounded-md hover:shadow-lg transition-all duration-300 font-medium cursor-pointer">
            {text}
        </button>
    );
}

export default PrimaryButton;
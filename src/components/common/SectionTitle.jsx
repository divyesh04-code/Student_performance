function SectionTitle({ title, subtitle }) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d3250] mb-4">
                {title}
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed">
                {subtitle}
            </p>
        </div>
    );
}

export default SectionTitle;
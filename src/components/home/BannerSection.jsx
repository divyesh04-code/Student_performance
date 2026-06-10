import classroomBg from '../../assets/images/classroomBg.jpg';

function BannerSection() {
    return (
        <section
            className="relative bg-cover bg-center py-32"
            style={{ backgroundImage: `url(${classroomBg})` }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">

                <h2 className="text-5xl font-extrabold mb-6">
                    Education for a Bright Future.
                </h2>

                <p className="text-lg text-gray-200">
                    A modern learning environment where education meets innovation.
                </p>

            </div>
        </section>
    );
}

export default BannerSection;
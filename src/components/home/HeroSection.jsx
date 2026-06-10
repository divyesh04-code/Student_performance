import girlImage from '../../assets/images/girl.png';
import PrimaryButton from '../common/PrimaryButton';

function HeroSection() {
    return (
        <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">

            <div className="w-full lg:w-1/2">
                <img
                    src={girlImage}
                    alt=""
                    className="w-full max-w-md mx-auto"
                />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">

                <h3 className="text-[#3b479a] text-xl font-bold mb-4">
                    About Us
                </h3>

                <h1 className="text-5xl font-extrabold text-[#2d3250] leading-tight mb-6">
                    We are LPS based school
                </h1>

                <p className="text-gray-500 leading-relaxed mb-8">
                    For the last 25 years, we have been at the forefront of shaping the lives of students.
                </p>

                <PrimaryButton text="Read More" />

            </div>

        </section>
    );
}

export default HeroSection;
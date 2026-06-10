import { facilitiesData } from './data';

function FacilitiesSection() {
    return (
        <section className="py-24 bg-[#fcfcfc]">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {facilitiesData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[1.5rem] p-8 shadow hover:shadow-xl transition"
                        >
                            <div className="w-14 h-14 bg-[#eef2fa] rounded-full flex items-center justify-center mb-6 text-[#3b479a]">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default FacilitiesSection;
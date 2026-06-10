import { facilitiesData } from './data';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

function FacilitiesSection() {
    return (
        <section className="py-24 bg-[#fcfcfc]">

            <div className="container mx-auto px-6">

                <SectionTitle
                    title="The Education of Tomorrow"
                    subtitle="Our purpose is to provide a safe environment."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {facilitiesData.map((item, index) => (
                        <Card key={index}>

                            <div className="w-14 h-14 bg-[#eef2fa] rounded-full flex items-center justify-center mb-6 text-[#3b479a]">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-[#2d3250] mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                        </Card>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default FacilitiesSection;
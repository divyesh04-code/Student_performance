import PrimaryButton from '../common/PrimaryButton';

function ContactForm() {
    return (
        <div className="bg-white rounded-[2rem] p-10 shadow">

            <h2 className="text-4xl font-extrabold text-[#2d3250] mb-2">
                Contact Us
            </h2>

            <p className="text-gray-500 mb-8">
                Contact professionals for guidance
            </p>

            <form className="space-y-6">

                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border rounded-md px-4 py-3"
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border rounded-md px-4 py-3"
                />

                <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full border rounded-md px-4 py-3"
                ></textarea>

                <PrimaryButton text="Submit" />

            </form>

        </div>
    );
}

export default ContactForm;
import { useState } from "react";
import { sendCustomEmail } from "./Email";

export default function Example(){
    const [details, setDetails] = useState({
        subject: "",
        message: "",
        to_name: "",
    });

    const handleDetailsChange = (event) => {
        const { name, value } = event.target;

        setDetails((prevDetails) => {
            return {
                ...prevDetails,
                [name]: value,
            };
        });
    };

    const handleSendEmail = () => {
        sendCustomEmail(details);
    };

    return (
        <div className="flex flex-col gap-y-5 items-start">
            <div>
                <span>To:</span>
                <input className='border rounded p-2'
                    name="to_name"
                    value={details.to_name}
                    onChange={handleDetailsChange}
                    type="text"
                    placeholder="Required.."
                />
            </div>
            <div>
                <span>Subject:</span>
                <input className='border rounded p-2'
                    name="subject"
                    value={details.subject}
                    onChange={handleDetailsChange}
                    type="text"
                    placeholder="Required"
                />
            </div>
            <div>
                <span>Message</span>
                <textarea className='border rounded p-2'
                    name="message"
                    value={details.message}
                    onChange={handleDetailsChange}
                    type="text"
                    placeholder="Required.."
                />
            </div>
            <button className="bg-[#33BE99] pt-1 pb-1 pl-4 pr-4 rounded text-white"
                disabled={!details.to_name || !details.subject || !details.message}
                onClick={handleSendEmail}
            >
                <span>Send Email</span>
            </button>
        </div>
    );
};

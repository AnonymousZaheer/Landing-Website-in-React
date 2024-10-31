import emailjs from "@emailjs/browser";

const sendCustomEmail = (details) => {
    // initialize using your User ID saved in the .env file
    emailjs.init('N6f4nCAkgbvNeqgu8');
    emailjs
        .send(
            ("service_x9vnzkd"), // The service ID saved in the .env file
            ("template_7lqjs7l"), // The template ID also saved in the .env file
            // Start of the variables defined in the template earlier
            {
                to_name: details.to_name,
                subject: details.subject,
                message: details.message,
            }
            // End of the variables defined in the template earlier
        )
        .then((response) => {
            // Debug statement on the console to show the function has been executed successfully
            console.log(response);
        })
        .catch((error) => {
            // Debug statement on the console to show the error that occured
            console.log(error);
        });
};

export { sendCustomEmail };
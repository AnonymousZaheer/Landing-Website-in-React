import emailjs from "@emailjs/browser";

const homeForm1 = (details) => {
    // initialize using your User ID saved in the .env file
    emailjs.init('N6f4nCAkgbvNeqgu8');
    emailjs
        .send(
            ("service_x9vnzkd"), // The service ID saved in the .env file
            ("template_43ujbuj"), // The template ID also saved in the .env file
            // Start of the variables defined in the template earlier
            {
                from_name: details.from_name,
                to_email: details.to_email,
                phone: details.phone,
                state: details.state,
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
const homeForm2 = (details) => {
    emailjs.init('N6f4nCAkgbvNeqgu8');
    emailjs.send(('service_x9vnzkd'),('template_43ujbuj'),{from_name:details.from_name, to_email:details.to_email, phone:details.phone}).then(
        (response)=>{
            console.log(response);
        }
    ).catch(
        (error)=>{
            console.log(error);
        }
    );
}

export { homeForm1, homeForm2 };
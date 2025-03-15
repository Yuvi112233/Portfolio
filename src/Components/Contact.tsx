import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0 my-10 font-mono" id="Contact">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
                <span className="text-primaryColor">05.&nbsp;</span>Contact
            </h1>
            <div className="w-[70%] lg-mx:w-full m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm-mx:p-4">
                <div className="visme_d" data-title="Simple Newsletter Subscription" data-url="rxw6oqjz-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="119300"></div>
            </div>
        </div>
    );
};

export default Contact;

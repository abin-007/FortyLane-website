import emailjs from "@emailjs/browser"

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;


//contact page

export const sendContactEmail = async(data)=>{
    console.log(import.meta.env.VITE_EMAIL_CONTACT_TEMPLATE_ID);
    return emailjs.send(
    SERVICE_ID,
    import.meta.env.VITE_EMAIL_CONTACT_TEMPLATE_ID,
    data,
    PUBLIC_KEY
  );
};

//demorequest

export const sendDemoRequest = async(data)=>{
    return emailjs.send(
            SERVICE_ID,
             import.meta.env.VITE_EMAIL_DEMO_TEMPLATE_ID,
            data,
            PUBLIC_KEY

    );

}
    


import "./contact.scss"
import {useState} from 'react';
import emailjs from 'emailjs-com';
import {useRef} from 'react';
export default function Contact() {
    
    const [message,setMessage] = useState(false);
    const form = useRef();   
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_b50h9to', 'template_7qq24lq', form.current, 'user_wI7WOFLXyJ01T2XxccddN')
        .then((result) => {
            console.log("Message status :",result.text);    
        }, (error) => {    
            console.log("Message status :",error.text);  
        });
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
          Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
          );  
        setMessage(true)  
    } 
    return ( 
        <div className="contact" id="contact"> 
            <div className="left">
                <img src="assets/contactUs.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2> 
                <form ref={form} onSubmit={handleSubmit}>  
                    <input type="email" name="user_email" placeholder="Email"/> 
                    <textarea className='textArea' name="message" placeholder="Message"></textarea>
                    <button type="submit" value="Send">Send</button> 
                    {message && <span>Reply is comming soon!!!</span>} 
                </form>
            </div>
        </div>
    )
}

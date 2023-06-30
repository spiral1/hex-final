
import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import Divider from './Divider';
import config from '../config/index.json';




const SERVICE_ID = "service_n6qyb6e";
const TEMPLATE_ID = "template_qhophck";
const USER_ID = "abWflE74HOsggEObb";

const Contact = () => {
  const { company } = config;
  const { logo, name: companyName } = company;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

return (
    <div className='Contact py-12 flex flex-col items-center justify-center' id="contact">
      <div>
            <img src={logo} alt={companyName} className="w-16 h-16" />
          </div>
      <div className=" text-justify max-w-6xl xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
      <h1
            className={`w-full my- text-5xl font-bold  text-center text-primary`}
          >
            Contact Us
          </h1>
          <Divider />
      <p
      className="text-secondary justify-center"
      >We're excited to hear from you and discuss how we can help make your event a success. Please fill out this form with your details and any specific requirements you may have, and we'll get back to you as soon as possible. Don't hesitate to get in touch with us today!
      </p>

      <br></br>
      <div className=" w-full content-center">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button className="w-full flex items-center justify-center mt-5 px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-background hover:text-secondary hover:border-primary md:py-4 md:text-lg md:px-10"type='submit' color='green'>Submit</Button>
      </Form>
      </div>
      </div>
    </div>
  
  
)
}

export default Contact;
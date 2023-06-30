
import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import Divider from './Divider';




const SERVICE_ID = "service_n6qyb6e";
const TEMPLATE_ID = "template_qhophck";
const USER_ID = "abWflE74HOsggEObb";

const Contact = () => {

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














    <div className='Contact'>
        










      <div className=" text-justify max-w-6xl xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
      <h1
            className={`w-full my- text-5xl font-bold  text-center text-primary`}
          >
            Contact Us
          </h1>
          <Divider />
      <p
      className="text-secondary"
      >We're excited to hear from you and discuss how we can help make your event a success. Please fill out this form with your details and any specific requirements you may have, and we'll get back to you as soon as possible. Don't hesitate to get in touch with us today!
      </p>

      <br></br>
      <div className="max-w-2xl content-center">
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
        <Button type='submit' color='green'>Submit</Button>
      </Form>
      </div>
      </div>
    </div>
  
  
)
}

export default Contact;
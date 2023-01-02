import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import {Container, Button, Form} from 'react-bootstrap';

export default function MailChimpSubscribe() {

    const url = 'https://melissagerhold.us10.list-manage.com/subscribe/post?u=b1da7f9f9e883193956b20f5b&amp;id=b39991cef9&amp;f_id=008328e2f0';
    const {loading, error, success, message, handleSubmit} = useMailChimpForm(
        url
    );
    const { fields, handleFieldChange } = useFormFields({
        EMAIL: "",
        FNAME: "",
        LNAME: ""
    });
    
    return (
        <Container className='p-5 my-4 text-white d-flex flex-column justify-content-center align-items-center rounded' style={{background:"var(--color1)"}}>
            <p className="fs-2">Melissa's Art Friends & Family Newsletter</p>
            <p className="fs-5">Join to receive a free monthly newsletter with updates about my latest artwork.</p>
            <p className="fs-5">I look forward to our journey together.</p>
            
            {!success && 
            
            <Form
            className="text-center mt-4"
            onSubmit={error => {
                error.preventDefault();
                handleSubmit(fields);
            }} 
            >
                <Form.Group>

                <Form.Control 
                className="mb-2"
                placeholder="First Name"
                id="FNAME"
                // autoFocus
                type="text"
                value={fields.FNAME}
                onChange={handleFieldChange}
                />
                </Form.Group>
                <Form.Control 
                className="mb-2"
                placeholder="Last Name"
                id="LNAME"
                // autoFocus
                type="text"
                value={fields.LNAME}
                onChange={handleFieldChange}
                />
                <Form.Control 
                className="mb-2"
                placeholder="Email"
                id="EMAIL"
                // autoFocus
                type="email"
                value={fields.EMAIL}
                onChange={handleFieldChange}
                />
                <Button 
                variant="primary" 
                type="submit"
                disabled={loading}
                >Join</Button>
                </Form>
                }
                {loading && "submitting"}
                {error && message}
                {success && message}
        </Container>
    )
}
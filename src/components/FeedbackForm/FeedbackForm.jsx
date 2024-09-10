import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import css from './FeedbackForm.module.css'

const initialValues = {
    username: "",
    email: "",
    message: ""
};

const FeedbackForm = () => {
    const nameFieldId = useId();
    const emailFieldId = useId();
    const msgFieldId = useId();

    const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};


    return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    <Form className={css.Form}>
    <label htmlFor={nameFieldId} className={css.label}>Username: </label>
    <Field  className={css.field} type="text" name="username"  id={nameFieldId} />
    <label htmlFor={emailFieldId} className={css.label} >Email: </label>
    <Field  className={css.field} type="email" name="email" id={emailFieldId}/>
    <label htmlFor={msgFieldId}>Message</label>
        <Field as="textarea" name="message" id={msgFieldId} rows="5" />
	 <button  classname={css.btn} type="submit">Submit</button>
     </Form>
    </Formik>

);
};

export default FeedbackForm;
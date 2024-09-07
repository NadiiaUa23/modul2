import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import css from './FeedbackForm.module.css'

const initialValues = {
    username: "",
    email: ""
};

const FeedbackForm = () => {
    const nameFieldId = useId();
    const emailFieldId = useId();

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
    <button  classname={css.btn} type="submit">Submit</button>
	</Form>
    </Formik>

);
};

export default FeedbackForm;
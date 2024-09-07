import { Formik, Form, Field } from 'formik';
import css from './FeedbackForm.module.css'

const initialValues = {
    username: "",
    email: ""
};

const FeedbackForm = () => {
    return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
    <Form >
    <Field  className={css.field} type="text" name="username" />
    <Field  className={css.field} type="email" name="email" />
    <button  classname={css.btn} type="submit">Submit</button>
	</Form>
    </Formik>




);
};

export default FeedbackForm;
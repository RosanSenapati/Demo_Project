import React,{userState} from 'react';
import './SignUpPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Yup validation schema
const validationSchema = Yup.object({
  fullName: Yup.string()
    .required('Full Name is required')
    .min(3, 'Full Name must be at least 3 characters'),
  email: Yup.string()
    .required('Email or Phone is required')
    .email('Invalid email format')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    ),// This regex validates email,
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
      'Password must contain at least one uppercase letter, one number, and one special character'
    ),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function SignupPage() {
 const navigate = useNavigate()
  async function handleSubmit(event){
    let userData={
      fullName:event.target[0].value,
      email: event.target[1].value,
      password:event.target[2].value,
      confirmPassword: event.target[3].value
    }
    const isValid = await validationSchema.isValid(userData);
    console.log(isValid)
    isValid ? navigate('/') : event.preventDefault();
  }
  return (
    <div className="wrapper shadow-lg">
      <div className="title"><span>Sign-Up Form</span></div>
      <Formik
        initialValues={{
          fullName: '',
          emailOrPhone: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
      >
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <i className="bi bi-person-lines-fill"></i>
            <Field
              type="text"
              name="fullName"
              placeholder="Full Name"
              aria-label="Full Name"
            />
          </div>
          <div>
            <ErrorMessage name="fullName" component="div" className="error" />
          </div>
          <div className="row">
            <i className="bi bi-person-circle"></i>
            <Field
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone"
              aria-label="Email or Phone"
            />
          </div>
          <div>
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="row">
            <i className="bi bi-lock"></i>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <div>
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div className="row">
            <i className="bi bi-lock-fill"></i>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
            />
          </div>
          <div>
            <ErrorMessage name="confirmPassword" component="div" className="error" />
          </div>
          <div className="row button">
            <input type="submit" value="Sign Up" />
          </div>
          <div className="signup-link">
            Already a member? <Link to="/">Login now</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default SignupPage;

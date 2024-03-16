import React from 'react';
import { observer } from 'mobx-react';
import forgotPasswordStore from '../Store/ForgotPasswordStore'; // Import the new store
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../Styles/ForgotStyle.css'; // Import your CSS file
import { useFormik } from "formik";
import { signUpSchema } from '../schemas/signUpSchema'


const initialValues = {
  email: "",
};
const ForgotPopUp = observer(() => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit,} =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   forgotPasswordStore.setFormField(name, value); 
  // };
  const closePopup = () => {
    forgotPasswordStore.setforgotPopupOpen(false); // Update to use setforgotPopupOpen
    forgotPasswordStore.clearFormFields(); // Update to use clearFormFields
  };

  return (
    <section className={`forgot-popup ${forgotPasswordStore.forgotPopupOpen ? 'open' : ''}`}>
        <form onSubmit={handleSubmit} id="forgot-form">
      
        <div className="forgot-top-heading">
          <h3 className="forgot-bordered">
            <span className='bor-heading'>Forgot your password? </span>
          </h3>
          <span className="forgot-close" onClick={closePopup}>
            <AiOutlineCloseCircle />
          </span>
        </div>

        <div className="forgot-error-message"></div>

        <p className="forgot-instruction">No worries, what is your email address?</p>

        <p className='forget-inputfield'>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address ..."
            className="forgot-field"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          // value={forgotPasswordStore.formFields.email} // Update to use forgotPasswordStore
          // onChange={handleInputChange}
          />
          {errors.email && touched.email ? (
            <p className="formm-error">{errors.email}</p>
          ) : null}
        </p>
        <p className="forgot-button-wrapper">
          <input
            id="forgot-reset-password-button"
            type="submit"
            value="Reset my password"
            className="forgot-button sm color-2"


          />
          <button
            id="forgot-button-go"
            style={{ top: '0px', position: 'relative' }}
            onClick={closePopup}
          >
            Go Back
          </button>
        </p>
        <input type="hidden" name="action" value="reset_password" />
      </form>
    </section>
  );
});

export default ForgotPopUp;

import * as Yup from "yup";
export const SalientScheme = Yup.object({
  name: Yup.string().min(2).max(25).required('Please enter your name'),
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().min(6).required('Please enter your password'),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Password must match'),
  related_url: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter a correct URL!'
    )
    .required('Enter a valid URL'),
  ticket_subject: Yup.string().required('Please enter the ticket subject'),
  // ticket_description: Yup.string().required('Please enter the ticket description'),
  envato_purchase_code: Yup.string()
  .required('Please enter the Purchase Code')
  
});
import React from 'react'
import '../../Styles/SalientResponsiveMulti.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
// import '../../Styles/General.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { SalientScheme } from '../../schemas/SalientScheme';
import { useDropzone } from 'react-dropzone';
import RichTextEditor from '../Submitticket/RichTextEditor'
const SalientResponsiveMulti = observer(() => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        related_url: '',
        ticket_subject: '',
        // ticket_description:'',
        envato_purchase_code: '',
    };
    const [editorValue, setEditorValue] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: SalientScheme,
        onSubmit: async (values, action) => {
            try {
                // Define your request payload (data)
                const requestData = {
                    // name: values.name,
                    // email: values.email,
                    // password: values.password,
                    // confirm_password: values.confirm_password,
                    ticket_related_link: values.related_url,
                    ticket_subject: values.ticket_subject,
                    ticket_description: editorValue, // Include the editor value
                    // public_ticket_checkbox: isChecked, // Include the checkbox value
                    ticket_attachment: uploadedFile,
                    ticket_status: '1'
                };

                const response = await axios.post(
                    'https://wpwebsol.com/wp-json/wpwsst/v1/data',
                    requestData
                );
                console.log('Response from the API:', response.data);
                // Check if there's an error message in the response
                if (response.data && response.data.message) {
                    // Display the error message to the user
                    alert('Error: ' + response.data.message);
                } else {
                    // Handle success
                }
                setEditorValue(''); // Clear the RichTextEditor content
                setUploadedFile(null);
                setIsDropdownOpen("");
                action.resetForm();
            } catch (error) {
                // Handle network errors or unexpected issues
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            }

        },
    });
    // console.log(values)

    const getValue = (editorValue) => {
        setEditorValue(editorValue);
        // console.log(editorValue);
    };


    const toggleCheckbox = () => {
        setIsChecked((prevChecked) => !prevChecked);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFile(acceptedFiles[0]);
            // console.log(uploadedFile);
            setIsDropdownOpen(true);
        },
        accept: 'image/*',
        multiple: false,
    });

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };



    return (
        <>
            <form className="custom-envato-wrap" onSubmit={handleSubmit} >
                <a href="https://ticksy.com/?action=envato_connect&amp;domain=themenectar&amp;system_id=1242" className="custom-envato-button">
                    <i className="ti ti-envato"></i> Verify Purchase with Envato
                </a>
                <div className="custom-divider">
                    <span>OR</span>
                </div>
                <div className="custom-manual-entry">
                    <h4 className="custom-label">Enter your Purchase Code</h4>
                    <p className='text-para'>Enter your Envato purchase code here to verify your purchase.</p>
                    <div className="custom-input-field">
                        <input type="text" name="envato_purchase_code" id="envato_purchase_code" className="custom-input" placeholder="Enter the Purchase Code ..." required=''
                            value={values.envato_purchase_code}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.envato_purchase_code && touched.envato_purchase_code ? (
                            <p className="form-error">{errors.envato_purchase_code}</p>
                        ) : null}
                        <span className="custom-tooltip"><i className="ti ti-asterisk"></i></span>
                    </div>
                </div>
                <div className="submit-registration-row" >
                    <h4 className="st-label">Registration</h4>
                    <p className='submit-registration-paragraph'>You will need to register an account with us to get support.</p>
                    <div className="fields tight cf margin-25">
                        <div className="input-with-icon-general">
                            <input type="text" name="name" placeholder="Your Name ..." className="field-input"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className="tooltip required tooltipstered"><i className="ti ti-asterisk"></i></span>
                            {errors.name && touched.name ? (
                                <p className="form-error">{errors.name}</p>
                            ) : null}
                        </div>
                        <div className="input-with-icon-general">
                            <input type="email" name="email" placeholder="Email Address ..." className="field-input"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {errors.email && touched.email ? (
                                <p className="form-error">{errors.email}</p>
                            ) : null}

                            <span className="tooltip required tooltipstered"><i className="ti ti-asterisk"></i></span>

                        </div>
                        <div className="input-with-icon-general">
                            <input type="password" name="password" id="password" placeholder="Choose a Password ..." className="field-input"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {errors.password && touched.password ? (
                                <p className="form-error">{errors.password}</p>
                            ) : null}

                            <div className="password-background-layer1"></div>
                            <div className="password-background"></div>
                            <span className="tooltip private tooltipstered"><i className="ti ti-lock"></i></span>
                            <span className="tooltip required tooltipstered"><i className="ti ti-asterisk"></i></span>
                        </div>
                        <div className="input-with-icon-general">
                            <input type="password" name="confirm_password" id="confirm_password" placeholder="Repeat the Password ..." className="field-input"
                                value={values.confirm_password}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {errors.confirm_password && touched.confirm_password ? (
                                <p className="form-error">{errors.confirm_password}</p>
                            ) : null}
                            <span className="tooltip private tooltipstered"><i className="ti ti-lock"></i></span>
                            <span className="tooltip required tooltipstered"><i className="ti ti-asterisk"></i></span>
                        </div>
                        <div className="column_1-2">
                            <h4 className="st-label">Ticket Subject</h4>
                            <p className='submit-registration-paragraph'>what is this ticket about?</p>

                            <div className='submit-tooltip'>
                                <input type="text" name="ticket_subject" className="tooltip-input"
                                    value={values.ticket_subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.ticket_subject && touched.ticket_subject ? (
                                    <p className="form-error">{errors.ticket_subject}</p>
                                ) : null}
                                <span className="tooltip required tooltipstered"><i className="ti ti-asterisk"></i></span>
                            </div>
                        </div>
                        <div className="column_1-2">
                            <h4 className="st-label">Related URL</h4>
                            <p className='submit-registration-paragraph'>Optional, but very helpful.</p>
                            <p className='submit-tooltip'><input type="text" name="related_url" placeholder="http://....." className="tooltip-input"
                                value={values.related_url}
                                onChange={handleChange}
                                onBlur={handleBlur} />

                            </p>
                            {errors.related_url && touched.related_url ? (
                                <p className="form-error">{errors.related_url}</p>
                            ) : null}
                        </div>

                    </div>
                    <div className="fields-tight-general">
                        <div className="fields tight cf margin-20">
                            <h4 className="st-label">Ticket Description</h4>
                            <p className='submit-registration-paragraph'>Please be as descriptive as possible regarding the details of this ticket.</p>

                            <div className="redactor-box" role="application" dir="ltr">
                                {/* Redactor Toolbar */}
                                <RichTextEditor
                                    className="texteditor"
                                    name="ticket_description"
                                    // initialValue=''
                                    getValue={getValue}
                                    value={editorValue}

                                />

                                {errors.ticket_description && touched.ticket_description ? (
                                    <p className="form-error">{errors.ticket_description}</p>
                                ) : null}

                            </div>


                        </div>
                        <div {...getRootProps()} className="dropzone">
                            <input {...getInputProps()} name='ticket_attachment'
                                value={values.ticket_attachment}
                                onChange={handleChange}
                            />

                            <p className="ticksyAttachFile dz-clickable">
                                <span>Upload Attachment</span>
                            </p>
                            {isDropdownOpen && (
                                <div className="dropdown">
                                    {/* Close button (cross icon) */}
                                    <button className="close-button" onClick={closeDropdown}>
                                        &#10006;
                                    </button>

                                    {/* File information */}
                                    <div className="file-info">
                                        {uploadedFile && (
                                            <>
                                                <p className='file-name'>{uploadedFile.name}</p>

                                                <p className='file-name-size'>{(uploadedFile.size / 1024).toFixed(2)} KB</p>

                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="ticket-visibility-checkbox">

                            <label className={`switch ${isChecked ? 'checked' : ''}`}>
                                <input
                                    id="public_ticket_checkbox"
                                    type="checkbox"
                                    value="true"
                                    className="js-switch-sm"
                                    name="public_ticket_checkbox"
                                    data-switchery="true"
                                    checked={isChecked}
                                    onChange={toggleCheckbox}
                                />
                                <span className="slider"></span>
                            </label>
                            <label htmlFor="public_ticket_checkbox">Make this ticket public</label>
                        </div>
                        <p className="fields tight cf margin-30">Read our
                            <NavLink className="privacy-policy" to="https://ticksy.com/privacy-policy/" target="_blank" style={{ verticalAlign: "top" }}>privacy policy  </NavLink> and see how we handle your personal data
                        </p>
                        <div className="fields tight cf margin-30">
                            <button type="submit" className="button color-2 large input-button" >Submit Ticket</button>
                        </div>
                    </div>

                    </div>

            </form>

        </>

    )
});

export default SalientResponsiveMulti
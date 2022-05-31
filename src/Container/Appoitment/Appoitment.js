import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Appoitment(props) {
    let schema = yup.object().shape({
        name: yup.string().required("Name is reqired"),
        email: yup.string().email("Enter a valid Email").required("Email is reqired"),
        date:yup.number().required('Appoitment iS Required'),
        department:yup.string().required('please select Department'),
        message:yup.string().required('Message Is reqired')
      });
    
    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            date:'',
            department:'',
            message:''

        },
        validationSchema: schema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          console.log('Appoitment Successfully');
        }
      });
    
    
    
    
    
    

    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <Formik value={formik}>
                    <Form  onSubmit={formik.handleSubmit} action method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  onChange={formik.handleChange}/>
                                {formik.errors.name ? <p className="text-danger small">{formik.errors.name}</p> : null}
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"  onChange={formik.handleChange}/>
                                {formik.errors.email ? <p className="text-danger small">{formik.errors.email}</p> : null}
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  onChange={formik.handleChange}/>
                                {formik.errors.date ? <p className="text-danger small">{formik.errors.date}</p> : null}
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select name="department" id="department" className="form-select" onChange={formik.handleChange}>
                                    <option value>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                {formik.errors.department ? <p className="text-danger small">{formik.errors.department}</p> : null}
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""}  onChange={formik.handleChange}/>
                            {formik.errors.message ? <p className="text-danger small">{formik.errors.message}</p> : null}
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit" onClick={() => {}} >Make an Appointment</button></div>
                    </Form>
                    </Formik>
                </div>
            </section>
        </main>


    );
}

export default Appoitment;
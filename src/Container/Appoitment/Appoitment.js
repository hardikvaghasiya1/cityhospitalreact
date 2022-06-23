import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';
import Input from '../../Component/Styled/Input';
import { useEffect } from 'react';
import { useState } from 'react';

function Appoitment(props) {
    const [update, SetUpdate] = useState(false);
    const history = useHistory(); 


    const handleinsert = () =>{
        history.push('/listappoitment');
    }



    const handlecreate = (values) => {
        let dataobj ={
            id: Math.floor(Math.random()*1000),
            ...values
        }
       let localdata = JSON.parse(localStorage.getItem("appoitment"));
        if(localdata === null){
            localStorage.setItem("appoitment", JSON.stringify([dataobj]));
        }else{
           localdata.push(dataobj);
           localStorage.setItem("appoitment", JSON.stringify(localdata));
        }
        handleinsert();
    }
    const handleupdate = (values) => {
        let localdata = JSON.parse(localStorage.getItem("appoitment"));
        let udata = localdata.map((u) => {
            if(u.id === values.id){
                return values;
            }else{
                return u;
            }
        });
        localStorage.setItem("appoitment" , JSON.stringify(udata));
        SetUpdate(false);
        history.push('/listappoitment');
        formik.resetForm();

    }



    let schema = yup.object().shape({
        name: yup.string().required("Name is reqired"),
        email: yup.string().email("Enter a valid Email").required("Email is reqired"),
        date:yup.string().required('Appoitment is Required'),
        department:yup.string().required('please select Department'),
        message:yup.string().required('Message is reqired')
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
        onSubmit: (values) => {
            if(update){
                handleupdate(values);
            }else{
                handlecreate(values);
            }
        }
      });

      useEffect(()=>{
        let localdata = JSON.parse(localStorage.getItem("appoitment"));
        if(localdata !== null && props.location.state)
        {
            let fdata = localdata.filter((f) => f.id === props.location.state.id);
            console.log(fdata[0]);
            formik.setValues(fdata[0]);
            SetUpdate(true);
            history.replace();
        }
      },[])
      
      const {handleSubmit, errors, handleChange, values} =formik;
    
    
    
    
    

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

                    <div className='row mb-3'>
                            <div className="col-6 text-center">
                                <NavLink to={"/appoitment"} activeClassName="apt-btn">Book Appoitment</NavLink>
                            </div>
                            <div className="col-6 text-center">
                                <NavLink to={"/listappoitment"} activeClassName="apt-btn">List Appoitment</NavLink>
                            </div>
                    </div>

                    <Formik value={formik}>
                    <Form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <Input type="text" 
                                    name="name" 
                                    className="form-control" 
                                    id="name" 
                                    value={values.name}
                                    placeholder="Your Name"
                                    onChange ={handleChange}
                                    error={Boolean(errors.name)}
                                    errormessage={errors.name}

                                    />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <Input type="email" 
                                    className="form-control" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Your Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    errormessage={errors.email}
                                    error={Boolean(errors.email)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <Input type="date" 
                                    name="date" 
                                    className="form-control datepicker" 
                                    id="date" 
                                    placeholder="Appointment Date"
                                    onChange={handleChange}
                                    value={values.date}
                                    error={Boolean(errors.date)}
                                    errormessage={errors.date}
                                    />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <Input type='select'
                                    name="department" 
                                    id="department" 
                                    className="form-select"
                                    onChange={handleChange}
                                    value={values.department}
                                    error={Boolean(errors.department)}
                                    errormessage={errors.department}>
                                    <option value>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </Input>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <Input type='textarea' 
                                className="form-control" 
                                name="message" 
                                rows={5} 
                                defaultValue={""}   
                                placeholder="Message (Optional)"
                                value={values.message}
                                onChange={handleChange}
                                error={Boolean(errors.message)}
                                errormessage={errors.message}> 
                            </Input>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        {update ?
                            <div className="text-center"><button type="submit">Update an Appointment</button></div>:
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        }
                    </Form>
                    </Formik>
                </div>
            </section>
        </main>


    );
}

export default Appoitment;
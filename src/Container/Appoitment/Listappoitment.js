import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { get_medicine_data } from '../../redux/Action/medicine.action';



function Listappoitment(props) {
    const [data, setData] = useState([]);
    const history = useHistory(); 

    const showData = () => {
        const localdata = JSON.parse(localStorage.getItem('appoitment'));
        setData(localdata);
    }
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(get_medicine_data());
            showData();
        }, []
    )
    
    const handledelete = (id) =>{
        console.log(id);
        let localdata = JSON.parse(localStorage.getItem('appoitment'));
        console.log(localdata);
        let ddata = localdata.filter((f)=>f.id !== id)
        console.log(ddata);
        localStorage.setItem('appoitment',JSON.stringify(ddata))
        showData();
    }

    const handleedit = (id) => {
        history.push('/appoitment', {"id":id});
    }



    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Your Appointment</h2>
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
                    <div className='mt-5'>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                        <TableCell align="center">Date</TableCell>
                                        <TableCell align="center">Department</TableCell>
                                        <TableCell align="center">Message</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((a) => (
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {a.name}
                                            </TableCell>
                                            <TableCell align="center">{a.email}</TableCell>
                                            <TableCell align="center">{a.date}</TableCell>
                                            <TableCell align="center">{a.department}</TableCell>
                                            <TableCell align="center">{a.message}</TableCell>
                                            <TableCell align="center">
                                                <IconButton aria-label="delete" onClick={() => handledelete(a.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                                <IconButton aria-label="update" onClick={() => handleedit(a.id)}>
                                                    <EditIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Listappoitment;
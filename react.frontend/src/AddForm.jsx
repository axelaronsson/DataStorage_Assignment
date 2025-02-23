import { useForm } from "react-hook-form";
import { useState } from 'react'
import PropTypes from 'prop-types';
import "./index.css";

function AddForm() {
    const [sending, setSending] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    let newProject = {
        title: null,
        startdate: null,
        enddate: null,
        customername: null,
        status: null,
        userfirstname: null,
        userlastname: null,
        useremail: null,
        productname: null,
        productprice: null,
        totalprice: null
    }

    const onSubmit = async (data) => {
        setSending(true)
        newProject = {
            ...data
        }

        console.log(JSON.stringify(newProject))
        console.log(newProject)

        try {
            const response = await fetch("https://localhost:7081/api/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProject)
            });

            //const result = await response.json();

            if (response.ok) {
                window.location.href = "/success"
            }
            else {
                window.location.href = "/fail"
            }
            console.log(response);
        } catch (e) {
            console.log(e)
        }

    };


    let content = JSON.parse(localStorage.getItem('content'));

    AddForm.propTypes = {
        isEdit: PropTypes.bool,
        formData: PropTypes.object
    };
    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: sending ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', position: 'absolute', height: '100%', width: '100%', backgroundColor: 'white'}}>Skickar..</div>
            <form id="add-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Titel</label><br />
                    <input
                        name="title"
                        {...register("title", { required: true })}
                    />
                    {errors.title && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="startDate">StartDatum</label><br />
                    <input
                        name="startDate"
                        placeholder="YY-MM-DD"
                        {...register("startDate", { required: true })}
                    />
                    {errors.startDate && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="endDate">Slutdatum</label><br />
                    <input
                        name="endDate"
                        placeholder="YY-MM-DD"
                        {...register("endDate", { required: true })}
                    />
                    {errors.endDate && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="customername">Kund/{content[0]}</label><br />
                    <input
                        name="customername"
                        {...register("customername", { required: true })}
                    />
                    {errors.customername && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="status">Status</label><br />
                    <select
                        name="status" {...register("status", { required: true })}>
                        <option value="notStarted">{content[4]}</option>
                        <option value="active">{content[5]}</option>
                        <option value="closed">Avslutad</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="userFirstName">Projektansvarig namn</label><br />
                    <input
                        name="userFirstName"
                        {...register("userFirstName", { required: true })}
                    />
                    {errors.userFirstName && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="userLastName">Projektansvarig efternamn</label><br />
                    <input
                        name="userLastName"
                        {...register("userLastName", { required: true })}
                    />
                    {errors.userLastName && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="userEmail">Projektansvarig email</label><br />
                    <input
                        name="userEmail"
                        type="email"
                        {...register("userEmail", {
                            required: true,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        })}
                    />
                    {errors.userEmail && (
                        <p className="error-msg">This field is required and needs to be a valid email</p>
                    )}
                </div>
                <div>
                    <label htmlFor="productName">{content[2]}</label><br />
                    <input
                        name="productName"
                        {...register("productName", { required: true })}
                    />
                    {errors.productName && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="productPrice">Pris</label><br />
                    <input
                        name="productPrice"
                        {...register("productPrice", { required: true })}
                    />
                    {errors.productPrice && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="totalPrice">Total:</label><br />
                    <input
                        name="totalPrice"
                        {...register("totalPrice", { required: true })}
                    />
                    {errors.totalPrice && <p className="error-msg">This field is required</p>}
                </div>
                <input style={{ backgroundColor: '#208637', color: 'white', margin: '10px 0px' }} type="submit" value="Skicka" />
            </form>
        </div>
    );
}



export default AddForm
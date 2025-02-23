import { useForm } from "react-hook-form";
import { useState } from 'react'
import PropTypes from 'prop-types';
import "./index.css";

function Form({ formData }) {
    const [sending, setSending] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    let updateObj = {
        id: null,
        projectId: null,
        title: null,
        startDate: null,
        endDate: null,
        customerId: null,
        customer: {
            id: null,
            customerName: null
        },
        status: null,
        userFirstName: null,
        userLastName: null,
        userEmail: null,
        productName: null,
        productPrice: null,
        totalPrice: null
    }

    const onSubmit = async (data) => {
        setSending(true)
        updateObj = {
            ...data,
            id: formData.id,
            projectId: formData.projectId,
            customerId: formData.customerId,
            customer: {
                id: formData.id,
                customerName: data.customer
            },
            productPrice: parseInt(data.productPrice),
            totalPrice: parseInt(data.totalPrice)
        }


        try {
            const response = await fetch("https://localhost:7081/api/projects", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateObj)
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

    Form.propTypes = {
        isEdit: PropTypes.bool,
        formData: PropTypes.object
    };
    return (
        <div style={{position: 'relative'}}>
            <div style={{display: sending ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', position: 'absolute', height: '100%', width: '100%', backgroundColor: 'white', top: '-40px', paddingBottom: '124px', opacity: '1'}}>Skickar..</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Titel</label><br />
                    <input
                        name="title"
                        defaultValue={formData?.title}
                        {...register("title", { required: true })}
                    />
                    {errors.title && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="startDate">StartDatum</label><br/>
                    <input
                        name="startDate"
                        defaultValue={formData?.startDate.slice(0, 10)}
                        {...register("startDate", { required: true })}
                    />
                    {errors.startDate && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="endDate">Slutdatum</label><br/>
                    <input
                        name="endDate"
                        placeholder="Efternamn"
                        defaultValue={formData?.endDate.slice(0, 10)}
                        {...register("endDate", { required: true })}
                    />
                    {errors.endDate && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="customer">Kund/{content[0]}</label><br />
                    <input
                        name="customer"
                        placeholder="Efternamn"
                        defaultValue={formData?.customer.customerName}
                        {...register("customer", { required: true })}
                    />
                    {errors.customer && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="status">Status</label><br />
                    <select defaultValue={formData?.status} name="status" {...register("status", { required: true })}>
                        <option value="active">{content[5]}</option>
                        <option value="notStarted">{content[4]}</option>
                        <option value="closed">Avslutad</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="userFirstName">Projektansvarig namn</label><br />
                    <input
                        name="userFirstName"
                        defaultValue={formData?.userFirstName}
                        {...register("userFirstName", { required: true })}
                    />
                    {errors.userFirstName && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="userLastName">Projektansvarig efternamn</label><br />
                    <input
                        name="userLastName"
                        defaultValue={formData?.userLastName}
                        {...register("userLastName", { required: true })}
                    />
                    {errors.userLastName && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="userEmail">Projektansvarig email</label><br/>
                    <input
                        name="userEmail"
                        defaultValue={formData?.userEmail}
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
                        defaultValue={formData?.productName}
                        {...register("productName", { required: true })}
                    />
                    {errors.productName && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="productPrice">Pris</label><br />
                    <input
                        name="productPrice"
                        defaultValue={formData?.productPrice}
                        {...register("productPrice", { required: true })}
                    />
                    {errors.productPrice && <p className="error-msg">This field is required</p>}
                </div>
                <div>
                    <label htmlFor="totalPrice">Total:</label><br />
                    <input
                        name="totalPrice"
                        defaultValue={formData?.totalPrice}
                        {...register("totalPrice", { required: true })}
                    />
                    {errors.totalPrice && <p className="error-msg">This field is required</p>}
                </div>
                <input style={{ backgroundColor: '#208637', color: 'white', margin: '10px 0px'}} type="submit" value="Skicka" />
            </form>
        </div>
    );
}



export default Form
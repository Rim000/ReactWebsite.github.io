import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",


    });
    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {

            return {
                ...preVal,
                [name]: value,
            };

        });
    };

    const formSubmit = (e) => {


        e.preventDefault();
        alert(
            `My Name Is ${data.fullname}. My Mobile no is ${data.phone}.
                And email is ${data.email} and here is what I want to Say ${data.msg} `)


    }


    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>


            <div className="container contact_div">

                <div className="row">

                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={formSubmit}>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name </label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    name="Full Name" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone No </label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    name="Phone No" value={data.phone} onChange={InputEvent} placeholder="Enter Your Phone no" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    name="Email Address" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control"
                                    name="Message" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1"
                                    rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Contact;
import React, {useRef, memo, useState} from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import {useForm} from "react-hook-form";
import {Modal} from "../modalWindow/modal";
import {LinearProgress} from '@mui/material';

export const Contact = memo(({}) => {
    const [modalActive, setModalActive] = useState(false)
    const [loading, setLoading] = useState(false);

    const form = useRef();
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm({
        mode: "all"
    });

    const onSubmit = (data) => {
        setLoading(true)
        // data.preventDefault();
        emailjs
            .sendForm(
                'service_0pkpvzf',
                'template_rjb6h0n',
                form.current,
                'lVydkjtGyVnHWQKkY')
            .then(() => {
                setModalActive(true)
                reset();
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            {/*<span className="contact__card-data">user@gmail.com</span>*/}

                            <a target="_blank" href="mailto:dimov.igor97@gmail.com" className="contact__button">Write
                                Me {" "}
                                <i className="bx bx-up-arrow-alt contact__button-icon"></i></a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+358465979039</span>

                            <a target="_blank"
                               href="https://wa.me/+358465979039?text=Hello how are you ?"
                               className="contact__button">
                                Write Me {" "}
                                <i className="bx bx-up-arrow-alt contact__button-icon"></i></a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>

                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">@Ihor_Dimov</span>

                            <a target="_blank" href="https://t.me/Ihor_Dimov" className="contact__button">
                                Write Me {" "}
                                <i className="bx bx-up-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>

                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">First Name</label>

                            <input
                                {...register("firstName", {
                                    required: "Required field",
                                    minLength: {
                                        value: 2,
                                        message: "Minimum two characters"
                                    }
                                })}

                                className="contact__form-input"
                                placeholder="Insert your name"
                            />

                        </div>


                        <div style={{height: 40, color: "red"}}>
                            {errors?.firstName &&
                                <p><i className='bx bx-error'></i>{errors?.firstName?.message || "Error!"}</p>}
                        </div>


                        <div className="contact__form-div">
                            <label className="contact__form-tag">EMail</label>

                            <input
                                {...register("emailAddress", {
                                    required: "Required field",
                                })}

                                type="email"
                                className="contact__form-input"
                                placeholder="Insert your email"
                            />
                        </div>

                        <div style={{height: 40, color: "red"}}>
                            {errors?.emailAddress &&
                                <p><i className='bx bx-error'></i>{errors?.emailAddress?.message || "Error!"}</p>}
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                {...register("project", {
                                    required: "Required field",
                                    minLength: {
                                        value: 5,
                                        message: "Minimum five characters"
                                    },
                                })}

                                name="project"
                                cols="30"
                                rows="10"
                                className="contact__form-input"
                                placeholder="Write your project">

                            </textarea>
                        </div>

                        <div style={{height: 40, color: "red"}}>
                            {errors?.project &&
                                <p><i className='bx bx-error'></i>{errors?.project?.message || "Error!"}</p>}
                        </div>


                        <button
                            className="button button--flex">
                            Send Message
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </button>



                    </form>
                </div>
            </div>
            {   loading
                ? <LinearProgress color="inherit" />
                : <Modal active={modalActive} setActive={setModalActive}
                />}
        </section>
    );
});

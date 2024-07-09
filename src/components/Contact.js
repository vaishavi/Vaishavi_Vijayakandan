import { Container, Row, Col } from "react-bootstrap";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    const form = useRef();

    const validateField = (name, value) => {
        let isValid = true;

        if (name === 'user_name') {
            if (!value.trim()) {
                toast.error('Name field should not be empty');
                isValid = false;
            } else if (value.trim().length < 2) {
                toast.error('Name is not long enough (minimum 2 characters)');
                isValid = false;
            }
        } else if (name === 'user_email') {
            if (!value.trim()) {
                toast.error('Email field should not be empty');
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                toast.error('Enter a valid email ID');
                isValid = false;
            }
        } else if (name === 'message') {
            if (!value.trim()) {
                toast.error('Message tab is empty');
                isValid = false;
            }
        }

        return isValid;
    };

    const validateForm = () => {
        let isValid = true;

        if (!validateField('user_name', form.current.user_name.value)) {
            isValid = false;
        }

        if (!validateField('user_email', form.current.user_email.value)) {
            isValid = false;
        }

        if (!validateField('message', form.current.message.value)) {
            isValid = false;
        }

        return isValid;
    };

    const handleBlur = (e) => {
        validateField(e.target.name, e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        emailjs
            .sendForm('service_3s0pwbn', 'template_nr9zm1a', form.current, {
                publicKey: 'kf0YPgy7_mh4l55TY',
            })
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    form.current.reset();  // Clear the form fields
                },
                (error) => {
                    toast.error("Some issue, try again.");
                },
            );
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col md={8}>
                        <div className="contact-box">
                            <h2>Get In Touch</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="user_name" onBlur={handleBlur} />
                                <label>Email</label>
                                <input type="email" name="user_email" onBlur={handleBlur} />
                                <label>Message</label>
                                <textarea name="message" onBlur={handleBlur} />
                                <input className="sendButton" type="submit" value="Send" />
                            </form>
                        </div>
                    </Col>
                </Row>
                <ToastContainer position="bottom-right"/>
            </Container>
        </section>
    );
};






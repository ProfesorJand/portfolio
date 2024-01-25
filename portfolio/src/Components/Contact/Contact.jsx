import axios from 'axios';
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Styles from './contact.module.css';
import emailjs from '@emailjs/browser';
const YOUR_SERVICE_ID = process.env.REACT_APP_SERVICE_ID_SENDEMAIL;
const YOUR_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID_SENDEMAIL;
const YOUR_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY_SENDEMAIL;

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setSuccess] = useState(false);
  const [protectionEmail, setProtectionEmail] = useState(false);
  const [counterNum, setCounterNum] = useState();
  const form = useRef();

  useEffect(() => {
    success && startCountdown(60);
  }, [success]);

  function startCountdown(seconds) {
    let counter = seconds;
    setCounterNum(seconds);
    setProtectionEmail(true);
    const interval = setInterval(() => {
      setCounterNum(counter);
      counter--;

      if (counter < 0) {
        clearInterval(interval);
        setProtectionEmail(false);
      }
    }, 1000);
  }

  // async function formHandle(e) {
  //   e.preventDefault();
  //   axios
  //     .post('https://portfolio-backend.adaptable.app/sendEmail', {
  //       email,
  //       subject,
  //       emailMessage,
  //     })
  //     .then((r) => {
  //       console.log(r.data);
  //       setSuccess(true);
  //     });
  //   //axios.get("https://portfolio-backend.adaptable.app/").then(r=>console.log(r))
  // }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="tituloH2" id="contact">
        <h2>Contact</h2>
      </div>
      <div className={Styles.container}>
        {!protectionEmail ? (
          <form
            ref={form}
            className={Styles.form}
            onSubmit={(e) => {
              sendEmail(e);
            }}
          >
            <input
              name="user_name"
              className={Styles.inputEmail}
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              required
            />
            <br />
            <input
              name="user_email"
              className={Styles.inputEmail}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <br />
            <input
              name="user_subject"
              className={Styles.inputSubject}
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              minLength="4"
              required
            />
            <br />
            <div className={Styles.DivTextarea}>
              <textarea
                name="user_message"
                className={Styles.textarea}
                value={emailMessage}
                onChange={(e) => {
                  setEmailMessage(e.target.value);
                }}
                placeholder="Message..."
                required
              />
            </div>
            <br />
            <input
              className={Styles.submit}
              type="submit"
              value="Submit"
            ></input>
          </form>
        ) : success ? (
          <div className={Styles.divSended}>
            <p>Email sended ✔️</p>
            <p>Please Wait {counterNum} seconds to send another Email</p>
          </div>
        ) : (
          <div className={Styles.divSended}>
            <p>❌ Email error ❌</p>
            <p>Please Wait {counterNum} seconds to send another Email</p>
          </div>
        )}
      </div>
    </>
  );
}

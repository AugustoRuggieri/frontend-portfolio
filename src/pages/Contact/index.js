import React, { useRef } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_is0wd18', 'template_xy8iuhx', form.current, 'vRJT2xiDSqL7N6O8v')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully')
            }, (error) => {
                console.log(error.text);
                alert('There was an error, try again')
            });
        e.target.reset()
    }

    return (
        <>
            <div className='container'>
                <div className='contact'>
                    <div className='text-zone'>
                        <h1>Contact me</h1>
                        <p>Feel free to contact me for job opportunities or to ask anything</p>
                        <div className='contact-form'>
                            <form ref={form} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input type='text' name='from_name' placeholder='Name' required />
                                    </li>
                                    <li className='half'>
                                        <input type='email' name='email' placeholder='Email' required />
                                    </li>
                                    <li>
                                        <input type='text' name='subject' placeholder='Subject' required />
                                    </li>
                                    <li>
                                        <textarea type='text' name='message' placeholder='Your message' required />
                                    </li>
                                    <li>
                                        <input type='submit' className='submit-btn' value='send' />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>

                    <div className='info-map'>
                        Augusto Ruggieri
                        <br />
                        Italy
                        <br />
                        Via Mario de Maria 4
                        <br />
                        40129 Bologna
                        <br />
                        <span>augustoruggieri@gmail.com</span>
                        <br />
                        <span>+39 340 3890971</span>
                    </div>

                    <div className='map-wrap'>
                        <MapContainer center={[44.50881779475319, 11.343264185949348]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                            <Marker position={[44.50881779475319, 11.343264185949348]}>
                                <Popup>My position</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </>
    )
}

export default Contact
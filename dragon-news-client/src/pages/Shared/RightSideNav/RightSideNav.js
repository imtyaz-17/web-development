import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {

            })
            .catch(error => console.error())
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google  </Button>
                <Button variant="outline-primary"><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5 className='mb-2'> Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch /> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;
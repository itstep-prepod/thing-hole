import React, {useState}  from 'react';
import {Input} from '../../../components/input';
import {Button} from '../../../components/button';
import { Preloader } from '../../../components/preloader';
import {Title, Buttons} from './index.styles.js';
import { useDispatch } from 'react-redux';

import { getIsLoading } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
import { userRegister,userLogin } from '../../../redux/actions';




const STATUS = {
    REGISTER: 'register',
    LOGIN: 'login'
};


export const SignUpUser = () => {
    const [status, setStatus] = useState(STATUS.REGISTER);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);



    
    const onEmailChange = ({target: {value}}) => {
        setEmail(value)
    };

    const onPasswordChage = ({target: {value}}) => {
        setPassword(value)
    };

    const onSubmit = () => {
        if (status === STATUS.REGISTER) {
            dispatch(userRegister({email, password}));
        } else {
            dispatch(userLogin({email, password}));
        }
    };


    const onSwitchStatusClick = () => {
        setStatus((prevStatus) => {
            if (prevStatus === STATUS.REGISTER) {
                return STATUS.LOGIN;
            } else {
                return STATUS.REGISTER;
            }
        });
    };

    return (
        <>
                <Title>{status}</Title> 
                <Input 
                    label='Email'
                    type='email'
                    value={email}
                    onChange={onEmailChange}
                />
                <Input
                    value={password}
                    onChange={onPasswordChage}
                    label='Password'
                    type='password'
                    // error='passwords do not match'
                />
                {
                    status === STATUS.REGISTER && 
                    <Input label='Password again' type='password' />
                }
                <Buttons>
                    <Button onClick={onSubmit}>
                       {isLoading ? <Preloader/> : 'Ok'} 
                    </Button>
                    <Button onClick={onSwitchStatusClick} view='secondary' withBorder>
                        { status === STATUS.REGISTER ? 'Login' : 'Register' }
                    </Button>
                </Buttons>    
        </>
    );
};
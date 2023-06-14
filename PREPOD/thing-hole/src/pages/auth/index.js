import React, {useState} from 'react';
import {Input} from '../../components/input';
import {Button} from '../../components/button';
import {Wrapper, WrapperForm, Title, Buttons} from './index.styles.js';
import {registerUser} from '../../firebase';

const STATUS = {
    REGISTER: 'register',
    LOGIN: 'login'
};

export const AuthPage = () => {
    const [status, setStatus] = useState(STATUS.REGISTER);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSwitchStatusClick = () => {
        setStatus((prevStatus) => {
            if (prevStatus === STATUS.REGISTER) {
                return STATUS.LOGIN;
            } else {
                return STATUS.REGISTER;
            }
        });
    };

    const onEmailChange = ({target: {value}}) => {
        setEmail(value)
    };

    const onPasswordChage = ({target: {value}}) => {
        setPassword(value)
    };

    const onSubmit = () => {
        if (status === STATUS.REGISTER) {
            // TODO СООБЩИТЬ ВСЕЙ ПРИЛАГЕ!
            // асинхронный диспатч!
            registerUser(email, password);
        } else {
            // ???
        }
    };

    // TODO validation esli uspeem
    return (
        <Wrapper>
            <WrapperForm>
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
                        Ok
                    </Button>
                    <Button onClick={onSwitchStatusClick} view='secondary' withBorder>
                        { status === STATUS.REGISTER ? 'Login' : 'Register' }
                    </Button>
                </Buttons>             
            </WrapperForm>
        </Wrapper>
    );
};
import React, { useContext, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from "yup";
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms"
import authApi from '../api/auth';
import { jwtDecode } from 'jwt-decode';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
import useAuth from '../hooks/useAuth';

export type LoginSchema = {
    email: string;
    password: string;
}

const validationSchema: Yup.ObjectSchema<LoginSchema> = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})
 
function LoginScreen() {
    const { login } = useAuth();
    const [loginFailed, setLoginFailed] = useState<{ msg: string, isFailed: boolean }>({ msg: "", isFailed: false });

    const handleSubmit = async ({ email, password }: { email: string, password: string }) => {
        const result = await authApi.login(email, password);     
        
        if (!result.ok) {
            setLoginFailed({ msg: "Invalid email or password.", isFailed: true });
            return;
        }
        setLoginFailed({ msg: "", isFailed: false });
        login(result?.data as string)
    }

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            <Form
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage errorMsg={loginFailed.msg} visible={loginFailed.isFailed} />
                <FormField
                    name='email'
                    iconName='email'
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    textContentType='emailAddress'
                />
                <FormField
                    name='password'
                    iconName='lock'
                    placeholder='Password'
                    secureTextEntry
                    autoCapitalize='none'
                    autoCorrect={false}
                    textContentType='password'
                />
                <SubmitButton title='login' />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    },
})

export default LoginScreen;
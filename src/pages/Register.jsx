import React, {useState} from 'react'
import Input from '../components/Input'
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';
import { mustFilled, email } from '../utils/Validations';
import { register, setToken } from '../apis'
import { connect } from 'react-redux'
import {changeLoginStatus, changeUserInfo} from '../store/actions'
import Strings from '../utils/Strings';


const mapDispatchToProps = { changeLoginStatus, changeUserInfo }

function RegisterPage(props) {
    const fields = [
        {
            name: 'firstName',
            type: 'text'
        },
        {
            name: 'lastName',
            type: 'text'
        },
        {
            name: 'email',
            type: 'email'
        },
        {
            name: 'password',
            type: 'password'
        }
    ]
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [errors, setErrors] = useState({})
    const validation = (name) => {
        let hasError
        let newErrors = errors
        if(name === 'email') {
            hasError = email(values[name])
        } else {
            hasError = mustFilled(values[name])
        }
        if(hasError)
            newErrors[name] = hasError
        else
            delete newErrors[name]
        setErrors(Object.assign({}, newErrors))
    }
    const changeValue = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const submit = () => {
        fields.map(({name}) => validation(name))
        if (Object.entries(errors).length !== 0 && errors.constructor === Object) return
        else {
            setLoading(true)
            setMessage(null)
            register(values)
                .then(response => {
                    if (response.data.success) {
                        setTimeout(() => {
                            setLoading(false)
                            setToken(response.data.token)
                            props.changeLoginStatus(true)
                            props.changeUserInfo(response.data.message)
                            props.history.push('/')
                        }, 300)
                    } else {
                        setLoading(false)
                        setMessage({
                            type: 'error',
                            message: response.data.message
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                    setLoading(false)
                    setMessage({
                        type: 'error',
                        message: Strings.errors.problem
                    })
                })
        }
    }
    const goToLogin = () => props.history.push('/login')
    const onBlur = (name) => validation(name)
    return (
        <PageContainer
            title='register'
            message={message}
        >
            <form>
                {
                    fields.map(({name, ...props}, idx) =>
                        <Input
                            onBlur={() => onBlur(name)}
                            onChange={(e) => changeValue(e)}
                            key={idx}
                            name={name}
                            value={values[name]}
                            error={errors[name]}
                            {...props}
                        />
                    )
                }
                <div className='flex-column'>
                    <Button
                        loading={loading}
                        onClick={submit}
                        text='register'
                    />
                    <Button
                        onClick={goToLogin}
                        text='login'
                    />
                </div>
            </form>
        </PageContainer>
    )
}

export default connect(null, mapDispatchToProps)(RegisterPage)

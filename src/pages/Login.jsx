import React, {useState} from 'react'
import Input from '../components/Input'
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';
import { mustFilled, email } from '../utils/Validations';
import { login, setToken } from '../apis';
import Strings from '../utils/Strings';
import { connect } from 'react-redux'
import {changeLoginStatus, changeUserInfo} from '../store/actions'


const mapDispatchToProps = { changeLoginStatus, changeUserInfo }


function LoginPage(props) {
    const fields = [
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
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
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
            login(values)
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
                        setMessage(response.data.message)
                    }
                })
                .catch(err => {
                    console.log(err)
                    setLoading(false)
                    setMessage(Strings.errors.problem)
                })
        }
    }
    const goToRegister = () => props.history.push('/register')
    const onBlur = (name) => validation(name)
    return (
        <PageContainer
            title='login'
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
                        onClick={submit}
                        text='login'
                        loading={loading}
                    />
                    <Button
                        onClick={goToRegister}
                        text='register'
                    />
                </div>
            </form>
        </PageContainer>
    )
}

export default connect(null, mapDispatchToProps)(LoginPage)

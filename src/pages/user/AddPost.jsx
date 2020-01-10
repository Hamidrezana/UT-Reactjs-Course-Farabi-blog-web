import React, {useState} from 'react'
import PageContainer from '../../components/PageContainer'
import { mustFilled } from '../../utils/Validations'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { addBlog } from '../../apis'
import Strings from '../../utils/Strings'
import { connect } from 'react-redux'
import { changeReloadBlogs } from '../../store/actions'

const mapDispatchToProps = { changeReloadBlogs }

function AddPost(props) {
    const fields = [
        {
            name: 'title',
        },
        {
            name: 'description',
            multiline: true,
            rows: 3
        }
    ]
    const [values, setValues] = useState({
        title: '',
        description: ''
    })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const validation = (name) => {
        let hasError
        let newErrors = errors
        hasError = mustFilled(values[name])
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
            addBlog(values)
                .then(response => {
                    if (response.data.success) {
                        setTimeout(() => {
                            setLoading(false)
                            setMessage({
                                type: 'success',
                                message: Strings.messages.successfullyAdded
                            })
                            props.changeReloadBlogs()
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
    const onBlur = (name) => validation(name)
    return (
        <PageContainer
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
                        text='submit'
                        loading={loading}
                    />
                </div>
            </form>
        </PageContainer>
    )
}

export default connect(null, mapDispatchToProps)(AddPost)
import style from '../style.module.css'
import { useState } from 'react'


function Form({ add }) {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        add(value1, value2)
        setValue1('')
        setValue2('')
    }


    return (
        <>
            <form onSubmit={handleSubmit}
                className={style.form}>
                Автор:<input className={style.value1}
                    type="text"
                    value={value1}
                    onChange={event => setValue1(event.target.value)} />
                Сообщение:<input className={style.value2}
                    type="text"
                    value={value2}
                    onChange={event => setValue2(event.target.value)} />
                <br />
                <button type='submit'
                    className={style.FormBtn}>
                    Send message
                </button>
            </form>
        </>
    )
}

export default Form;
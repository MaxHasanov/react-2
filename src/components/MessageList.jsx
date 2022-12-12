import style from '../style.module.css'

export function MessagesList({ items }) {
    return (
        <>
            {items.map((el, index) => (
                <div key={index} className={style.messagesWrp}>
                    <div className={style.message}>
                        <p>Автор:</p>
                        <p className={style.author}>{el.author}</p>
                        <p>Сообщение:</p>
                        <p className={style.text}>{el.text}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
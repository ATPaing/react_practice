import styles from "./ErrorCard.module.css"

export default function ErrorCard({ onClickErroNoti, children }) {

    return (
        <div className={styles.error__container}>
            <div className={styles.error__wrapper}>
                <div className={styles.error__title}>
                    <h1>Error, invalid data detected!</h1>
                </div>
                {children}
                <div className={styles.button} onClick={onClickErroNoti}>Understood !</div>
            </div>    
        </div>
    )
}
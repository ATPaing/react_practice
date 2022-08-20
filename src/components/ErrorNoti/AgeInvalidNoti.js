import ErrorCard from "../UI/ErrorCard"

import styles from "./ErrorNoti.module.css"

export default function AgeInvalidNoti({onClickErroNoti}) {
    return (
        <ErrorCard onClickErroNoti={onClickErroNoti}>
        <div className={styles.error__desc}>
            <p className={styles.error__message}>Please enter the valid age</p>
            <p className={styles.error__example}>Example: Age: 21</p>
        </div>
        </ErrorCard>
    )
}
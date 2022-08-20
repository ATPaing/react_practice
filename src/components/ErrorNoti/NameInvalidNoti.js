import ErrorCard from "../UI/ErrorCard"

import styles from "./ErrorNoti.module.css"

export default function NameInvalidNoti({onClickErroNoti}) {
    return (
        <ErrorCard onClickErroNoti={onClickErroNoti}>
            <div className={styles.error__desc}>
                <p className={styles.error__message}>Please enter the valid name</p>
                <p className={styles.error__example}>Example: Username: James</p>
            </div>
        </ErrorCard>
    )
}
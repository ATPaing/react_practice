import styles from "./NewItems.module.css"

export default function NewItems({ data,onDeletingItem}) {

    const a = () => {
        onDeletingItem(data.id)
    }

    return (
        <div className={styles.newItem__wrapper}>
            <p className={styles.newItem__data}>{data.userName} ({data.age})</p>
            <div className={styles.delete__btn} onClick={a}>
                <svg width="16" height="19" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5V15C1 15.55 1.45 16 2 16H11C11.55 16 12 15.55 12 15V5H1ZM4 14H3V7H4V14ZM6 14H5V7H6V14ZM8 14H7V7H8V14ZM10 14H9V7H10V14ZM12.25 2H9V0.75C8.99921 0.551331 8.91994 0.361024 8.77946 0.220543C8.63898 0.0800612 8.44867 0.000789946 8.25 0L4.75 0C4.55133 0.000789946 4.36102 0.0800612 4.22054 0.220543C4.08006 0.361024 4.00079 0.551331 4 0.75V2H0.75C0.55125 2.00053 0.360791 2.07971 0.220253 2.22025C0.079715 2.36079 0.000527891 2.55125 0 2.75V4H13V2.75C12.9995 2.55125 12.9203 2.36079 12.7797 2.22025C12.6392 2.07971 12.4488 2.00053 12.25 2ZM8 2H5V1.013H8V2Z" fill="#303030"/>
                </svg>
            </div>
        </div>
    )
}
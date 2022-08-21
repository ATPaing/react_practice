import NewItems from "./newItems/NewItems"
import styles from "./AddedItems.module.css"


export default function AddedItems({ data,onDeletingItem }) {




    const newItem = data.map(d => {

        return (
            <NewItems key={Math.random().toString()} data={d} onDeletingItem={onDeletingItem}/>
        )
    })
    return (
        <div className={styles.addedItems__wrapper}>
            <p className={styles.addedItems__title}>- User List -</p>
            {data.length === 0 && <p className={styles.addedItems__text}>No data to show</p>}
            {newItem}
        </div>
    )
}
import NewForm from "./NewForm/NewForm"

export default function Form(props) {

    const onGettingFormValue = (x) => {
        props.onLiftingFormValue(x)
    }

    const onGettingValidityState = (x) => {
        props.onGettingValidityState(x)
    }

    return (
        <>
            <NewForm onGettingFormValue={onGettingFormValue} onGettingValidityState={onGettingValidityState} />
        </>
    )
}
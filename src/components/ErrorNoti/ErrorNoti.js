import NameInvalidNoti from "./NameInvalidNoti"
import AgeInvalidNoti from "./AgeInvalidNoti"
import AllInvalidNoti from "./AllInvalidNoti"

export default function ErrorNoti({ data ,onClickErroNoti}) {
    

    return (
        <>
            {!data.userNameValid && <NameInvalidNoti onClickErroNoti={onClickErroNoti} />}
            {!data.ageValid && <AgeInvalidNoti onClickErroNoti={onClickErroNoti} />}
            {!data.allValid && <AllInvalidNoti onClickErroNoti={onClickErroNoti} />}
        </>

    )
}
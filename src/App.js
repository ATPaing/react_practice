import './App.css';
import Form from "./components/Form/Form"
import AddedItems from "./components/AddedItems/AddedItems"
import ErrorNoti from "./components/ErrorNoti/ErrorNoti"

import { useState } from 'react';

function App() {

  const [data, setData] = useState([])

  const [isValid, setIsValid] = useState({
    userNameValid: true,
    ageValid: true,
    allValid: true  
  })


  const onCheckingFormValidity = (data) => {
    setIsValid({
      ...data
    })
  }

  const onClickErroNoti = () => {
    setIsValid({
      userNameValid: true,
      ageValid: true,
      allValid: true  
    })
  }


  const onDeletingItem = (deletedId) => {
    setData(prev => {
      console.log(prev,'prev before')
      for (let i = 0; i < prev.length; i++){
        if (prev[i].id === deletedId) {
          console.log(prev,i)
          prev.splice(i, 1)
        }
      }
      console.log(prev,'prev after')
      return prev
    })
    
  }
  console.log(data,'data')
  const formItems = (x) => {
    setData(prev => [
      ...prev,
      x
    ])
  }

  return (
    <>
      <Form onLiftingFormValue={formItems} onGettingValidityState={onCheckingFormValidity} />
      <AddedItems data={data} onDeletingItem={onDeletingItem} />
      <ErrorNoti data={isValid} onClickErroNoti={onClickErroNoti} />
    </>
  );
}

export default App;

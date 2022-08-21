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

  // USED SPLICE METHOD
  const onDeletingItem = (deletedId) => {
    setData(prev => {
      for (let i = 0; i < prev.length; i++){
        if (prev[i].id === deletedId) {
          prev.splice(i, 1)
        }
      }
      return [
        ...prev
      ]
    })
    
  }

  // USED FILTER METHOD
  // const onDeletingItem = (deletedId) => {
  //   setData(prev => prev.filter(item => item.id !== deletedId))
  // }
  
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

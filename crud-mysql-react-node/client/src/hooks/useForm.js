import React, { useState } from "react";

const useForm = () => {
  const [errors, setErros] = useState({});
  const [inputValues, setInputValues] = useState({
    id: "",
    full_name: "",
    email: "",
    password: "",
    address: "",
    gender: "",
    subjects: "",
    addedDate: "",
  });
  const [checkBox, setcheckBox] = useState({
    physics: false,
    chemistry: false,
    biology: false,
    math: false,
  });
  const [select, setSelect] = useState();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  console.log(inputValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: inputValues.id,
      full_name: inputValues.full_name,
      email: inputValues.email,
      password: inputValues.password,
      address: inputValues.address,
      gender: inputValues.gender,
      subjects: inputValues.subjects,
      addedDate: inputValues.addedDate,
    };
    console.log(data);
    setInputValues({
      id: "",
      full_name: "",
      email: "",
      password: "",
      address: "",
      gender: "",
      subjects: "",
      addedDate: "",
    });

    setErros();
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setcheckBox({ ...checkBox, [name]: checked });
  };
  const checkValues = Object.keys(checkBox).filter((val) => checkBox[val]);
  inputValues.subjects = checkValues;
  // console.log(inputValues);

  // const handleSelectFields = (e) => {
  //   setSelect(e.target.value);
  //   inputValues.address = select;
  // };
  return { inputValues, errors, handleOnchange, handleSubmit, handleCheckbox };
};

export default useForm;

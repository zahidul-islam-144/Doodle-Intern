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
    console.log("submitted");
    setErros();
  };

  return { inputValues, errors, handleOnchange, handleSubmit };
};

export default useForm;

import React, { useState } from "react";
import "./RegisterForm.css";
import useForm from "../../hooks/useForm";
import inputs from "../../utilities/inputFields";
import FormInput from "./FormInput";

const RegisterForm = () => {
  const { handleSubmit, handleOnchange, inputValues } = useForm();
  // const [inputValues, setInputValues] = useState({
  //   id: "",
  //   full_name: "",
  //   email: "",
  //   password: "",
  //   address: "",
  //   gender: "",
  //   subjects: "",
  //   addedDate: "",
  // });

  // const handleOnchange = (e) => {
  //   const { name, value } = e.target;
  //   setInputValues({
  //     ...inputValues,
  //     [name]: value,
  //   });
  // };
  // console.log(inputValues);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("submitted");
  //   // setErros();
  // };


  return (
    <>
      <form onSubmit={handleSubmit} className="form_container">
        {inputs.map((i) => (
          <FormInput key={i.id} {...i} value={inputValues[i.name]} onChange={handleOnchange}/>
        ))}
        <label>Select your location</label>
        <select
          className="form-select select other_fields"
          id="inputGroupSelect01"
        >
          <option>Select Location...</option>
          <option value="1">Dhaka</option>
          <option value="2">Chittagong</option>
          <option value="3">Rajshahi</option>
          <option value="3">Jessore</option>
          <option value="3">Khulna</option>
          <option value="3">Rangpur</option>
        </select>
        <span>error</span>
        <br />
        <label>Select your gender</label>
        <div>
          <input type="radio" name="male" value="HTML" />
          <label>Male</label>
          <input type="radio" name="female" value="HTML" />
          <label>Female</label>
          <input type="radio" name="other" value="HTML" />
          <label>Other</label>
        </div>
        <span>error</span>
        <br />
        <label>Select your subjects</label>
        <div className="other_fields">
          <span>
            <input type="checkbox" value="" />
            <label>Physics</label>
          </span>
          <span>
            {" "}
            <input type="checkbox" value="" />
            <label>Chemistry</label>
          </span>
          <span>
            {" "}
            <input type="checkbox" value="" />
            <label>Biology</label>
          </span>
          <span>
            {" "}
            <input type="checkbox" value="" />
            <label>Math</label>
          </span>
        </div>
        <span>error</span>
        <br />
        <label>Select enrolled date: month-day-year</label>
        <input type="date" className="select" />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default RegisterForm;

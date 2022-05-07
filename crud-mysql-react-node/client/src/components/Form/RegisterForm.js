import React, { useState } from "react";
import "./RegisterForm.css";
import useForm from "../../hooks/useForm";
import inputs from "../../utilities/inputFields";
import FormInput from "./FormInput";

const RegisterForm = () => {
  const { handleSubmit, handleOnchange, handleCheckbox, inputValues } =
    useForm();
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
          <FormInput
            key={i.id}
            {...i}
            value={inputValues[i.name]}
            onChange={handleOnchange}
          />
          // console.log(i.name)
        ))}
        <label>Select your location</label>
        <select
          onChange={handleOnchange}
          name="address"
          value={inputValues.address}
          className="form-select select other_fields"
          id="inputGroupSelect01"
        >
          <option>--Select Location--</option>
          <option>Dhaka</option>
          <option>Chittagong</option>
          <option>Rajshahi</option>
          <option>Jessore</option>
          <option>Khulna</option>
          <option>Rangpur</option>
        </select>
        <span>error</span>
        <br />
        <label>Select your gender</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleOnchange}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleOnchange}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={handleOnchange}
          />
          <label>Other</label>
        </div>
        <span>error</span>
        <br />
        <label>Select your subjects</label>
        <div className="other_fields">
          <span>
            <input type="checkbox" name="physics" onChange={handleCheckbox} />
            <label>Physics</label>
          </span>
          <span>
            {" "}
            <input type="checkbox" name="chemistry" onChange={handleCheckbox} />
            <label>Chemistry</label>
          </span>
          <span>
            {" "}
            <input type="checkbox" name="biology" onChange={handleCheckbox} />
            <label>Biology</label>
          </span>
          <span>
            {" "}
            <input type="checkbox" name="math" onChange={handleCheckbox} />
            <label>Math</label>
          </span>
        </div>
        <span>error</span>
        <br />
        <label>Select enrolled date: month-day-year</label>
        <input
          type="date"
          className="select"
          name="addedDate"
          value={inputValues.addedDate}
          onChange={handleOnchange}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default RegisterForm;

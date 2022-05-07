import React from "react";
import "./FormInput.css";
import useForm from "../../hooks/useForm";

const FormInput = (props) => {
  // console.log("FormInput: ", props);
  const { label, onChange, ...otherProps } = props;
  // console.log(otherProps);
  const { handleOnchange } = useForm();
  return (
    <>
      <div className="input_field_container">
        <label>{label}</label>
        <input
          {...otherProps}
          onChange={handleOnchange}
          className="input_field"
        />
        <span>error</span>
      </div>
    </>
  );
};

export default FormInput;

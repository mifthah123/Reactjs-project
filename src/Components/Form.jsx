import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [tel, setTel] = useState();

  const display = (e) => {
    e.preventDefault();
    let data={name,email,password,tel}
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={display}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="tel"
          placeholder="mob"
          onChange={(e) => {
            setTel(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;

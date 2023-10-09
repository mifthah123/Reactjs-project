import React, { useRef } from "react";

const FormWithRef = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const tel = useRef();

  const display = (e) => {
    e.preventDefault();
    const a = name.current.value;
    const b = email.current.value;
    const c = password.current.value;
    const d = tel.current.value;

    const data = { a, b, c, d };
    console.log(data);
  };
  return (
    <div>
      <form action="" onSubmit={display}>
        <input type="text" placeholder="name" ref={name} />
        <input type="text" placeholder="email" ref={email} />
        <input type="text" placeholder="password" ref={password} />
        <input type="text" placeholder="number" ref={tel} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormWithRef;

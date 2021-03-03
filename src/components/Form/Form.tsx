import { useForm } from "react-hook-form";

import "./Form.css";

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const exterior = watch("estadoCivil");

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>

        <div className="textbox">
          <input
            name="nome"
            ref={register({ required: true })}
            placeholder="nome"
          />
          {errors.nome && <p>Digite seu nome</p>}
        </div>

        <div className="textbox">
          <input name="cidade" ref={register} placeholder="cidade" />
          {errors.nome && <p>Digite seu nome</p>}
        </div>

        <div className="textbox">
          <input
            name="email"
            type="email"
            ref={register({ required: true })}
            placeholder="e-mail"
          />
          {errors.nome && <p>Digite seu nome</p>}
        </div>

        <div className="textbox">
          <input
            name="idade"
            type="number"
            ref={register({ min: 18, max: 99, required: true })}
            placeholder="idade"
          />
          {errors.nome && <p>Digite seu nome</p>}
        </div>

        <div>
          <input
            type="checkbox"
            ref={register({ required: true })}
            name="estadoCivil"
            value="masculino"
          />{" "}
          Estado Civil
        </div>
        {exterior && (
          <div className="textbox">
            <input
              type="text"
              name="conjugue"
              ref={register({ required: true })}
              placeholder="Cônjuge"
            />
          </div>
        )}
        <br />
        <button>enviar</button>
      </form>
    </div>
  );
};

export default Form;

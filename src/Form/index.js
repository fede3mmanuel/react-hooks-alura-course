import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";
// validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(2);

  //step = 0 --> <DatosUsuario />
  //step = 1 --> <DatosPersonales />
  //step = 2 --> <DatosEntrega />
  //step = 3 --> <Complete />

  const updateStep = (step) => {
    console.log("actualizar paso", step);
    setStep(step);
  };

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />,
  };

  const onSubmit = () => {}

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value;
    const valid = validator(value);
  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onchange : handleChange,
          helperText: "Ingrese correo valido",
          validator: validarEmail
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onchange : handleChange,
          helperText: "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20.",
          validator: validarPassword,
        }
      ],
      buttonText: 'Siguente',
      onSubmit
    },
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/* {steps[step]} */}
        <Step data={ stepsFlow[step] } step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;

import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "../style/HorizontalLinearStepper.css";

const steps = ["step1", "step2", "step3", "step4", "step5", "step6"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [clickedTimes, setClickedTimes] = React.useState(
    JSON.parse(localStorage.getItem("clickedTimes")) || []
  );

  useEffect(() => {
    localStorage.setItem("clickedTimes", JSON.stringify(clickedTimes));
  }, [clickedTimes]);

  const setStep = (step) => {
    setActiveStep(step);
    const currentTime = Date.now();
    const updatedTimes = [...clickedTimes];
    updatedTimes[step] = currentTime;
    setClickedTimes(updatedTimes);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepTime = clickedTimes[index]
            ? new Date(clickedTimes[index]).toLocaleTimeString()
            : "";
          return (
            <Step className="global-step" key={label}>
              <StepLabel onClick={() => setStep(index)} >
                <span className="step-text">{label}</span>
                <span className="step-time">{stepTime}</span>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

import React, { useReducer } from "react";
import { formReducer, initialState } from "./formReducer";

function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { step, values, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const canGoNext =
    (step === 1 && values.name && values.email) ||
    (step === 2 && values.username && values.password);

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Step {step} / 3</h2>

      {/* Step 1 */}
      {step === 1 && (
        <>
          <input
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          <br /><br />
          <input
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
        </>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <>
          <input
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          <br /><br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
        </>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <>
          <h3>Review Details</h3>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Username: {values.username}</p>
          <p>Password: {values.password}</p>
        </>
      )}

      <br />

      {step > 1 && (
        <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
          Back
        </button>
      )}

      {step < 3 && (
        <button
          disabled={!canGoNext}
          onClick={() => dispatch({ type: "NEXT_STEP" })}
        >
          Next
        </button>
      )}

      {step === 3 && (
        <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
          Submit
        </button>
      )}

      {isSubmitted && (
        <>
          <h3>✅ Form Submitted Successfully</h3>
          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Reset
          </button>
        </>
      )}
    </div>
  );
}

export default MultiStepForm;

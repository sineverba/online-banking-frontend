import React from "react";
import { Form } from "react-bootstrap";
import { AlertField } from "./AlertField";

export const FormComponent = (props) => {
  /**
   * Mappa sui vari campi che sono eventualmente presenti come obbligatori.
   * Se il campo è vuoto, popola a true la props hasError presente
   * all'interno dello stesso FormComponent più in basso
   *
   * props.missingRequiredFields è un array
   * @returns
   */

  const getMissingFields = () => {
    // If exists pick the keys
    if (props.currentItem) {
      const keys = Object.keys(props.currentItem);
      /**
       * if keys are not into currentItem OR they are empty...
       */
      return (
        !keys.includes(props.field.name)
        || props.currentItem[props.field.name] === ""
      );
    }
    return true;
  };

  const getDefaultValue = () => (props?.currentItem[props.field.name]
    ? props.currentItem[props.field.name]
    : "");

  const compiledForm = () => (
    <Form.Group controlId={props.field.name}>
      <Form.Label>
        <AlertField
          label={
            props?.field?.label
              ? props.field.label
              : props.field.name
          }
          required={props.field.required}
          hasError={getMissingFields()}
        />
      </Form.Label>
      {props.field.type === "text" && (
        <Form.Control
          type="text"
          defaultValue={getDefaultValue()}
          onChange={props.onChange}
          disabled={props.disabled}
        />
      )}
      {props.field.type === "password" && (
        <Form.Control
          type="password"
          defaultValue={getDefaultValue()}
          onChange={props.onChange}
          disabled={props.disabled}
        />
      )}
    </Form.Group>
  );

  const computedForm = () => {
    if (props.field.toHide && props.field.toHide === true) {
      return null;
    }
    return compiledForm();
  };

  return computedForm();
};

export default FormComponent;

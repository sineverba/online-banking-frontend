import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FormComponent } from "../../components/FormComponent";
import hasFormErrors from "../../utils/methods/hasFormErrors";
import getRequired from "../../utils/methods/getRequired";
import { Loading } from "../../components/Loading";
import {
  usePostLoginMutation,
  usePostPaymentMutation
} from "../../features/apiSlice";
import {
  ENTITY_PAYMENT,
  LOGIN_SHARED_KEY
} from "../../utils/constants/constant";

export function GenericForm(props) {
  const { entity } = props;

  /**
   * Local state to save the form
   */
  const [currentItem, setCurrentItem] = useState(null);
  const [disabledForm, setDisabledForm] = useState(true);

  const [postLogin, { isLoading: isUpdatingLogin }] = usePostLoginMutation({
    fixedCacheKey: LOGIN_SHARED_KEY
  });
  const [postPayment, { isLoading: isUpdatingTransaction }] =
    usePostPaymentMutation();

  /**
   * Why ID's are important? Because of https://stackoverflow.com/questions/49841086/reactjs-what-is-the-best-way-to-give-keys-in-array-element
   */
  const getFields = () => {
    if (entity === ENTITY_PAYMENT) {
      return [
        {
          id: 1,
          name: "amount",
          type: "text",
          required: true
        },
        {
          id: 2,
          name: "purpose",
          type: "text",
          required: true
        },
      ];
    }
    return [
      {
        id: 1,
        name: "username",
        type: "text",
        required: true
      },
      {
        id: 2,
        name: "password",
        type: "password",
        required: true
      },
    ];
  };

  const getButtonLabel = () => {
    if (entity === ENTITY_PAYMENT) {
      return "Pay";
    }
    return "Login";
  };

  const handleChange = (e) => {
    // Destrutturo l'oggetto in arrivo
    const { id } = e.target;
    let { value } = e.target;
    if (id === "amount") {
      value = -value;
    }
    // Preparo un oggetto temporaneo
    const tempItem = {
      ...currentItem,
      [id]: value
    };
    // Lo salvo
    setCurrentItem(tempItem);

    // Prendo solo i campi obbligatori
    const required = getRequired(getFields());
    /**
     * Passo alla funzione l'oggetto temporaneo e i campi obbligatori
     */
    if (!hasFormErrors(tempItem, required)) {
      setDisabledForm(false);
    }
  };
  /**
   * Check if loading or not.
   * We check against current entity and ONE OF loading OR fetching
   *
   */
  const checkIsLoading = () =>
    isUpdatingLogin || (entity === ENTITY_PAYMENT && isUpdatingTransaction);

  const handleClick = async () => {
    if (entity === ENTITY_PAYMENT) {
      await postPayment(currentItem);
    } else {
      await postLogin(currentItem);
    }
  };

  return (
    <Form>
      <Row>
        {getFields().map((item) => (
          <Col key={item.id} lg={12}>
            <FormComponent
              field={item}
              onChange={handleChange}
              currentItem={currentItem}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          {checkIsLoading() ? (
            <Loading />
          ) : (
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                onClick={handleClick}
                disabled={disabledForm}
              >
                {getButtonLabel()}
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Form>
  );
}

export default GenericForm;

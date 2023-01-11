import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FormComponent } from "../../components/FormComponent";
import hasFormErrors from "../../utils/methods/hasFormErrors";
import getRequired from "../../utils/methods/getRequired";
import { Loading } from "../../components/Loading";
import { usePostLoginMutation } from "../../features/apiSlice";
import { LOGIN_SHARED_KEY } from "../../utils/constants/constant";

export function LoginPage() {
  /**
   * Local state to save the form
   */
  const [currentItem, setCurrentItem] = useState(null);
  const [disabledForm, setDisabledForm] = useState(true);

  const [postLogin, { isLoading: isUpdating }] = usePostLoginMutation({
    fixedCacheKey: LOGIN_SHARED_KEY
  });

  /**
   * Why ID's are important? Because of https://stackoverflow.com/questions/49841086/reactjs-what-is-the-best-way-to-give-keys-in-array-element
   */
  const fields = [
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

  const handleChange = (e) => {
    // Destrutturo l'oggetto in arrivo
    const { id, value } = e.target;
    // Preparo un oggetto temporaneo
    const tempItem = {
      ...currentItem,
      [id]: value
    };
    // Lo salvo
    setCurrentItem(tempItem);

    // Prendo solo i campi obbligatori
    const required = getRequired(fields);
    /**
     * Passo alla funzione l'oggetto temporaneo e i campi obbligatori
     */
    if (!hasFormErrors(tempItem, required)) {
      setDisabledForm(false);
    }
  };

  const handleClick = async () => {
    await postLogin(currentItem);
  };

  return (
    <Form>
      <Container className="container-login">
        <Row>
          {fields.map((item) => (
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
            {isUpdating ? (
              <Loading />
            ) : (
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleClick}
                  disabled={disabledForm}
                >
                  Login
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default LoginPage;

import React, {Component} from 'react';
import { Flex, Col } from 'theme/grid';
import { A } from 'theme/types';
import { color1 } from 'theme/variables';
import AutoResizeTextarea from 'components/AutoResizeTextarea/AutoResizeTextarea';
import { Field, reduxForm } from 'redux-form';
import c from 'classnames';
import { Form, Row } from './styles';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  }

  return errors;
}

function Input({ input, meta, placeholder }) {
  return (
    <input
      {...input}
      className={c({ 'invalid': meta.invalid && meta.touched })}
      placeholder={`${placeholder + ((meta.touched && meta.error && ` (${meta.error})`) || '')}`}
    />
  );
}

class _ContactForm extends Component {
  render() {
    const { sending, handleSubmit, submit, valid, className } = this.props;
    return (
      <Form className={className} onSubmit={handleSubmit}>
        <Row marginBottom="30px">
          <Col>
            <Field
              component={Input}
              type="text"
              name="name"
              required
              placeholder="Your name"/>
          </Col>
          <Col grow="2">
            <Field
              component={Input}
              type="email"
              name="email"
              required
              placeholder="Your email"/>
          </Col>
        </Row>
        <Col marginBottom="30px">
          <Field
            component={AutoResizeTextarea}
            name="message"
            placeholder="Your message"
          />
        </Col>
        <Flex justifyContent="center">
          <A
            color={color1}
            onClick={valid && !sending && submit}
            className="submitBtn">
            { sending ? 'Sending...' : 'Send'}
          </A>
        </Flex>
      </Form>
    );
  }
}

// A work around (https://github.com/erikras/redux-form/issues/1010#issuecomment-221515925)
export default {
  ContactForm: reduxForm({
    form: 'contact',
    validate
  })(_ContactForm)

}
import React, { FC } from 'react';
import Label from './components/Label';
import { getIn, FieldInputProps, FormikProps } from 'formik';

interface TextInputProps {
  className?: string;
  innerRef?: (instance: HTMLInputElement | null) => void;
  hint?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  field: FieldInputProps<any>;
  form: FormikProps<any>;
}

const TextInput: FC<TextInputProps> = ({
  className = '',
  innerRef,
  hint,
  type = 'text',
  label,
  placeholder = '',
  required = false,
  field,
  form: { errors, touched },
}) => {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? `invalid` : ``;

  return (
    <div className={`form-group ${className}`}>
      <Label label={label} hint={hint}></Label>
      <input
        className={`form-input ${status}`}
        {...field}
        placeholder={placeholder}
        type={type}
        required={required}
        ref={innerRef}
      />

      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  );
};

export default TextInput;

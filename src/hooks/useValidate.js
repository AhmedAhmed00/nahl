import React from 'react'
import { checkError } from '../utils/helpers';

export default function useValidate(errors) {
        const validate = (field) => checkError(errors, field);
    
  return validate
}

import React from 'react';
import { Formfeedbackstyle, InputBoxstyle } from './Inputstyle';

function Input({children, error=false, errormessage='', ...rest}) {
    // console.log(error);
    return (
        <>
            <InputBoxstyle {...rest}>
                {children}
            </InputBoxstyle>

            <Formfeedbackstyle error={error}>   
                {errormessage}
            </Formfeedbackstyle>
        </>
    );
}

export default Input;
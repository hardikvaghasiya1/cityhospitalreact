import { Input,FormFeedback } from 'reactstrap';
import styled from 'styled-components';




export const InputBoxstyle = styled(Input)`
    height: 44px;
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    padding: 10px !important;
`;
export const Formfeedbackstyle = styled(FormFeedback)`
    color:red;
    display :${props => props.error?"block" : "none"};
`;
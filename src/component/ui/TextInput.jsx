import React from "react";
import styled from "styled-components";


const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props)=>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size:16px;
    line-height: 20px;
`;
function TextInput(props) {
    const {height, value, onChange}=props; //value:입력된 값 표시 onChane:변경된 값을 상위 컴포넌트로 전달
    return <StyledTextarea height={height} value={value} onChane={onChange} />;
}
export default TextInput;
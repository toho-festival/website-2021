import styled from 'styled-components';
interface InputTitle  {
    inputWidth:string
    inputBorderbottom:string
}


export const Underline = styled.h1 `
&::after {
    content: "";
    display: block;
    margin-top: -10px;
    margin:left;
    width:  ${(props:InputTitle) => props.inputWidth};
    /* default:400px  */
    border-bottom: ${(props:InputTitle) => props.inputBorderbottom};
    /* default:10px solid #85d1d0 */
}`


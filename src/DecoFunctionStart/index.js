import styled from "styled-components";

const decoFunctionConst = "const ";
const decoFunctionIntroduction = "Introduction =";
const decoFunctionBrackets = " () ";
const decoFunctionArrow = "=> ";
const decoFunctionLeftBrace = " {";
const decoFunctionReturn = "return (";

const Blue = styled.span`
  color: #3fb1f5;
`;

const Purple = styled.span`
  color: #d373e3;
`;

const Yellow = styled.span`
  color: #ecbe70;
`;

const DecoFuncMiddle = styled.div`
  margin-left: 5rem;
`;
const DecoFuncStartWrapper = styled.div`
  align-self: flex-start;
  margin-top: 3%;
  margin-left: 20%;
  font-size: 150%;
  font-family: "M PLUS Rounded 1c", sans-serif;
  @media only screen and (max-width: 1150px) {
    margin-left: 1%;
  }
`;

const DecoFunctionStart = () => {
  return (
    <>
      <DecoFuncStartWrapper>
        <Purple>{decoFunctionConst}</Purple>
        <Blue>{decoFunctionIntroduction}</Blue>
        <Yellow>{decoFunctionBrackets}</Yellow>
        <Purple>{decoFunctionArrow}</Purple>
        <Yellow>{decoFunctionLeftBrace}</Yellow>
        <DecoFuncMiddle>
          <Purple>{decoFunctionReturn}</Purple>
        </DecoFuncMiddle>
      </DecoFuncStartWrapper>
    </>
  );
};

export default DecoFunctionStart;

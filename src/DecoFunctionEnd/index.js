import styled, { css } from "styled-components";

const decoFunctionRightBrace = "}";
const decoFunctionsemiColon = ";";
const decoFunctionRightBracket = ")";

const Yellow = styled.span`
  color: #ecbe70;
`;

const Grey = styled.span`
  color: #a9b2c0;
`;

const Purple = styled.span`
  color: #d373e3;
`;

const DecoFuncRowBreak = styled.div`
  margin-left: 5rem;
`;

const DecoFuncEndWrapper = styled.div`
  align-self: flex-start;
  margin-top: 5%;
  margin-left: 20%;
  font-size: 150%;
  font-family: "M PLUS Rounded 1c", sans-serif;
  @media only screen and (max-width: 1150px) {
    margin-left: 1%;
  }
`;

const DecoFunctionEnd = () => {
  return (
    <>
      <DecoFuncEndWrapper>
        <DecoFuncRowBreak>
          <Purple>{decoFunctionRightBracket}</Purple>
          <Grey>
            {decoFunctionsemiColon}
            <br></br>
          </Grey>
        </DecoFuncRowBreak>
        <Yellow>{decoFunctionRightBrace}</Yellow>
        <Grey>{decoFunctionsemiColon}</Grey>
      </DecoFuncEndWrapper>
    </>
  );
};

export default DecoFunctionEnd;

import { PrimaryButton } from "../atom/button/PrimaryButton";
import { Input } from "../atom/input/input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索してね" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

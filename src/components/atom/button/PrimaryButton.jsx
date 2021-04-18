import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  //childrenにより、表示内容を変える
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//styled(BaseButton)とすることで、BaseButtonのスタイルを持ったまま加えることができる
//background-colorのみ変更した
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;

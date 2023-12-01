import { MouseEvent, useContext, useState } from "react";

import styled from "styled-components";
// import CheckIcon from "@/public/assets/check.svg";
import { FolderContext } from "@/context/FolderContext";

import ModalButton from "../button/ModalButton";
import ModalTitle from "./ModalTitle";

export default function AddLink({ link }: AddLinkProps) {
  const { folderNameList } = useContext(FolderContext);
  const [selected, setSelected] = useState("");

  const handleOption = (e: MouseEvent<HTMLDivElement>) => {
    setSelected(e.currentTarget.id);
  };

  return (
    <Container>
      <Description>
        <ModalTitle label="폴더 추가" />
        <Info>{link}</Info>
      </Description>
      <Contents>
        {folderNameList.map((folder) => (
          <Options
            key={folder.name}
            id={folder.name}
            onClick={handleOption}
            $isSelected={selected === folder.name}
          >
            <Option>
              <Title>{folder.name}</Title>
              <SubTitle>{`${folder.link.count}개 링크`}</SubTitle>
            </Option>
            {/* <IconCheck /> */}
          </Options>
        ))}
      </Contents>
      <ModalButton action="change" label="추가하기" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Description = styled.div`
  width: 100%;
  text-align: center;
`;

const Info = styled.p`
  margin: 0;
  padding-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-gray);
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Title = styled.span`
  color: var(--color-gray-30);
`;

// const IconCheck = styled(CheckIcon)`
//   path {
//     stroke: white; /* path 요소에 fill 속성 적용 */
//   }
// `;

const Options = styled.div<{ $isSelected: boolean }>`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: var(--color-primary-varient);
  }

  /* 폴더 선택했을 때 스타일 */
  background: ${({ $isSelected }) => ($isSelected ? "var(--color-primary-varient)" : "")};
  ${Title} {
    color: ${({ $isSelected }) => ($isSelected ? "var(--color-primary)" : "var(--color-gray-30)")};
  }
`;

// ${IconCheck} {
//   path {
//     stroke: ${({ $isSelected }) => ($isSelected ? "var(--color-primary)" : "")};
//   }
// }

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SubTitle = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray);
`;

interface AddLinkProps {
  link: string;
}

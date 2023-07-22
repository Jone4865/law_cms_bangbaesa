import React, { useEffect, useState } from 'react';
import * as S from './style';

type Props = {
  data: string[];
  onChangeHandel: (nowAble: any) => void;
};

const DropDown = ({ data, onChangeHandel }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined,
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onChangeHandel(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOption(data[0]);
  }, []);

  return (
    <S.container>
      <S.btn_wrap onClick={toggleDropdown}>
        <S.btn>
          {selectedOption && <S.text>{selectedOption}</S.text>}
          {!isOpen ? (
            <S.img alt="화살표" src={'/img/icon/arrow.png'} />
          ) : (
            <S.img_rotate alt="화살표" src={'/img/icon/arrow.png'} />
          )}
        </S.btn>
      </S.btn_wrap>
      {isOpen && (
        <S.menu>
          {data.map((v, idx) => (
            <S.menu_body onClick={() => handleOptionSelect(v)} key={idx}>
              {v}
            </S.menu_body>
          ))}
        </S.menu>
      )}
    </S.container>
  );
};

export default DropDown;

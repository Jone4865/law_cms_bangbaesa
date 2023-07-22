import styled from 'styled-components';

export const container = styled.div`
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  margin-right: 10px;
  font-size: 14px;
  width: 80px;
`;

export const btn_wrap = styled.div`
  border-radius: 5px;
  border: solid 1px #dcdcdc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 11px;
`;

export const text = styled.div`
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const btn = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const menu = styled.div`
  position: absolute;
  padding: 3px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  z-index: 2;
  margin-top: -2px;
  border: solid 1px #dcdcdc;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
`;

export const menu_body = styled.div`
  width: 100%;
  margin-top: 5px;
`;

export const arrow_rotate = styled.div`
  rotate: 180deg;
  position: relative;
  width: 16.7px;
  height: 9.9px;
`;

export const img = styled.img`
  width: 15px;
  height: 10px;
`;

export const img_rotate = styled.img`
  width: 15px;
  height: 10px;
  rotate: 180deg;
`;

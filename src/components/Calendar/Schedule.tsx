import styled from '@emotion/styled';
import { useState } from 'react';
import { COLOR } from 'src/constants';
import { Button } from './Button';
import { H } from './Title';

export const Schedule = ({ onClick }: any) => {
  return (
    <>
      <Modal className="modal">
        <H>스터디 일정 등록</H>
        <form>
          <ul>
            <li>
              <label htmlFor="date" className="label-text">
                날짜
              </label>
              <input type="date" id="date" required />
            </li>

            <li>
              <p className="label-text">시간</p>
              <div className="timeWrap">
                <label htmlFor="time" className="a11y-hidden">
                  시작 시간
                </label>
                <input type="time" id="time" />
                <label htmlFor="time" className="a11y-hidden">
                  종료 시간
                </label>
                <input type="time" id="time2" />
              </div>
            </li>
            <li>
              <label htmlFor="day-content" className="label-text">
                일정 내용
              </label>
              <input
                type="text"
                id="day-content"
                placeholder="내용을 입력해 주세요"
                required
              />
            </li>
          </ul>
          <Button type="submit">일정 등록</Button>
          <button type="button" className="btn-close" onClick={onClick}>
            <img src="./images/close.svg" alt="닫기" />
          </button>
        </form>
      </Modal>
      <div className="dim" onClick={onClick}></div>
    </>
  );
};

const Modal = styled.section`
  width: 500px;
  max-width: calc(100% - 60px);
  padding: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 20;

  & + .dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .label-text {
    display: block;
    margin: 20px 0 10px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
  }
  input {
    height: 48px;
    width: 100%;
    border: 1px solid ${COLOR.gray};
    padding: 0 10px;
    &::placeholder {
      color: ${COLOR.grayText};
    }
  }
  .timeWrap {
    display: flex;
    gap: 8px;
  }
  button {
    margin-top: 24px;
  }
  .btn-close {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 40px;
  }
`;

import styled from '@emotion/styled';
import { COLOR } from 'src/constants';
import { Calendar } from '../Calendar/Calendar';
import { TodoList } from '../StudyMain/Todo';

const studyData = [
  {
    id: '202204111900',
    content: '스터디 정기회의',
    date: '2022-04-10',
    day: '일요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '1',
    content: '스터디 정기회의',
    date: '2022-04-11',
    day: '월요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '2',
    content: '스터디 정기회의',
    date: '2022-04-14',
    day: '목요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '3',
    content: '스터디 정기회의',
    date: '2022-04-18',
    day: '월요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '4',
    content: '스터디 정기회의',
    date: '2022-04-21',
    day: '목요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '5',
    content: '스터디 정기회의',
    date: '2022-04-25',
    day: '월요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '6',
    content: '스터디 정기회의',
    date: '2022-04-28',
    day: '목요일',
    start: '19:00',
    end: '20:00',
  },
];

export const MyPageContainer = () => {
  return (
    <Container>
      <CalendarWrap>
        <Calendar studyData={studyData} />
      </CalendarWrap>
      <TodoList />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;
const CalendarWrap = styled.div`
  /* 임시로 만들어 놓은 자리 */
  height: 450px;
  padding: 48px 24px 16px;
  background-color: ${COLOR.white};
  border: 1px solid ${COLOR.boxBorder};
`;

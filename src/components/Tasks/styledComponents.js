import styled from 'styled-components/macro'

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  background-color: #131213;
  width: 95%;
  padding: 0px 15px;
`
export const TaskName = styled.p`
  font-family: roboto;
  font-size: 24px;
  color: #ffffff;
`
export const TaskCategory = styled.p`
  font-family: roboto;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 12px;
  color: #131213;
  background-color: #f3aa4e;
  border-radius: 20px;
`

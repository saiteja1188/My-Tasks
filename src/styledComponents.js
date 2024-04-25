import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
`
export const TaskInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a171d;
  width: 30%;
  padding: 0px 30px;
`
export const TaskHeading = styled.h1`
  font-family: roboto;
  font-size: 36px;
  color: #f3aa4e;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`
export const LabelText = styled.label`
  font-family: roboto;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 10px;
`
export const Input = styled.input`
  padding: 8px 10px;
  outline: none;
`
export const LabelTag = styled.h1`
  font-family: roboto;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 10px;
  margin-top: 50px;
`
export const SelectTag = styled.select`
  padding: 8px 10px;
  outline: none;
`
export const AddButton = styled.button`
  border: none;
  background-color: ${props => (props.activeTag ? '#f3aa4e' : 'transparent')};
  color: #ffffff;
  padding: 8px 20px;
  border-radius: 5px;
  margin-top: 50px;
  font-family: roboto;
  font-size: 16px;
`

export const TaskDisplayContainer = styled.div`
  width: 70%;
  background-color: #131213;
  padding: 20px 50px;
`
export const TagsContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;
`
export const TagList = styled.li`
  margin-right: 10px;
`
export const TagButton = styled.button`
  border: 1px solid #f3aa4e;
  border-radius: 20px;
  color: #ffffff;
  background-color: transparent;
  padding: 8px 20px;
`

export const TaskContainer = styled.ul`
  padding-left: 0px;
`
export const NoTaskText = styled.p`
  color: #ffffff;
  font-family: roboto;
  font-size: 24px;
  text-align: center;
  margin-top: 50px;
`

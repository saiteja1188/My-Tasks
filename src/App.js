import {Component} from 'react'

import {v4} from 'uuid'

import Tasks from './components/Tasks'

import {
  MainContainer,
  TaskInputContainer,
  TaskHeading,
  InputContainer,
  LabelText,
  Input,
  LabelTag,
  SelectTag,
  AddButton,
  TaskDisplayContainer,
  TagsContainer,
  TagList,
  TagButton,
  TaskContainer,
  NoTaskText,
} from './styledComponents'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here

class App extends Component {
  state = {
    inputText: '',
    tagSelect: tagsList[0].optionId,
    taskList: [],
    activeTag: 'INITIAL',
  }

  addTaskButton = () => {
    const {inputText, tagSelect} = this.state
    const newTasks = {
      id: v4(),
      taskName: inputText,
      taskCategory: tagSelect,
      bgColor: false,
    }
    this.setState(prev => ({
      taskList: [...prev.taskList, newTasks],
      inputText: '',
      tagSelect: tagsList[0].optionId,
    }))
  }

  onChangeSelectTag = event => {
    console.log(event.target.value)
    this.setState({tagSelect: event.target.value})
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickTag = event => {
    this.setState(prev => ({
      activeTag:
        prev.activeTag === event.target.value ? 'INITIAL' : event.target.value,
    }))
  }

  render() {
    const {inputText, tagSelect, taskList, activeTag} = this.state
    const filterTaskList =
      activeTag === 'INITIAL'
        ? taskList
        : taskList.filter(each => each.taskCategory === activeTag)
    return (
      <MainContainer>
        <TaskInputContainer>
          <TaskHeading>Create a task!</TaskHeading>
          <InputContainer>
            <LabelText htmlFor="textInput">Task</LabelText>
            <Input
              type="text"
              id="textInput"
              placeholder="Enter the task here"
              value={inputText}
              onChange={this.onChangeInputText}
            />
            <LabelTag htmlFor="optionSelect">Tags</LabelTag>
            <SelectTag
              id="optionSelect"
              value={tagSelect}
              onChange={this.onChangeSelectTag}
            >
              {tagsList.map(eachTag => (
                <option value={eachTag.optionId}>{eachTag.displayText}</option>
              ))}
            </SelectTag>
          </InputContainer>
          <AddButton type="button" onClick={this.addTaskButton}>
            Add Task
          </AddButton>
        </TaskInputContainer>
        <TaskDisplayContainer>
          <LabelTag>Tags</LabelTag>
          <TagsContainer>
            {tagsList.map(eachTag => (
              <TagList key={eachTag.optionId}>
                <TagButton
                  type="button"
                  value={eachTag.optionId}
                  onClick={this.onClickTag}
                  activeTag={activeTag}
                >
                  {eachTag.displayText}
                </TagButton>
              </TagList>
            ))}
          </TagsContainer>
          <LabelTag>Tasks</LabelTag>
          <TaskContainer>
            {filterTaskList.length === 0 ? (
              <NoTaskText>No Tasks Added Yet</NoTaskText>
            ) : (
              filterTaskList.map(eachTask => (
                <Tasks key={eachTask.id} eachTaskDetails={eachTask} />
              ))
            )}
          </TaskContainer>
        </TaskDisplayContainer>
      </MainContainer>
    )
  }
}

export default App

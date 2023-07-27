import React from 'react'
import { TaskInterface } from '../types'
import Task from './Task'
import { tasksModalStyle } from '../stylesComponents'

const TaskEditor :React.FC<TaskInterface[]> = (tasks) => {
  return (
    <div css={tasksModalStyle}>
      {tasks &&  tasks.map((task: TaskInterface, index: number) => 
        <Task indexItem={index} key={task.id} {...task}/>
      )}
    </div>
  )
}

export default TaskEditor
import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      setTasks([...tasks, { title, content, status: 'working' }]);
      setTitle('');
      setContent('');
    }
  };

  const handleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = 'done';
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleCancel = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = 'working';
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className='inputWindow'>
        <div className='inputBtn'>
          <span>Title</span>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <span>Content</span>
          <input value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button className='addBtn' onClick={handleSubmit}>Add</button>
      </div>

      <div className='contentWindow'>
        <h2>Working.. 🔥</h2>
        <div className='listWindow'>
          {tasks.map((task, index) => (
            task.status === 'working' && (
              <div className='content' key={index}>
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.content}</p>
                </div>
                <div className='btn'>
                  <button className='deleteBtn' onClick={() => handleDelete(index)}>삭제하기</button>
                  <button className='doneBtn' onClick={() => handleDone(index)}>완료</button>
                </div>
              </div>
            )
          ))}
        </div>
        <h2>Done..! 😎</h2>
        <div className='listWindow'>
          {tasks.map((task, index) => (
            task.status === 'done' && (
              <div className='content' key={index}>
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.content}</p>
                </div>
                <div className='btn'>
                  <button className='deleteBtn' onClick={() => handleDelete(index)}>삭제하기</button>
                  <button className='doneBtn' onClick={() => handleCancel(index)}>취소</button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;

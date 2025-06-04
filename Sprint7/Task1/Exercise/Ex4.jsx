// import react,{useState} from 'react';



// function Ex4(){  
//     const [checked,setchecked]=useState('InComplete');
//     function CheckUpdate(){
//         if (checked !== 'InComplete') {
//           setchecked('InComplete');
//         } 
//         else {
//           setchecked('Completed');
//         }
//       } 
//     function Add(){
//         let taskName=document.querySelector('.taskName').value;
//         let date=document.querySelector('.date').value;
//         let desc=document.querySelector('.desc').value;
//         console.log(taskName,date,desc);
//         document.querySelector('.tableData').innerHTML+=`<tr><td><input type="checkbox" onClick=${CheckUpdate} className='checkBox' />${checked}</td><td>${taskName}</td><td>${date}</td><td>${desc}</td></tr>`
//     }
//     return(
//         <>
//         <div className='Ex4'> 
//         <label>Task Name:
//         <input type='name' className="taskName"/>
//         </label><br/><br/>
//         <label>Expiry Date:
//             <input type='date' className="date"/>
//         </label><br/><br/>
//         <label>Description
//             <textarea className="desc"></textarea>
//         </label><br/>
//         <button onClick={Add}>Add</button>
//         </div>
//         <div className='Ex4'>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Task Status</th>
//                         <th>Task</th>
//                         <th>Expiry Date</th>
//                         <th>Description</th>
//                     </tr>     
//                 </thead>
//                 <tbody className="tableData">
//                     {/* <tr>
//                         <td><input type="checkbox" onClick={CheckUpdate} className='checkBox' />{checked}</td>
//                         <td>hlo</td>
//                         <td>3-22-2025</td>
//                         <td>need to complete as soon as possible</td>
//                     </tr> */}
//                 </tbody>
//             </table>
//         </div>
//         </>
//     )
// }


import React, { useState } from 'react';

function Ex4() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');

  function handleAdd() {
    const newTask = {
      name: taskName,
      date,
      desc,
      status: 'InComplete',
    };
    setTasks([...tasks, newTask]);

    // Clear inputs
    setTaskName('');
    setDate('');
    setDesc('');
  }

  function toggleStatus(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index
        ? {
            ...task,
            status: task.status === 'InComplete' ? 'Completed' : 'InComplete',
          }
        : task
    );
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className='Ex4'>
        <label>
          Task Name:
          <input
            type='text'
            className='taskName'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Expiry Date:
          <input
            type='date'
            className='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Description
          <textarea
            className='desc'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </label>
        <br />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className='Ex4'>
        <table>
          <thead>
            <tr>
              <th>Task Status</th>
              <th>Task</th>
              <th>Expiry Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className='tableData'>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>
                  <input
                    type='checkbox'
                    onClick={() => toggleStatus(index)}
                    checked={task.status === 'Completed'}
                    readOnly
                  />
                  {task.status}
                </td>
                <td>{task.name}</td>
                <td>{task.date}</td>
                <td>{task.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}


export default Ex4
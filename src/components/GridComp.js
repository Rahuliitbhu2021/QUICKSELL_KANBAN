import React from 'react'
import avatar from '../data/avatar.jpg'
import avatar2 from '../data/avatar2.jpg'
import avatar3 from '../data/avatar3.png'
import avatar4 from '../data/avatar4.jpg'
import avatar5 from '../data/avatar5.jpg'
import add from '../data/add.svg'
import dot from '../data/3 dot menu.svg'
import Card from './Card'
import todo from '../data/To-do.svg'
import inProgress from '../data/in-progress.svg'
import backlog from '../data/Backlog.svg'
import cancelled from '../data/Cancelled.svg'
import done from '../data/Done.svg'
import noPriority from '../data/No-priority.svg'
import lowPriority from '../data/Img - Low Priority.svg'
import medPriority from '../data/Img - Medium Priority.svg'
import highPriority from '../data/Img - High Priority.svg'
import urgPriority from '../data/SVG - Urgent Priority grey.svg'


const GridComp = (props) => {
    console.log(props);
    const tickets=props.tickets;
    const user=props.user;
    const grouping = props.grouping;
    const ordering = props.ordering;
    // console.log(tickets);
    // console.log(user);

  let heading,imgSrc;
  if(grouping === 'User')
  {heading = user.name;
    if(user.id==='usr-1'){imgSrc=avatar;}
    else if(user.id==='usr-2'){imgSrc=avatar2;}
    else if(user.id==='usr-3'){imgSrc=avatar3;}
    else if(user.id==='usr-4'){imgSrc=avatar4;}
    else if(user.id==='usr-5'){imgSrc=avatar5;}
  }
  else if(grouping === 'Status'){
    heading = tickets[0].status;
    if(heading === 'Todo'){imgSrc=todo;}
    else if(heading==='In progress'){imgSrc=inProgress;}
    else if(heading==='Backlog'){imgSrc=backlog;}
    else if(heading==='Cancelled'){imgSrc=cancelled;}
    else if(heading==='Done'){imgSrc=done;}
  }
  else if(grouping === 'Priority'){
    heading = tickets[0].priority;
    if(heading===0){heading='No Priority';imgSrc=noPriority;}
    else if(heading===1){heading='Low Priority'; imgSrc=lowPriority;}
    else if(heading===2){heading='Medium Priority';imgSrc=medPriority;}
    else if(heading===3){heading='High Priority';imgSrc=highPriority;}
    else if(heading===4){heading='Urgent Priority';imgSrc=urgPriority;}
  }


  if(ordering === 'Priority' ){
    tickets.sort((a,b)=>{
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }
      
      return a.title.localeCompare(b.title);
    })
  }
  else if(ordering === 'Title'){
    tickets
    .sort((a, b) => a.title.localeCompare(b.title)) 
    .map(task => task.title);
  }


  

  return (
  <div  className='container'>
    <div className='header_2'>
      <div className='user-info'>
      <img src={imgSrc} className='avatar' />
      <div>
        {heading}
      </div>
      <div className='card-count'>{tickets.length}</div>
      </div>
      <div className='actions'>
        <img src={add} className='icon'/>
        <img src={dot} className='icon'/>
      </div>
    </div>

    <div className='card-section'>
      {
        tickets.map(ticket=><Card ticket={ticket} grouping={grouping}/>)
      }
    </div>
   
    </div>
  )
}

export default GridComp;
import React from 'react'
import avatar from '../data/avatar.jpg'
import avatar2 from '../data/avatar2.jpg'
import avatar3 from '../data/avatar3.png'
import avatar4 from '../data/avatar4.jpg'
import avatar5 from '../data/avatar5.jpg'
import todo from '../data/To-do.svg'
import inProgress from '../data/in-progress.svg'
import backlog from '../data/Backlog.svg'
import cancelled from '../data/Cancelled.svg'
import done from '../data/Done.svg'
import noPriority from '../data/No-priority.svg'
import lowPriority from '../data/Img - Low Priority.svg'
import medPriority from '../data/Img - Medium Priority.svg'
import highPriority from '../data/Img - High Priority.svg'
import urgPriority from '../data/SVG - Urgent Priority colour.svg'
const Card = (props) => {
    const ticket=props.ticket;
    const grouping = props.grouping;
    console.log(ticket);
    let user;
    if(ticket.userId==='usr-1'){user=avatar;}
    else if(ticket.userId==='usr-2'){user=avatar2;}
    else if(ticket.userId==='usr-3'){user=avatar3;}
    else if(ticket.userId==='usr-4'){user=avatar4;}
    else if(ticket.userId==='usr-5'){user=avatar5;}
    let status;
    if(ticket.status === 'Todo'){status=todo;}
    else if(ticket.status==='In progress'){status=inProgress;}
    else if(ticket.status==='Backlog'){status=backlog;}
    else if(ticket.status==='Cancelled'){status=cancelled;}
    else if(ticket.status==='Done'){status=done;}
    let priority
    if(ticket.priority===0){priority=noPriority;}
    else if(ticket.priority===1){priority=lowPriority;}
    else if(ticket.priority===2){priority=medPriority;}
    else if(ticket.priority===3){priority=highPriority;}
    else if(ticket.priority===4){priority=urgPriority;}
    
  return (
        <div className='card'>
            <div className='header-row'>
                <div class='name-label'>{ticket.id}</div>
                {grouping !=='User' ?<img src={user} className='avatar-image' alt='user' /> : null }
            </div>
            <div className='info-row'>
                {grouping !=='Status'?<img src={status} className='status-icon' alt='status'/>:null}
                <div className='action-label'>{ticket.title}</div>
            </div>
            <div className='tag-row'>
                {grouping !=='Priority' ? <img src={priority} className='status-badge' alt='priority' /> :null}
                {ticket.tag.length>0 ?  
                <div className='tag-item'> 
                <div className='circle-icon'></div>
                <div className='tag-label'>{ticket.tag[0]}</div>
                </div>
                : null}
            </div>
        </div>
  )
}

export default Card
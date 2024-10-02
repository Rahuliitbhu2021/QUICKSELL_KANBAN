import React, { useEffect, useState } from "react";
import GridComp from "./GridComp";

const Body = ({ grouping, ordering }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [userGroupedTickets, setUserGroupedTickets] = useState([]);
  const [statusGroupedTickets, setStatusGroupedTickets] = useState([]);
  const [priorityGroupedTickets, setPriorityGroupedTickets] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
    const json = await response.json();
    setTickets(json?.tickets);
    setUsers(json?.users);
  };

  useEffect(() => {
    if (tickets.length > 0) {
      const userGrouped = groupTicketsByUser(tickets);
      setUserGroupedTickets(userGrouped);

      const statusGrouped = groupTicketsByStatus(tickets);
      setStatusGroupedTickets(statusGrouped);
      console.log(statusGroupedTickets);
      const priorityGrouped = groupTicketsByPriority(tickets);
      setPriorityGroupedTickets(priorityGrouped);
      console.log(priorityGroupedTickets);
    }
  }, [tickets]);

  const groupTicketsByUser = (tickets) => {
    const groupedTickets = {};

    for (let i = 0; i < tickets.length; i++) {
      const ticket = tickets[i];
      if (!groupedTickets[ticket.userId]) {
        groupedTickets[ticket.userId] = [];
      }
      groupedTickets[ticket.userId].push(ticket);
    }

    return groupedTickets;
  };

  const groupTicketsByStatus = (tickets) => {
    const groupedTickets = {};

    for (let i = 0; i < tickets.length; i++) {
      const ticket = tickets[i];
      if (!groupedTickets[ticket.status]) {
        groupedTickets[ticket.status] = [];
      }
      groupedTickets[ticket.status].push(ticket);
    }

    return groupedTickets;
  };

  const groupTicketsByPriority = (tickets) => {
    const groupedTickets = {};

    for (let i = 0; i < tickets.length; i++) {
      const ticket = tickets[i];
      if (!groupedTickets[ticket.priority]) {
        groupedTickets[ticket.priority] = [];
      }
      groupedTickets[ticket.priority].push(ticket);
    }

    return groupedTickets;
  };


  const usersCheck = (Id) => {
    for(let i=0;i<users.length;i++){
      if(users[i].id === Id){
        return users[i];
      }
    }
    return{};
  }
  if(grouping === 'Priority'){
    return (
      <div className="body-container">
        {Object.entries(priorityGroupedTickets).map(([userId, userTickets]) => (
          <div key={userId}>
            <GridComp user ={usersCheck(userId)} tickets={userTickets} grouping={grouping} ordering={ordering}  />
          </div>
        ))}
      </div>
    );
  }
  else if(grouping === 'Status'){
    return (
      <div className="body-container">
        {Object.entries(statusGroupedTickets).map(([userId, userTickets]) => (
          <div key={userId}>
            <GridComp user ={usersCheck(userId)} tickets={userTickets} grouping={grouping} ordering={ordering}  />
          </div>
        ))}
      </div>
    );
  }
  else if(grouping === 'User'){
    return (
      <div className="body-container">
        {Object.entries(userGroupedTickets).map(([userId, userTickets]) => (
          <div key={userId}>
            <GridComp user ={usersCheck(userId)} tickets={userTickets} grouping={grouping} ordering={ordering} />
          </div>
        ))}
      </div>
    );
  }
};

export default Body;
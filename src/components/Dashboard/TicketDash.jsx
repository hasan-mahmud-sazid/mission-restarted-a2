import React from "react";
import SideBars from "../Sidebars/SideBars";
import TicketCard from "../TicketsCards/TicketsCards";

const TicketDash = ({
  allTickets,
  onSelectTicket,
  taskStatusList,
  onComplete,
}) => {
  return (
    <div className="max-w-360 mx-auto p-10 flex gap-10">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Customer Tickets
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {allTickets &&
            allTickets.map((ticket) => (
              <div key={ticket.id} onClick={() => onSelectTicket(ticket)}>
                <TicketCard ticket={ticket} />
              </div>
            ))}
        </div>
      </div>
      <div className="w-80">
        <SideBars taskStatusList={taskStatusList} onComplete={onComplete} />
      </div>
    </div>
  );
};

export default TicketDash;

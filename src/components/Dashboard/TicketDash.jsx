import React from "react";
import SideBars from "../Sidebars/SideBars";
import TicketCard from "../TicketsCards/TicketsCards";

const TicketDash = ({
  allTickets,
  onSelectTicket,
  taskStatusList,
  resolvedTasks,
  onComplete,
}) => {
  return (
    <div className="max-w-360 mx-auto p-5 md:p-10 flex flex-col-reverse lg:flex-row gap-10">
      <div className="flex-1 w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          **Customer Tickets**
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allTickets &&
            allTickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => onSelectTicket(ticket)}
                className="cursor-pointer active:scale-95 transition-transform"
              >
                <TicketCard ticket={ticket} />
              </div>
            ))}
        </div>
      </div>

      <div className="w-full lg:w-80">
        <SideBars
          taskStatusList={taskStatusList}
          resolvedTasks={resolvedTasks}
          onComplete={onComplete}
        />
      </div>
    </div>
  );
};

export default TicketDash;

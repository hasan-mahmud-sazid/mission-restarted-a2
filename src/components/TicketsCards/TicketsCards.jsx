import React from "react";

const TicketCard = ({ ticket }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  const priorityColor = {
    "HIGH PRIORITY": "text-red-500",
    "MEDIUM PRIORITY": "text-yellow-600",
    "LOW PRIORITY": "text-green-500",
  };

  const statusBg =
    status === "Open"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3 transition-all hover:shadow-md cursor-pointer group">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-indigo-600">
          {title}
        </h4>
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 ${statusBg}`}
        >
          <span className="w-2 h-2 rounded-full bg-current"></span>
          {status}
        </span>
      </div>
      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
        {description}
      </p>
      <div className="flex justify-between items-center mt-2 text-[11px] font-bold tracking-wider uppercase">
        <div className="flex gap-4">
          <span className="text-gray-400">{id}</span>
          <span className={priorityColor[priority] || "text-gray-500"}>
            {priority}
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <span>{customer}</span>
          <span className="flex items-center gap-1.5 font-medium">
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

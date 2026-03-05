import React from "react";

const SideBars = ({ taskStatusList, onComplete }) => {
  return (
    <div className="flex flex-col gap-10">
      <section>
        <h3 className="text-[22px] font-bold text-[#334155] mb-4">
          **Task Status**
        </h3>

        {taskStatusList.length === 0 ? (
          <p className="text-[#64748b] text-[15px] font-normal">
            Select a ticket to add to Task Status
          </p>
        ) : (
          <div className="space-y-4">
            {taskStatusList.map((task, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
              >
                <p className="text-gray-800 font-semibold mb-3">{task.title}</p>
                <button
                  onClick={() => onComplete(task.id)}
                  className="bg-[#6366F1] text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-[#4F46E5] transition-colors"
                >
                  **Complete**
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
      <section>
        <h3 className="text-[22px] font-bold text-[#334155] mb-2">
          Resolved Task
        </h3>
        <p className="text-[#64748b] text-[15px] font-normal">
          No resolved tasks yet.
        </p>
      </section>
    </div>
  );
};

export default SideBars;

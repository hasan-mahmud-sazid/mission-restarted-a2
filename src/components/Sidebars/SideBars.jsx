import React from "react";

const SideBars = ({ taskStatusList, resolvedTasks, onComplete }) => {
  return (
    <div className="w-full lg:w-80 flex flex-col gap-8 md:gap-10">

      <section className="w-full">
        <h3 className="text-[20px] md:text-[22px] font-bold text-[#334155] mb-4">
          **Task Status**
        </h3>

        {taskStatusList.length === 0 ? (
          <p className="text-[#64748b] text-[14px] md:text-[15px] font-normal italic">
            Select a ticket to add to Task Status
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {taskStatusList.map((task) => (
              <div
                key={task.id}
                className="bg-white p-4 md:p-5 rounded-md border border-gray-100 shadow-sm transition-all hover:shadow-md"
              >
                <p className="text-[#1e293b] font-bold text-sm mb-4 break-words">
                  **{task.title}**
                </p>
                <button
                  onClick={() => onComplete(task)}
                  className="w-full bg-[#00a63e] text-white py-2.5 rounded-md text-sm font-bold hover:bg-[#008c34] active:scale-95 transition-all"
                >
                  **Complete**
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="w-full">
        <h3 className="text-[20px] md:text-[22px] font-bold text-[#334155] mb-4">
          **Resolved Task**
        </h3>

        <div className="flex flex-col gap-3">
          {resolvedTasks && resolvedTasks.length > 0 ? (
            resolvedTasks.map((task) => (
              <div
                key={task.id}
                className="bg-[#e8edff] p-4 rounded-md border-l-4 border-indigo-200 animate-fadeIn"
              >
                <p className="text-[#1e293b] font-medium text-[13px] break-words">
                  **{task.title}**
                </p>
              </div>
            ))
          ) : (
            <p className="text-[#64748b] text-[14px] md:text-[15px] font-normal">
              No resolved tasks yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default SideBars;

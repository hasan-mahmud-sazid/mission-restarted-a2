import React from "react";

// resolvedTasks প্রপসটি এখানে যোগ করা হয়েছে
const SideBars = ({ taskStatusList, resolvedTasks, onComplete }) => {
  return (
    <div className="flex flex-col gap-10">
      {/* Task Status Section */}
      <section>
        <h3 className="text-[22px] font-bold text-[#334155] mb-4">
          **Task Status**
        </h3>

        {taskStatusList.length === 0 ? (
          <p className="text-[#64748b] text-[15px] font-normal italic">
            Select a ticket to add to Task Status
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {taskStatusList.map((task) => (
              <div
                key={task.id}
                className="bg-white p-5 rounded-md border border-gray-100 shadow-sm"
              >
                <p className="text-[#1e293b] font-bold text-sm mb-4">
                  **{task.title}**
                </p>
                {/* এখানে পুরো 'task' অবজেক্ট পাঠানো হচ্ছে যাতে App.jsx এটি রিমুভ করতে পারে */}
                <button
                  onClick={() => onComplete(task)}
                  className="w-full bg-[#00a63e] text-white py-2.5 rounded-md text-sm font-bold hover:bg-[#008c34] transition-colors"
                >
                  **Complete**
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Resolved Task Section */}
      <section>
        <h3 className="text-[22px] font-bold text-[#334155] mb-4">
          **Resolved Task**
        </h3>

        <div className="flex flex-col gap-3">
          {resolvedTasks && resolvedTasks.length > 0 ? (
            resolvedTasks.map((task) => (
              <div
                key={task.id}
                className="bg-[#e8edff] p-4 rounded-md border-l-4 border-indigo-200"
              >
                <p className="text-[#1e293b] font-medium text-[13px]">
                  **{task.title}**
                </p>
              </div>
            ))
          ) : (
            <p className="text-[#64748b] text-[15px] font-normal">
              No resolved tasks yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default SideBars;

import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import TicketDash from "./components/Dashboard/TicketDash";
import HeroDiv from "./components/HeroDiv/HeroDiv";

function App() {
  const [tickets, setTickets] = useState([]);
  const [taskStatusList, setTaskStatusList] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0); // Resolved কাউন্টের জন্য স্টেট

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/public.json");
        const data = await res.json();
        setTickets(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    loadData();
  }, []);

  const handleAddToTask = (ticket) => {
    if (!taskStatusList.find((t) => t.id === ticket.id)) {
      setTaskStatusList([...taskStatusList, ticket]);
      setInProgressCount((prev) => prev + 1);
      alert(`${ticket.title} added to Task Status!`);
    } else {
      alert("This ticket is already in Task Status.");
    }
  };

  const handleCompleteTask = (id) => {
    // টাস্ক লিস্ট থেকে রিমুভ করা
    setTaskStatusList(taskStatusList.filter((t) => t.id !== id));

    // কাউন্ট অ্যাডজাস্ট করা
    setInProgressCount((prev) => (prev > 0 ? prev - 1 : 0));
    setResolvedCount((prev) => prev + 1); // Resolved সংখ্যা বাড়ানো

    alert("Task Completed!");
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans pb-20">
      <NavBar />

      {/* HeroDiv-এ কাউন্টগুলো প্রপস হিসেবে পাঠাতে হবে */}
      <HeroDiv inProgress={inProgressCount} resolved={resolvedCount} />

      <TicketDash
        allTickets={tickets}
        onSelectTicket={handleAddToTask}
        taskStatusList={taskStatusList}
        onComplete={handleCompleteTask}
      />
    </div>
  );
}

export default App;

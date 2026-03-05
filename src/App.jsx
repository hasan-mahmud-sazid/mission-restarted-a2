import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar/NavBar";
import TicketDash from "./components/Dashboard/TicketDash";
import HeroDiv from "./components/HeroDiv/HeroDiv";
import Footer from "./components/Footer/Footer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [taskStatusList, setTaskStatusList] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

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
    const alreadyInProgress = taskStatusList.find((t) => t.id === ticket.id);
    const alreadyResolved = resolvedTasks.find((t) => t.id === ticket.id);
    if (!alreadyInProgress && !alreadyResolved) {
      setTaskStatusList([...taskStatusList, ticket]);
      setInProgressCount((prev) => prev + 1);
      toast.success(`**${ticket.title}** added to Task Status!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.warn("This ticket is already in process or resolved!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleCompleteTask = (task) => {
    setTaskStatusList(taskStatusList.filter((t) => t.id !== task.id));
    setResolvedTasks((prev) => [...prev, task]);
    setInProgressCount((prev) => (prev > 0 ? prev - 1 : 0));
    setResolvedCount((prev) => prev + 1);
    toast.info("Task marked as Resolved!", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans pb-20">
      <NavBar />

      <HeroDiv inProgress={inProgressCount} resolved={resolvedCount} />

      <TicketDash
        allTickets={tickets}
        onSelectTicket={handleAddToTask}
        taskStatusList={taskStatusList}
        resolvedTasks={resolvedTasks}
        onComplete={handleCompleteTask}
      />

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;

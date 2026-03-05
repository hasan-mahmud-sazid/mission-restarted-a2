import React, { useState, useEffect } from "react";
// Toastify ইমপোর্ট করা হয়েছে
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar/NavBar";
import TicketDash from "./components/Dashboard/TicketDash";
import HeroDiv from "./components/HeroDiv/HeroDiv";

function App() {
  // ১. স্টেট ডিক্লেয়ারেশন
  const [tickets, setTickets] = useState([]); // সব টিকিটের জন্য
  const [taskStatusList, setTaskStatusList] = useState([]); // Task Status সেকশনের জন্য
  const [resolvedTasks, setResolvedTasks] = useState([]); // Resolved সেকশনের জন্য
  const [inProgressCount, setInProgressCount] = useState(0); // ব্যানার কাউন্ট
  const [resolvedCount, setResolvedCount] = useState(0); // Resolved কাউন্ট

  // ২. JSON ডাটা ফেচ করা
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

  // ৩. কার্ডে ক্লিক করলে Task Status-এ অ্যাড করার ফাংশন
  const handleAddToTask = (ticket) => {
    // চেক করা হচ্ছে যেন একই টিকিট বারবার অ্যাড না হয়
    const alreadyInProgress = taskStatusList.find((t) => t.id === ticket.id);
    const alreadyResolved = resolvedTasks.find((t) => t.id === ticket.id);

    if (!alreadyInProgress && !alreadyResolved) {
      setTaskStatusList([...taskStatusList, ticket]);
      setInProgressCount((prev) => prev + 1); // ইন-প্রগ্রেস কাউন্ট বাড়ানো

      // সাকসেস টোস্ট
      toast.success(`**${ticket.title}** added to Task Status!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      // ওয়ার্নিং টোস্ট
      toast.warn("This ticket is already in process or resolved!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  // ৪. কমপ্লিট বাটনে ক্লিক করলে যা হবে
  const handleCompleteTask = (task) => {
    // টাস্ক লিস্ট থেকে রিমুভ করা (এতে বাটন হাইড হয়ে যাবে)
    setTaskStatusList(taskStatusList.filter((t) => t.id !== task.id));

    // Resolved লিস্টে অ্যাড করা
    setResolvedTasks((prev) => [...prev, task]);

    // কাউন্ট অ্যাডজাস্ট করা
    setInProgressCount((prev) => (prev > 0 ? prev - 1 : 0));
    setResolvedCount((prev) => prev + 1);

    // ইনফো টোস্ট
    toast.info("Task marked as Resolved!", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans pb-20">
      {/* নেভবার সেকশন */}
      <NavBar />

      {/* ব্যানার সেকশন - এখানে কাউন্টগুলো প্রপস হিসেবে যাচ্ছে */}
      <HeroDiv inProgress={inProgressCount} resolved={resolvedCount} />

      {/* মেইন কন্টেন্ট সেকশন */}
      <TicketDash
        allTickets={tickets}
        onSelectTicket={handleAddToTask}
        taskStatusList={taskStatusList}
        resolvedTasks={resolvedTasks}
        onComplete={handleCompleteTask}
      />

      {/* টোস্ট কন্টেইনার - এটি না দিলে টোস্ট দেখা যাবে না */}
      <ToastContainer />
    </div>
  );
}

export default App;

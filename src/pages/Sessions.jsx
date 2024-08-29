import React from "react";
import sessions from "../data/sessioninfo";

function SessionItem({ session }) {
  return (
    <div className="bg-white border border-[#d2aaf0] mt-10 p-6 rounded-lg 
    shadow-lg text-left transition-transform transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-[#a87dff] text-2xl font-bold mb-2">{session.title}</h3>
      <p className="text-[#1a093b]"><span className="font-bold">Date:</span> {session.date}</p>
      <p className="text-[#1a093b]"><span className="font-bold">Time:</span> {session.time}</p>
      <p className="text-[#1a093b]"><span className="font-bold">Speaker:</span> {session.speaker}</p>
      <a href={session.link} target="_blank" rel="noopener noreferrer" className="text-[#de4e7e] underline mt-4 inline-block">
        Join Session
      </a>
    </div>
  );
}

function SessionsPage() {
  return (
    <div className="min-h-screen bg-[#a481d4] p-8 text-center">
      <h1 className="text-7xl font-bold mb-6 text-[#ffffff]">Upcoming Workshops and Sessions</h1>
      <h3 className="text-xl font-light text-[#ffffff] mb-12 px-10 lg:px-40">
        Here at Codess, we provide valuable insights into upcoming opportunities designed to help you seize them. These sessions are led by 
        individuals who have successfully navigated and capitalized on similar opportunities themselves. Below, you'll find a list of our upcoming 
        workshops and sessions, complete with all the details you need to join. Simply click on the links to register and participate in the events that 
        resonate with you.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sessions.map((session, index) => (
          <SessionItem key={index} session={session} />
        ))}
      </div>
    </div>
  );
}

export default SessionsPage;

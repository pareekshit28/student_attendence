import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    if (!localStorage.getItem("totalStudents")) {
      localStorage.setItem("totalStudents", 0);
    }
    if (!localStorage.getItem("students")) {
      localStorage.setItem("students", JSON.stringify([]));
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Total number of students in school right now:{" "}
        {localStorage.getItem("totalStudents")}
      </h1>
      <Link to="/checkin">
        <button className=" bg-green-500 m-2 p-2 rounded w-48 text-white">
          Check In Student
        </button>
      </Link>
      <Link to="/checkout">
        <button className=" bg-red-500 m-2 p-2 rounded w-48 text-white">
          Check Out Student
        </button>
      </Link>
    </div>
  );
};

export default HomePage;

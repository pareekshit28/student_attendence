import React, { useEffect, useState } from "react";

const CheckInPage = () => {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");

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
      <div>
        <p>Student Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className=" border-2 rounded mb-2 w-48 h-10 p-2"
        />
        <p>Roll Number</p>
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => {
            setRollNumber(e.target.value);
          }}
          className=" border-2 rounded mb-2 w-48 h-10 p-2"
        />
      </div>
      <button
        className=" bg-green-500 m-2 p-2 rounded w-48 text-white"
        onClick={(e) => {
          localStorage.setItem(
            "totalStudents",
            Number.parseInt(localStorage.getItem("totalStudents")) + 1
          );
          localStorage.setItem(
            "students",
            JSON.stringify([
              ...JSON.parse(localStorage.getItem("students")),
              {
                name,
                rollNumber,
                checkedInTime: new Date().toLocaleTimeString(),
              },
            ])
          );
        }}
      >
        Check In
      </button>
    </div>
  );
};

export default CheckInPage;

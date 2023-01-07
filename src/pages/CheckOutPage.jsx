import React, { useEffect, useState } from "react";

const CheckOutPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("totalStudents")) {
      localStorage.setItem("totalStudents", 0);
    }
    if (!localStorage.getItem("students")) {
      localStorage.setItem("students", JSON.stringify([]));
    }
    setResults(JSON.parse(localStorage.getItem("students")));
  }, []);

  const searchStudentsList = (searchText) => {
    const filteredStudents = JSON.parse(
      localStorage.getItem("students")
    ).filter((student) => {
      return student.rollNumber.includes(searchText);
    });
    setResults(filteredStudents);
  };

  return (
    <div className="flex flex-col justify-start p-10 items-center h-screen">
      <div className="w-2/3 flex justify-center items-center mb-2">
        <input
          type="text"
          placeholder="Start typing Roll Number to search"
          className=" border-2 rounded w-full h-10 p-2"
          onChange={(e) => {
            searchStudentsList(e.target.value);
          }}
        />
      </div>
      <div className=" border-2 w-2/3 rounded">
        {results.map((result) => {
          return (
            <div className="flex justify-between items-center p-2 border-b-2">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold">{result.name}</p>
                <p className="text-gray-400">{result.rollNumber}</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold">{result.checkedInTime}</p>
                <p className="text-gray-400">Checked In Time</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <button
                  className=" bg-red-500 m-2 p-2 rounded w-48 text-white"
                  onClick={(e) => {
                    localStorage.setItem(
                      "totalStudents",
                      Number.parseInt(localStorage.getItem("totalStudents")) - 1
                    );
                    localStorage.setItem(
                      "students",
                      JSON.stringify(
                        JSON.parse(localStorage.getItem("students")).filter(
                          (student) => {
                            return student.rollNumber !== result.rollNumber;
                          }
                        )
                      )
                    );
                    setResults(JSON.parse(localStorage.getItem("students")));
                  }}
                >
                  Check Out
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOutPage;

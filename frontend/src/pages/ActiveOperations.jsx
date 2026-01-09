import { useEffect, useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

function statusStyle(status) {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-600";
    case "Picking up":
      return "bg-blue-100 text-blue-600";
    case "Completed":
      return "bg-yellow-100 text-yellow-600";
    case "Cancel":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

function ActiveOperations() {
  const [rides, setRides] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:8000/api/rides")
      .then(res => res.json())
      .then(data => setRides(data));
  }, []);

  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedRides = rides.slice(startIndex, endIndex);
  const totalPages = Math.ceil(rides.length / itemsPerPage);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      
      <h2 className="text-xl font-bold mb-4">Active Operations</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left p-3">Ride ID</th>
              <th className="text-left p-3">Driver</th>
              <th className="text-left p-3">Passenger</th>
              <th className="text-left p-3">Fare (EST.)</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {displayedRides.map((ride, index) => (
              <tr
                key={ride.rideId}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3 text-orange-500 font-medium">
                  {ride.rideId}
                </td>

                <td className="p-3 flex items-center gap-2">
                  <img
                    src="https://i.pravatar.cc/30"
                    alt="driver"
                    className="rounded-full"
                  />
                  {ride.driver}
                </td>

                <td className="p-3">{ride.passenger}</td>

                <td className="p-3">${ride.fare.toFixed(2)}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                      ride.status
                    )}`}
                  >
                    {ride.status}
                  </span>
                </td>

                <td className="p-3 flex gap-3 text-gray-500">
                  <Eye className="cursor-pointer hover:text-indigo-600" size={18} />
                  <Pencil className="cursor-pointer hover:text-green-600" size={18} />
                  <Trash2 className="cursor-pointer hover:text-red-600" size={18} />
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="mx-4">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ActiveOperations;

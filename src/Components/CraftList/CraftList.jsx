import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CraftList = () => {
  const { user } = useContext(AuthContext);
  const [userCraft, setUserCraft] = useState([]);
  const [filteredCraft, setFilteredCraft] = useState("All");

  const filteredCrafts = userCraft.filter((craft) => {
    if (filteredCraft === "All") return true;
    return craft.customization === filteredCraft;
  });
  useEffect(() => {
    fetch(`https://pro-assignment-ten-server.vercel.app/myCraft/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserCraft(data);
      });
  }, [user]);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pro-assignment-ten-server.vercel.app/allcraft/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft has been deleted.",
                icon: "success",
              });
              const remaining = userCraft.filter((craft) => craft._id !== id);
              setUserCraft(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="max-w-[1170px] mx-auto py-5 lg:py-20 craftList">
      <div>
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold heading inline-block mb-5">
            <span className="mr-2"> Hi {user.displayName}!</span> See Your
            Crafts!
          </h2>
        </div>
        <div className="text-center mb-5">
          <select
            onChange={(e) => setFilteredCraft(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Filter Crafts
            </option>
            <option value="All">All</option>
            <option value="Yes">Customized</option>
            <option value="No">Not Customized</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {filteredCrafts?.map((craft, idx) => (
          <div key={idx} className="border rounded-lg">
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="w-full">
                  <img
                    src={craft?.image}
                    className=" rounded-lg shadow-2xl max-h-[400px]"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-3xl font-bold mb-4">{craft?.itemName}</h1>
                  <div className="space-y-4">
                    <p>
                      <span className="font-bold text-lg mr-2">Price:</span>
                      {craft.price}
                    </p>
                    <p>
                      <span className="font-bold text-lg mr-2">Rating:</span>
                      {craft.rating}
                    </p>
                    <p>
                      <span className="font-bold text-lg mr-2">
                        Customization:
                      </span>
                      {craft.customization}
                    </p>
                    <p>
                      <span className="font-bold text-lg mr-2">
                        Stock Status:
                      </span>
                      {craft.stock}
                    </p>
                  </div>
                  <div className="flex gap-5 mt-4">
                    <Link
                      to={`/updateCraft/${craft._id}`}
                      className="btn bg-[#8B4513] text-white hover:bg-primary"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(craft._id)}
                      className="btn bg-[#8B4513] text-white hover:bg-primary"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftList;

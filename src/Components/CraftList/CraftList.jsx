import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const CraftList = () => {
  const { user } = useContext(AuthContext);
  const [userCraft, setUserCraft] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myCraft/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserCraft(data);
      });
  }, [user]);
  return (
    <div className="max-w-[1170px] mx-auto py-5 lg:py-20">
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold heading inline-block mb-5">
          <span className="mr-2"> Hi {user.displayName}!</span> See Your Crafts!
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {userCraft?.map((craft, idx) => (
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
                    <button className="btn bg-[#8B4513] text-white hover:bg-primary">
                      Update
                    </button>
                    <button className="btn bg-[#8B4513] text-white hover:bg-primary">
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

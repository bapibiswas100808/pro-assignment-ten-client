import { useLoaderData } from "react-router-dom";

const AllCraft = () => {
  const allCrafts = useLoaderData();
  return (
    <div className="max-w-[1170px] mx-auto py-5 lg:py-10 px-3 lg:px-0">
      <div className="text-center">
        <h2 className=" text-2xl font-bold mb-5 heading inline-block">
          See All Craft Items: {allCrafts.length}
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Processing Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allCrafts?.map((craft, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={craft.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{craft.itemName}</div>
                        <div className="text-sm opacity-50">
                          {craft.subCategory}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {craft.price}
                    <br />
                  </td>
                  <td>{craft.processingTime}</td>
                  <th>
                    <button className="btn bg-[#8B4513] hover:bg-primary text-white">
                      Show details
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCraft;

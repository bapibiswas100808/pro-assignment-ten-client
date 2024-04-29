import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CraftItems = ({ allCrafts }) => {
  console.log(allCrafts);
  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0 py-5 lg:py-20 allCraft">
      <div className="text-center">
        <h2 className="text-3xl font-bold heading inline-block mb-5 lg:mb-10">
          Craft Items
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allCrafts?.slice(0, 6).map((craft, idx) => (
          <div key={idx} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={craft.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{craft.itemName}</h2>
              <p className="mb-5">{craft.shortDescription}</p>
              <div className="card-actions justify-center">
                <Link
                  to={`/showDetails/${craft._id}`}
                  className="btn bg-[#8B4513] hover:bg-primary text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;

CraftItems.propTypes = {
  allCrafts: PropTypes.array,
};

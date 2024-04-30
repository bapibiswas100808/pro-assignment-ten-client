import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CategoryDetails = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  console.log(id);
  useEffect(() => {
    fetch(`https://pro-assignment-ten-server.vercel.app/myCategory/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, [id]);
  return (
    <div className="max-w-[1170px] mx-auto py-5 lg:py-10 px-3 lg:px-0 showDetails">
      <div className="text-center">
        <h2 className="heading inline-block text-3xl font-bold mb-5 lg:mb-10">
          Category Details
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {categoryData?.map((category, idx) => (
          <div key={idx} className="border rounded-lg">
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="w-full">
                  <img
                    src={category?.image}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
                <div className=" w-full">
                  <h1 className="text-3xl font-bold mb-2">
                    {category.itemName}
                  </h1>
                  <h2 className="text-xl">{category.subCategory}</h2>
                  <p className="py-3">{category.shortDescription}</p>
                  <div className="space-y-3">
                    <p>
                      <span className="font-bold text-lg mr-2">Price:</span>
                      {category.price}
                    </p>
                    <p>
                      <span className="font-bold text-lg mr-2">Rating:</span>
                      {category.rating}
                    </p>
                    <p>
                      <span className="font-bold text-lg mr-2">
                        Processing Time:
                      </span>
                      {category.processingTime}
                    </p>
                  </div>
                  <Link
                    to={`/showDetails/${category._id}`}
                    className="btn bg-[#8B4513] text-white hover:bg-primary mt-3"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://pro-assignment-ten-server.vercel.app/allCategories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  const handleCategory = (subCategory) => {
    navigate(`/categoryDetails/${subCategory}`);
  };
  return (
    <div className="max-w-[1170px] mx-auto pb-5 lg:pb-20 px-3 lg:px-0">
      <div className="text-center">
        <h2 className="heading inline-block text-3xl font-bold mb-5 lg:mb-10">
          Art & Craft Categories
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories?.map((category, idx) => (
          <div
            key={idx}
            className="cursor-pointer"
            onClick={() => handleCategory(category.subcategoryName)}
          >
            <div className="card shadow-xl min-h-[500px]">
              <figure>
                <img
                  className="max-h-[300px]"
                  src={category.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category.subcategoryName}</h2>
                <p>{category?.shortDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

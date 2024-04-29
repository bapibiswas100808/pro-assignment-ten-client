import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const craft = useLoaderData();
  return (
    <div className="max-w-[1170px] mx-auto py-5 lg:py-20 px-3 lg:px-0">
      <div className="text-center">
        <h2 className="text-3xl heading inline-block font-bold">
          Details of {craft.itemName}
        </h2>
      </div>
      <div>
        <div className="hero py-10">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <div className="w-full">
              <img
                src={craft?.image}
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="w-full">
              <h1 className="text-3xl font-bold">{craft.itemName}</h1>
              <p className="py-6">
                <span className="font-bold text-lg pr-2">
                  Product Description:
                </span>
                {craft?.shortDescription}
              </p>
              <div className="space-y-5">
                <p>
                  <span className="font-bold text-lg pr-2">Category:</span>
                  {craft?.subCategory}
                </p>
                <p>
                  <span className="font-bold text-lg pr-2">
                    Processing Time:
                  </span>
                  {craft?.processingTime}
                </p>
                <p>
                  <span className="font-bold text-lg pr-2">Price:</span>
                  {craft?.price}
                </p>
                <p>
                  <span className="font-bold text-lg pr-2">Rating:</span>
                  {craft?.rating}
                </p>
                <p>
                  <span className="font-bold text-lg pr-2">
                    Customize Product:
                  </span>
                  {craft?.customization}
                </p>
                <p>
                  <span className="font-bold text-lg pr-2">Stock Status:</span>
                  {craft?.stock}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;

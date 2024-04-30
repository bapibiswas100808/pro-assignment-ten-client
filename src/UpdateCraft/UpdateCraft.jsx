import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const craft = useLoaderData();
  console.log(craft);
  const [checkStock, setCheckStock] = useState("");
  const [checkCustomization, setCheckCustomization] = useState("");
  const [checkSubCategory, setCheckSubCategory] = useState("");
  const selectStock = (e) => {
    setCheckStock(e.target.value);
  };
  const selectCustomization = (e) => {
    setCheckCustomization(e.target.value);
  };
  const selectSubCategory = (e) => {
    setCheckSubCategory(e.target.value);
  };
  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.photo.value;
    const itemName = form.itemName.value;
    const subCategory = checkSubCategory;
    const processingTime = form.processingTime.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;
    const customization = checkCustomization;
    const stock = checkStock;

    const newData = {
      image,
      itemName,
      subCategory,
      processingTime,
      price,
      rating,
      shortDescription,
      customization,
      stock,
    };
    // send data
    fetch(`http://localhost:5000/allCraft/${craft?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Craft  Updated Successfully",
            icon: "success",
            confirmButtonText: "Continue",
          });
        }
      });
  };
  return (
    <div className="max-w-[1170px] mx-auto py-5 lg:py-20 px-3 lg:px-0">
      <div className="text-center">
        <h2 className="heading inline-block text-3xl font-bold mb-5">
          Update craft:{craft.itemName}
        </h2>
      </div>
      <div className="">
        <form onSubmit={handleUpdateCraft}>
          {/* image & item_name */}
          <div className="flex flex-col lg:flex-row gap-5 mb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Photo Url</span>
              </div>
              <input
                type="text"
                required
                name="photo"
                defaultValue={craft?.image}
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Item Name</span>
              </div>
              <input
                type="text"
                required
                name="itemName"
                defaultValue={craft?.itemName}
                placeholder="Item Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* sub category & processing time */}
          <div className="flex flex-col lg:flex-row gap-5 mb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Select Sub Category</span>
              </div>
              <select
                required
                onChange={selectSubCategory}
                className="select select-bordered"
              >
                <option disabled selected>
                  Select a Sub Category?
                </option>
                <option value="Wooden Furniture & Sculptures">
                  Wooden Furniture & Sculptures
                </option>
                <option value="Wooden Home Decor">Wooden Home Decor</option>
                <option value="Wooden Utensils and Kitchenware">
                  Wooden Utensils and Kitchenware
                </option>
                <option value="Jute Home Decor">Jute Home Decor</option>
                <option value="Jute Kitchenware & utensils">
                  Jute Kitchenware & utensils
                </option>
                <option value="Jute and wooden Jewellery">
                  Jute and wooden Jewellery
                </option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Processing Time</span>
              </div>
              <input
                type="text"
                required
                name="processingTime"
                defaultValue={craft?.processingTime}
                placeholder="Processing Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Price & Rating */}
          <div className="flex flex-col lg:flex-row gap-5 mb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                required
                type="number"
                name="price"
                defaultValue={craft?.price}
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <input
                type="number"
                required
                name="rating"
                defaultValue={craft?.rating}
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* short description */}
          <div className="flex flex-col lg:flex-row gap-5 mb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Short Description</span>
              </div>
              <textarea
                type="text"
                required
                placeholder="Short Description"
                defaultValue={craft?.shortDescription}
                name="shortDescription"
                className="input input-bordered w-full h-24"
              />
            </label>
          </div>
          {/* Customization & Stock status */}
          <div className="flex flex-col lg:flex-row gap-5 mb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Customization</span>
              </div>
              <select
                onChange={selectCustomization}
                className="select select-bordered"
                required
              >
                <option disabled selected>
                  Do You want To customize?
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Stock Status</span>
              </div>
              <select
                onChange={selectStock}
                className="select select-bordered"
                required
              >
                <option disabled selected>
                  Select Stock Status?
                </option>
                <option value="In Stock">In Stock</option>
                <option value="Out Of stock">Out Of Stock</option>
                <option value="Made In order">Made in order</option>
              </select>
            </label>
          </div>

          <button
            type="submit"
            className="btn bg-[#8B4513] hover:bg-primary w-full mb-10 text-white"
          >
            Update Craft Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCraft;

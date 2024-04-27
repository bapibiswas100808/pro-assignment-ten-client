import { useState } from "react";

const AddCraft = () => {
  const [checkStock, setCheckStock] = useState("");
  const [checkCustomization, setCheckCustomization] = useState("");
  const selectStock = (e) => {
    setCheckStock(e.target.value);
  };
  const selectCustomization = (e) => {
    setCheckCustomization(e.target.value);
  };
  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.photo.value;
    const itemName = form.itemName.value;
    const subCategory = form.subCategory.value;
    const processingTime = form.processingTime.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;
    const customization = checkCustomization;
    const stock = checkStock;
    const name = form.name.value;
    const email = form.email.value;
    console.log(
      image,
      itemName,
      subCategory,
      processingTime,
      price,
      rating,
      shortDescription,
      customization,
      stock,
      name,
      email
    );
  };
  return (
    <div className="max-w-[1170px] mx-auto min-h-screen px-3 lg:px-0">
      <h2 className="text-3xl font-bold text-center py-5">Add Craft Item</h2>
      <div className="">
        <form onSubmit={handleAddCraft}>
          {/* image & item_name */}
          <div className="flex flex-col lg:flex-row gap-5 mb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Photo Url</span>
              </div>
              <input
                type="text"
                name="photo"
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
                name="itemName"
                placeholder="Item Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* sub category & processing time */}
          <div className="flex flex-col lg:flex-row gap-5 mb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Sub Category</span>
              </div>
              <input
                type="text"
                name="subCategory"
                placeholder="Sub Category Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Processing Time</span>
              </div>
              <input
                type="text"
                name="processingTime"
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
                type="number"
                name="price"
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
                name="rating"
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
                placeholder="Short Description"
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
              <select onChange={selectStock} className="select select-bordered">
                <option disabled selected>
                  Select Stock Status?
                </option>
                <option value="In Stock">In Stock</option>
                <option value="Out Of stock">Out Of Stock</option>
                <option value="Made In order">Made in order</option>
              </select>
            </label>
          </div>
          {/* Name & Email */}
          <div className="flex flex-col lg:flex-row gap-5 mb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <button
            type="submit"
            className="btn bg-[#8B4513] hover:bg-primary w-full mb-10 text-white"
          >
            Add Craft Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCraft;

import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
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
  const handleAddCraft = (e) => {
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
    const name = form.name.value;
    const email = form.email.value;
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
      name,
      email,
    };
    // send data
    fetch("https://pro-assignment-ten-server.vercel.app/allCraft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item added Successfully",
            icon: "success",
            confirmButtonText: "Continue",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-[1170px] mx-auto min-h-screen px-3 lg:px-0">
      <div className="text-center">
        <h2 className="text-3xl font-bold  py-5 heading inline-block">
          Add Craft Item
        </h2>
      </div>
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
                required
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
                required
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
          {/* Name & Email */}
          <div className="flex flex-col lg:flex-row gap-5 mb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                readOnly
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
                defaultValue={user?.email}
                readOnly
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

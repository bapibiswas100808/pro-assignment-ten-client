const Contact = () => {
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="text-center">
        <h3 className="font-bold text-3xl heading inline-block mx-auto">
          Contact Us!
        </h3>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <h1 className="text-3xl font-bold">Feel Free Contact Us!</h1>
            <p className="py-3">
              For inquiries or collaborations, reach out to ZUWoody Art through
              our contact page. We welcome your questions and feedback as we
              strive to bring nature-inspired craftsmanship to life.
            </p>
            <div>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                info@zuwoodyart.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +1 (555) 123-4567
              </p>
              <p>
                <span className="font-semibold">Address:</span> 123 Woodland
                Avenue, Forest Grove, ZU 98765, USA
              </p>
            </div>
          </div>
          <div className="card shrink-0 w-full lg:w-1/2">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#8B4513] hover:bg-primary text-white">
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import aboutImage from "../../assets/images/about.jpg";
const About = () => {
  return (
    <div className="max-w-[1170px] mx-auto my-10">
      <div className="text-center mb-5 lg:mb-10">
        <h3 className="font-bold text-3xl heading inline-block mx-auto">
          About Us!
        </h3>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse items-start">
          <div className="w-full lg:w-1/2">
            <img
              src={aboutImage}
              className="rounded-lg shadow-2xl max-h-[400px] w-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-center lg:text-left">
              Know More About Us!
            </h1>
            <p className="py-6">
              Step into the world of ZUWoody, where artistry intertwines with
              the natural world. Our store offers a diverse array of handcrafted
              wood and fiber creations, meticulously crafted by skilled
              artisans. From stunning sculptures to functional home decor, each
              piece exudes rustic charm and timeless elegance. We take pride in
              our commitment to sustainability, using ethically sourced
              materials and eco-conscious practices. Whether you are searching
              for a unique statement piece or a thoughtful gift, ZUWoody
              provides a haven for those who appreciate the beauty of nature and
              the artistry of skilled craftsmanship. Explore our collection and
              bring a touch of organic beauty into your home.
            </p>
            <div className="text-center lg:text-left">
              <button className="btn bg-[#8B4513] hover:bg-primary text-white">
                Learn More!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { Tooltip } from "react-tooltip";

const About = () => {
  return (
    <div id="about" className="bg-zinc-800  w-full md:px-[10%]">
      <div>
        <div className=" p-7 rounded-2xl md:p-12">
          <p className="text-3xl font-bold md:text-5xl text-center my-6">
            Our Teams
          </p>
          <div>
            <p className="text-zinc-200  mb-4 lg:mb-8 md:text-2xl ">
              At <span className="text-3xl font-bold">Zinoxis</span>, we are
              driven by a passion for solving real-world challenges through
              innovative solutions. Our mission is to empower people, foster
              growth, and create meaningful impact. Whether it&apos;s enhancing
              everyday experiences or addressing community needs, we are
              committed to building a future where technology and creativity
              come together to make life better. With a focus on sustainability,
              collaboration, and continuous learning, we aim to grow alongside
              our customers and partners. Together, let&apos;s turn bold ideas into
              lasting change.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-0 rounded-none my-2 md:my-6">
            <div className="card border rounded-none border-zinc-100  shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Software Engineering</h2>
                <p>
                  Dive into complex challenges with a top-tier engineering team,
                  crafting innovative software solutions.
                </p>
              </div>
            </div>
            <div className="card border rounded-none border-zinc-100  shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Design & UX</h2>
                <p>
                  Collaborate with creative minds to design captivating user
                  experiences and interfaces that stand out.
                </p>
              </div>
            </div>
            <div className="card rounded-none border border-zinc-100  shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Artificial Intelligence (AI)</h2>
                <p>
                  Push the boundaries of AI, developing cutting-edge
                  applications that redefine what&apos;s possible.
                </p>
              </div>
            </div>
            <div className="card rounded-none border border-zinc-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Project Management</h2>
                <p>
                  Lead projects from concept to completion, ensuring seamless
                  execution and outstanding results.
                </p>
              </div>
            </div>
            <div className="card border rounded-none border-zinc-100  shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Project Management</h2>
                <p>
                  Dive into complex challenges with a top-tier engineering team,
                  crafting innovative software solutions.
                </p>
              </div>
            </div>
            <div className="card border rounded-none border-zinc-100  shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Marketing</h2>
                <p>
                  Propel our brand forward by crafting compelling narratives and
                  strategies that capture and engage our audience.
                </p>
              </div>
            </div>
            <div className="card border rounded-none border-zinc-100  shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Sales</h2>
                <p>
                  Excel in a dynamic sales environment, connecting with global
                  clients to deliver tech solutions that meet their needs.
                </p>
              </div>
            </div>
            <div className="card border rounded-none border-zinc-100  shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Research</h2>
                <p>
                  Contribute to groundbreaking research, exploring new
                  technologies and methodologies to fuel innovation.
                </p>
              </div>
            </div>
          </div>
          <p className="py-6">People Behind..</p>
          <div className="flex flex-wrap gap-10">
            <label
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Hello world!"
              className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar"
            >
              <div className="w-20 h-20 rounded-full ">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
            <label className="btn btn-ghost btn-circle w-20 h-20 border-blue-50 avatar">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={"/profile.jpg"}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default About;

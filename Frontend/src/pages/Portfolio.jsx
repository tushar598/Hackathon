import React, { useState } from "react";
import axios from "axios";

const Portfolio = () => {
 const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://backend-4hrs.onrender.com/api/public/yash"
      );
       setData(response.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
   // Fetch data once when component mounts
   useEffect(() => {
    getData();
  }, []);

 

  return (
   
 
    <div className="min-h-screen w-screen bg-yellow-300">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-10 sm:w-[80%] lg:w-1/2">
        {/* Intro Section */}
        <div className="mb-5 flex gap-6">
          <img
            src=''
            alt="loading"
            className="mx-auto h-32 w-32 border-[3px] object-cover sm:mx-0"
          />
          <div>
            <h1 className="mt-3 text-3xl font-extrabold">
              Hey👋, I am <br />
              <span className="underline"> {Data.username} </span>
            </h1>
            <p className="mt-3 text-blue-800">{Data.heading}</p>
          </div>
        </div>

        {/* Top Heading */}
        <div className="mx-auto flex w-full flex-col gap-4 border-2 bg-green-200 p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:flex-row sm:gap-8">
          <div className="heading text-center sm:text-left">
            <h2 className="mt-1 font-bold">Software Engineer</h2>
            <p className="mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, vero. Suscipit a saepe consequatur in, distinctio,
              perferendis.
            </p>
          </div>
        </div>

        {/* About Section */}
        <h1
          className="mt-10 mb-5 inline-block rounded-3xl bg-yellow-500 px-4 py-1 text-xl font-bold text-black"
          style={{ border: "3px dotted" }}
        >
          About
        </h1>
        <div className="mx-auto w-full border-2 bg-green-200 p-5 text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          <p className="text-black">{Data.about}</p>
        </div>

        {/* Skills Section */}
        <h1
          className="mt-10 mb-5 inline-block rounded-3xl bg-yellow-500 px-4 py-1 text-xl font-bold text-black"
          style={{ border: "3px dotted" }}
        >
          Skills
        </h1>
        <div className="flex flex-wrap gap-3">
          {Data.skills.map((skill, i) => (
            <p
              key={i}
              className="inline-block border-2 bg-green-200 px-3 py-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              {skill}
            </p>
          ))}
        </div>

        {/* Experiences Section */}
        <h1
          className="mt-10 mb-5 inline-block rounded-3xl bg-yellow-500 px-4 py-1 text-xl font-bold text-black"
          style={{ border: "3px dotted" }}
        >
          Experiences
        </h1>
        <div className="grid gap-5">
          {Data.experience.map((elem, i) => (
            <div
              key={i}
              className="flex justify-between border-2 bg-green-200 p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <div className="pl-5">
                <h1 className="text-[17px] font-bold">{elem.jobPost}</h1>
                <h2 className="font-semibold">{elem.companyName}</h2>
              </div>
              <div className="pr-5">
                <p>
                  {elem.joiningDate} -{elem.leavingDate}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <h1
          className="mt-10 mb-5 inline-block rounded-3xl bg-yellow-500 px-4 py-1 text-xl font-bold text-black"
          style={{ border: "3px dotted" }}
        >
          Projects
        </h1>
        <div className="flex gap-7 flex-wrap">
          {Data.projects.map((elem, i) => (
            <div
              key={i}
              className="w-56 border-2 bg-green-200 p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <h1 className="font-bold">{elem.projectName}</h1>
              <p className="mt-2 mb-2 text-xs">{elem.description}</p>
              <hr />
              <div className="mt-2 mb-2 flex flex-wrap gap-2">
                {elem.skillsUsed.map((tech, j) => (
                  <p
                    key={j}
                    className="inline-block border bg-green-300 px-2 py-0.5 text-xs"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <hr />
              <div className="mt-2 flex flex-wrap gap-2">
                {["Code", "View"].map((link, k) => (
                  <p
                    key={k}
                    className="inline-block border bg-green-400 px-2 py-0.5 text-xs"
                  >
                    {link}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <h1
          className="mt-10 mb-5 inline-block rounded-3xl bg-yellow-500 px-4 py-1 text-xl font-bold text-black"
          style={{ border: "3px dotted" }}
        >
          Education
        </h1>
        <div className="grid gap-5">
          {Data.education.map((elem, i) => (
            <div
              key={i}
              className="flex justify-between border-2 bg-green-200 p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <div className="pl-5">
                <h1 className="text-[17px] font-bold">{elem.courseName}</h1>
                <h2 className="font-semibold">{elem.organisationName}</h2>
              </div>
              <div className="pr-5">
                <p>
                  {elem.startingDate} - {elem.completionDate}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accomplishment Section */}
        <h1
          className="mt-10 mb-5 inline-block rounded-3xl bg-yellow-500 px-4 py-1 text-xl font-bold text-black"
          style={{ border: "3px dotted" }}
        >
          Acomplishment
        </h1>
        <div className="grid gap-5">
          {Data.accomplishment.map((elem, i) => (
            <div
              key={i}
              className="flex justify-between border-2 bg-green-200 p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <p>{elem}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          {/* Connect Heading */}
          <h1
            className="mt-10 mb-5 inline-block rounded-3xl bg-yellow-500 px-4 py-1 text-xl font-bold text-black"
            style={{ border: "3px dotted" }}
          >
            Connect
          </h1>

          {/* Social Media Icons */}
          <div className="flex justify-center mt-10 items-center gap-4 flex-wrap">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#b9f8cf] hover:text-white transition"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#b9f8cf] hover:text-white transition"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#b9f8cf] hover:text-white transition"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Mail */}
            <a
              href="https://mail.google.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#b9f8cf] hover:text-white transition"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
              </svg>
            </a>

            {/* Twitter (X) */}
            <a
              href="https://x.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#b9f8cf] hover:text-white transition"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Footer Section */}
          <div className="flex flex-col items-center justify-center mt-20 text-center space-y-2">
            <div className="border-2 border-black bg-white px-3 py-1 text-lg font-bold text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer hover:bg-[#b9f8cf]">
              MyPortfolio
            </div>
            <div className="text-3xl">👆</div>
            <p className="text-[#030303]">
              Visit our website to create these types of amazing portfolios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React, { useState } from 'react';
import { Trash2, PenSquare, Plus, X } from 'lucide-react';

export default function PortfolioBuilder() {
  // State for form fields
  const [fullName, setFullName] = useState('');
  const [about, setAbout] = useState('');
  const [skill, setSkill] = useState('');
  const [skillList, setSkillList] = useState([]);
  const [accomplishment, setAccomplishment] = useState('');
  const [accomplishmentList, setAccomplishmentList] = useState([]);
  
//Image section 

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };


  // State for experience form
const [editExperienceId, setEditExperienceId] = useState(null);
  const [experienceForm, setExperienceForm] = useState({
    jobTitle: '',
    companyName: '',
    joiningDate: '',
    leavingDate: '',
    currentlyWorking: false
  });
  
  // State for experience list
  const [experiences, setExperiences] = useState([]);

  
  //edit section to 517
  const handleEditExperience = (id) => {
  const expToEdit = experiences.find(exp => exp.id === id);
  if (expToEdit) {
    setExperienceForm({
      jobTitle: expToEdit.jobTitle,
      companyName: expToEdit.companyName,
      joiningDate: expToEdit.joiningDate,
      leavingDate: expToEdit.leavingDate,
      currentlyWorking: expToEdit.isCurrentlyWorking
    });
    setEditExperienceId(id);
  }
};


  // State for education form
  const [editEducationId, setEditEducationId] = useState(null); 
  const [educationForm, setEducationForm] = useState({
    degree: '',
    institute: '',
    cgpa: '',
    joiningDate: '',
    leavingDate: '',
    currentlyStudying: false
  });
  
 // State for education list
  const [educations, setEducations] = useState([]);
  
  
  // State for project form
  const [editProjectId, setEditProjectId] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    codeLink: '',
    viewLink: '',
    skillInput: '',
    skills: []
  });
  
  // State for project list
  const [projects, setProjects] = useState([]);
  
  // State for social media
  const [socialMedia, setSocialMedia] = useState({
    platform: '',
    link: ''
  });
  
  // Functions to handle form submissions
  const handleAddExperience = () => {
  if (editExperienceId !== null) {
    // Update experience
    const updatedExperiences = experiences.map((exp) =>
      exp.id === editExperienceId
        ? {
            ...exp,
            jobTitle: experienceForm.jobTitle,
            companyName: experienceForm.companyName,
            joiningDate: experienceForm.joiningDate,
            leavingDate: experienceForm.leavingDate,
            isCurrentlyWorking: experienceForm.currentlyWorking
          }
        : exp
    );
    setExperiences(updatedExperiences);
    setEditExperienceId(null); // exit edit mode
  } else {
    // Add new experience
    const newExperience = {
      id: Date.now(),
      jobTitle: experienceForm.jobTitle,
      companyName: experienceForm.companyName,
      joiningDate: experienceForm.joiningDate,
      leavingDate: experienceForm.leavingDate,
      isCurrentlyWorking: experienceForm.currentlyWorking
    };
    setExperiences([...experiences, newExperience]);
  }

  // Reset form
  setExperienceForm({
    jobTitle: '',
    companyName: '',
    joiningDate: '',
    leavingDate: '',
    currentlyWorking: false
  });
};




  const handleAddEducation = () => {
  if (editEducationId !== null) {
    // Update existing education
    const updatedList = educations.map((edu) =>
      edu.id === editEducationId
        ? {
            ...edu,
            degree: educationForm.degree,
            institute: educationForm.institute,
            cgpa: educationForm.cgpa,
            joiningDate: educationForm.joiningDate,
            leavingDate: educationForm.leavingDate,
            isCurrentlyStudying: educationForm.currentlyStudying,
          }
        : edu
    );
    setEducations(updatedList);
    setEditEducationId(null); // Exit edit mode
  } else {
    // Add new education entry
    const newEducation = {
      id: Date.now(),
      degree: educationForm.degree,
      institute: educationForm.institute,
      cgpa: educationForm.cgpa,
      joiningDate: educationForm.joiningDate,
      leavingDate: educationForm.leavingDate,
      isCurrentlyStudying: educationForm.currentlyStudying,
    };
    setEducations([...educations, newEducation]);
  }

  // Reset form
  setEducationForm({
    degree: '',
    institute: '',
    cgpa: '',
    joiningDate: '',
    leavingDate: '',
    currentlyStudying: false,
  });
};


  const handleEditEducation = (id) => {
  const eduToEdit = educations.find((edu) => edu.id === id);
  if (eduToEdit) {
    setEducationForm({
      degree: eduToEdit.degree,
      institute: eduToEdit.institute,
      cgpa: eduToEdit.cgpa,
      joiningDate: eduToEdit.joiningDate,
      leavingDate: eduToEdit.leavingDate,
      currentlyStudying: eduToEdit.isCurrentlyStudying,
    });
    setEditEducationId(id);
  }
};



  const handleAddProject = () => {
  if (editProjectId !== null) {
    // Edit existing project
    const updatedProjects = projects.map((project) =>
      project.id === editProjectId
        ? {
            ...project,
            title: projectForm.title,
            description: projectForm.description,
            codeLink: projectForm.codeLink,
            viewLink: projectForm.viewLink,
            skills: projectForm.skills,
          }
        : project
    );
    setProjects(updatedProjects);
    setEditProjectId(null); // Reset edit mode
  } else {
    // Add new project
    const newProject = {
      id: Date.now(),
      title: projectForm.title,
      description: projectForm.description,
      codeLink: projectForm.codeLink,
      viewLink: projectForm.viewLink,
      skills: projectForm.skills,
    };
    setProjects([...projects, newProject]);
  }

  // Reset the form
  setProjectForm({
    title: '',
    description: '',
    codeLink: '',
    viewLink: '',
    skillInput: '',
    skills: [],
  });
};

const removeProjectSkill = (indexToRemove) => {
  setProjectForm({
    ...projectForm,
    skills: projectForm.skills.filter((_, index) => index !== indexToRemove)
  });
};

  
const handleEditProject = (id) => {
  const projectToEdit = projects.find((project) => project.id === id);
  if (projectToEdit) {
    setProjectForm({
      title: projectToEdit.title,
      description: projectToEdit.description,
      codeLink: projectToEdit.codeLink,
      viewLink: projectToEdit.viewLink,
      skillInput: '',
      skills: projectToEdit.skills,
    });
    setEditProjectId(id);
  }
};

// reset image

const resetImage = () => {
  setPreview(null);
  // Optionally clear the file input
  document.getElementById('fileInput').value = '';
};


  const addProjectSkill = () => {
    if (projectForm.skillInput.trim() !== '') {
      setProjectForm({
        ...projectForm,
        skills: [...projectForm.skills, projectForm.skillInput.trim()],
        skillInput: ''
      });
    }
  };
  
  const addSkill = () => {
    if (skill.trim() !== '') {
      setSkillList([...skillList, skill]);
      setSkill('');
    }
  };
  
  const removeSkill = (index) => {
    const updatedSkills = skillList.filter((_, i) => i !== index);
    setSkillList(updatedSkills);
  };

  // const [socialMedia, setSocialMedia] = useState({ platform: '', link: '' });
const [socialMediaList, setSocialMediaList] = useState([]);
  const addLink = () => {
  if (socialMedia.platform.trim() !== '' && socialMedia.link.trim() !== '') {
    setSocialMediaList([...socialMediaList, socialMedia]);
    setSocialMedia({ platform: '', link: '' }); // reset inputs
  }
};

const removeLink = (indexToRemove) => {
  setSocialMediaList(socialMediaList.filter((_, index) => index !== indexToRemove));
};

  
  const addAccomplishment = () => {
    if (accomplishment.trim() !== '') {
      setAccomplishmentList([...accomplishmentList, accomplishment]);
      setAccomplishment('');
    }
  };


  
  const removeAccomplishment = (index) => {
    const updatedAccomplishments = accomplishmentList.filter((_, i) => i !== index);
    setAccomplishmentList(updatedAccomplishments);
  };
  
  const handleDeleteExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };
  
  const handleDeleteEducation = (id) => {
    setEducations(educations.filter(edu => edu.id !== id));
  };
  
  const handleDeleteProject = (id) => {
    setProjects(projects.filter(proj => proj.id !== id));
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-green-300">





      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-green-500/30 bg-green-300 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="border-2 border-black bg-white px-3 py-1 text-lg font-bold text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            MyPortfolio
          </div>

          {/* Buttons Group */}
          <div className="flex items-center gap-3">
           
            <button className="border-2 border-black bg-white px-3 py-1 text-sm font-medium shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition">
              Help
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 pt-20 pb-12 px-4 md:w-full lg:w-4/5 xl:w-3/5 mx-auto">
        <div className="p-4 md:p-10">
          <h1 className="text-2xl font-bold mb-4 text-center">Create your Portfolio</h1>

          {/* Name section */}
          <h2 className="text-xl font-bold mb-3">Full Name</h2>
          <div className="name-section bg-white h-10 mt-3 flex justify-between items-center px-2 py-1 border-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="outline-none bg-transparent w-full"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <div>
              <button className="text-gray-500 hover:text-blue-600 transition duration-200 cursor-pointer">
                <PenSquare size={20} />
              </button>
            </div>
          </div>


          {/* Image section */}
<h2 className="text-xl font-bold py-3 mb-3">Upload Image</h2>

<div className="flex flex-row gap-5 w-full max-w-4xl mx-auto border-2 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
  {/* Upload Area */}
  <div
    className="w-1/2 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center p-5 text-center cursor-pointer bg-gray-50 hover:bg-gray-100"
    onDrop={handleDrop}
    onDragOver={handleDragOver}
    onClick={() => document.getElementById('fileInput').click()}
  >
    <input
      id="fileInput"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleImageChange}
    />
    <p className="text-gray-600">Drag & Drop or Click to Upload Image</p>
  </div>


{/* Preview Area */}
<div className="w-1/2 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-white relative">
  {preview ? (
    <>
      <img
        src={preview}
        alt="Preview"
        className="max-h-64 object-contain"
      />
      <button 
        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-red-100 text-red-500 hover:text-red-700"
        onClick={resetImage}
      >
        <X size={16} />
      </button>
    </>
  ) : (
    <p className="text-gray-400">Image preview will appear here</p>
  )}
</div>
</div>



          {/* Experience Section */}
          <div className="mt-4 experience-section ">
            <h2 className="text-xl font-bold mb-3 ">Experience</h2>

            <div className="w-full bg-white h-auto mb-5 border-2 border-black p-5 space-y-4 ">
              <input 
                type="text" 
                placeholder="Job Title" 
                className="border-2 w-full py-2 px-4 rounded" 
                value={experienceForm.jobTitle}
                onChange={(e) => setExperienceForm({...experienceForm, jobTitle: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Company Name" 
                className="border-2 w-full py-2 px-4 rounded" 
                value={experienceForm.companyName}
                onChange={(e) => setExperienceForm({...experienceForm, companyName: e.target.value})}
              />

              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[150px]">
                  <label className="block text-sm font-medium mb-1">Joining</label>
                  <input 
                    type="date" 
                    className="w-full border border-gray-300 px-3 py-2 rounded-sm text-gray-700 focus:outline-none" 
                    value={experienceForm.joiningDate}
                    onChange={(e) => setExperienceForm({...experienceForm, joiningDate: e.target.value})}
                  />
                </div>

                <div className="flex-1 min-w-[150px]">
                  <label className="block text-sm font-medium mb-1">Leaving</label>
                  <input 
                    type="date" 
                    className="w-full border border-gray-300 px-3 py-2 rounded-sm text-gray-700 focus:outline-none" 
                    value={experienceForm.leavingDate}
                    onChange={(e) => setExperienceForm({...experienceForm, leavingDate: e.target.value})}
                    disabled={experienceForm.currentlyWorking}
                  />
                </div>
              </div>

              <div>
                <label className="inline-flex items-center text-sm text-gray-700">
                  <input 
                    type="checkbox" 
                    className="mr-2 accent-black" 
                    checked={experienceForm.currentlyWorking}
                    onChange={(e) => setExperienceForm({...experienceForm, currentlyWorking: e.target.checked})}
                  />
                  Currently Working Here
                </label>
              </div>

              <div className="">
                <button 
                  className="border-2 py-1 px-2 bg-green-300 w-28 shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[5px_5px_0_0_rgba(0,0,0,1)]"
                  onClick={handleAddExperience}
                >
                  Add
                </button>
              </div>
            </div>
            
            {/* Experience Output */}
            <div className="grid gap-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="flex justify-between border-2 bg-white pr-1 p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <div className="pl-5">
                    <h1 className="text-lg font-bold">{exp.jobTitle}</h1>
                    <h2 className="font-semibold">{exp.companyName}</h2>
                  </div>
                  <div className="pr-5 flex flex-col items-end justify-end gap-4">
                    <p>{formatDate(exp.joiningDate)} - {exp.isCurrentlyWorking ? 'Present' : formatDate(exp.leavingDate)}</p>
                    <div>
                     <button 
  className="text-blue-600 hover:text-blue-800 px-3" 
  title="Edit"
  onClick={() => handleEditExperience(exp.id)}
>
  <PenSquare size={20} />
</button>


                      <button 
                        className="text-red-600 hover:text-red-800" 
                        title="Delete"
                        onClick={() => handleDeleteExperience(exp.id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-4 education-section">
            <h2 className="text-xl font-bold mb-3">Education</h2>
            
            <div className="w-full bg-white h-auto mb-5 border-2 p-5 space-y-4 border-black ">
              <input 
                type="text" 
                placeholder="Degree Name" 
                className="border-2 w-full py-2 px-4 rounded" 
                value={educationForm.degree}
                onChange={(e) => setEducationForm({...educationForm, degree: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Institute Name" 
                className="border-2 w-full py-2 px-4 rounded" 
                value={educationForm.institute}
                onChange={(e) => setEducationForm({...educationForm, institute: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Current CGPA" 
                className="border-2 w-full py-2 px-4 rounded" 
                value={educationForm.cgpa}
                onChange={(e) => setEducationForm({...educationForm, cgpa: e.target.value})}
              />

              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[150px]">
                  <label className="block text-sm font-medium mb-1">Joining</label>
                  <input 
                    type="date" 
                    className="w-full border border-gray-300 px-3 py-2 rounded-sm text-gray-700 focus:outline-none" 
                    value={educationForm.joiningDate}
                    onChange={(e) => setEducationForm({...educationForm, joiningDate: e.target.value})}
                  />
                </div>

                <div className="flex-1 min-w-[150px]">
                  <label className="block text-sm font-medium mb-1">Leaving</label>
                  <input 
                    type="date" 
                    className="w-full border border-gray-300 px-3 py-2 rounded-sm text-gray-700 focus:outline-none" 
                    value={educationForm.leavingDate}
                    onChange={(e) => setEducationForm({...educationForm, leavingDate: e.target.value})}
                    disabled={educationForm.currentlyStudying}
                  />
                </div>
              </div>

              <div>
                <label className="inline-flex items-center text-sm text-gray-700">
                  <input 
                    type="checkbox" 
                    className="mr-2 accent-black" 
                    checked={educationForm.currentlyStudying}
                    onChange={(e) => setEducationForm({...educationForm, currentlyStudying: e.target.checked})}
                  />
                  Currently Studying
                </label>
              </div>

              <div className="">
                <button 
                  className="border-2 py-1 px-2 bg-green-300 w-28 shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[5px_5px_0_0_rgba(0,0,0,1)]"
                  onClick={handleAddEducation}
                >
                  Add
                </button>
              </div>
            </div>
            
            {/* Education Output */}
            <div className="grid gap-5">
              {educations.map((edu) => (
                <div key={edu.id} className="flex justify-between border-2 bg-white pr-1 p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <div className="pl-5">
                    <h1 className="text-lg font-bold">{edu.degree}</h1>
                    <h2 className="font-semibold">{edu.institute}</h2>
                  </div>
                  <div className="pr-5 flex flex-col items-end justify-end gap-4">
                    <p>{formatDate(edu.joiningDate)} - {edu.isCurrentlyStudying ? 'Present' : formatDate(edu.leavingDate)}</p>
                    <div>
                      <button className="text-blue-600 hover:text-blue-800 px-3" title="Edit"  onClick={() => handleEditEducation(edu.id)}>
                        <PenSquare size={20}  />
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-800" 
                        title="Delete"
                        onClick={() => handleDeleteEducation(edu.id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Section */}
          <h2 className="text-xl font-bold mt-6 mb-5">Project</h2>
          <div className="bg-white p-5 border-2  border-black ">
            <input 
              type="text" 
              className="w-full border-2 px-5 mt-2 mb-2 py-1" 
              placeholder="Project Title" 
              value={projectForm.title}
              onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
            />
            <textarea 
              className="w-full mt-2 mb-2 border-2 px-5 py-1" 
              placeholder="Description in max-100 words" 
              value={projectForm.description}
              onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
            />
            <input 
              type="text" 
              className="w-full mt-2 mb-2 border-2 px-5 py-1" 
              placeholder="Optional: Enter your project source code link" 
              value={projectForm.codeLink}
              onChange={(e) => setProjectForm({...projectForm, codeLink: e.target.value})}
            />
            <input 
              type="text" 
              className="w-full mt-2 mb-2 border-2 px-5 py-1" 
              placeholder="Optional: Enter your project view link" 
              value={projectForm.viewLink}
              onChange={(e) => setProjectForm({...projectForm, viewLink: e.target.value})}
            />
            <div className="flex gap-5 mb-4 mt-2">
              <input 
                type="text" 
                className="border-2 py-1 px-5 flex-1" 
                placeholder="Skills" 
                value={projectForm.skillInput}
                onChange={(e) => setProjectForm({...projectForm, skillInput: e.target.value})}
              />
              <button 
                className="bg-green-200 hover:bg-green-400 rounded-xl px-3 border-2"
                onClick={addProjectSkill}
              >
                <Plus size={16} />
              </button>
            </div>
            
            {/* <div className="flex flex-wrap gap-3 text-xs mb-2 mt-2">
              {projectForm.skills.map((skill, index) => (
                <p key={index} className="py-1 px-3 border-2 bg-green-200 inline-block">{skill}</p>
              ))}
            </div> */}
            <div className="flex flex-wrap gap-3 text-xs mb-2 mt-2">
  {projectForm.skills.map((skill, index) => (
    <div 
      key={index} 
      className="flex items-center gap-2 p-1 border-2 bg-green-200 rounded shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
    >
      <p className="px-2">{skill}</p>
      <button 
        className="text-red-500 hover:text-red-700"
        onClick={() => removeProjectSkill(index)} // You'll define this function
      >
        <X size={16} />
      </button>
    </div>
  ))}
</div>

            
            <button 
              className="border-2 py-1 px-2 mt-5 bg-green-300 w-28 shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[5px_5px_0_0_rgba(0,0,0,1)]"
              onClick={handleAddProject}
            >
              Add
            </button>
          </div>
          
          {/* Project Output */}
          <div className="gap-7">
            {projects.map((project) => (
              <div key={project.id} className="mt-5 w-full border-2 bg-white p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <div className="flex justify-between">
                  <h1 className="font-bold">{project.title}</h1>
                  <div>
                    <button className="text-blue-600 hover:text-blue-800 px-3" title="Edit" 
                     onClick={() => handleEditProject(project.id)}>
                      <PenSquare size={20} />
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
                
                <p className="mt-2 mb-2 text-xs">{project.description}</p>
                <hr />
                <div className="mt-2 mb-2 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <p key={index} className="inline-block border bg-green-300 px-2 py-0.5 text-xs">{skill}</p>
                  ))}
                </div>
                <hr />
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.codeLink && (
                    <p className="inline-block border bg-green-400 px-2 py-0.5 text-xs">Code</p>
                  )}
                  {project.viewLink && (
                    <p className="inline-block border bg-green-400 px-2 py-0.5 text-xs">View</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* About section */}
          <h2 className="text-xl font-bold mb-3 mt-6 text-gray-800">About Me</h2>
          <div className="about-section bg-white border-2 flex items-start px-4 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] relative">
            <textarea 
              placeholder="Enter the About!" 
              className="outline-none bg-transparent w-full resize-y min-h-24 max-h-40 pr-10 pl-2 text-gray-800 text-sm leading-relaxed placeholder:text-gray-400"
              maxLength="300"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            <div className="absolute right-2 top-5 text-gray-500 hover:text-blue-600 cursor-pointer">
              <PenSquare size={20} />
            </div>
          </div>

          {/* Skill section */}
          <div className="mt-4 mb-4 skill-section">
            <h2 className="text-xl font-bold mb-2">Skill Set</h2>
            <div className="skill-section bg-white mb-3 border-2 border-black  flex justify-between items-center px-4 py-2">
              <input 
                type="text" 
                placeholder="Add Skills" 
                className="outline-none bg-transparent w-full pr-3" 
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              />
              <button 
                className="ml-2 w-5 h-5 flex items-center justify-center rounded-full border-2 hover:bg-green-400 transition duration-200"
                onClick={addSkill}
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              {skillList.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-1 border-2 bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <p className="py-1 px-3 bg-white text-center">{item}</p>
                  <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeSkill(index)}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-4 mb-4 social-media-section">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Social Media</h2>
            <div className="bg-white border-2 p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <select 
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white text-sm text-gray-800 outline-none focus:ring-2 focus:ring-green-200 focus:border-green-300 transition duration-200 hover:border-green-300 cursor-pointer"
                  value={socialMedia.platform}
                  onChange={(e) => setSocialMedia({...socialMedia, platform: e.target.value})}
                >
                  <option value="" disabled>Select Platform</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="GitHub">GitHub</option>
                  <option value="Other">Other</option>
                </select>
                <input 
                  type="url" 
                  placeholder="Enter profile link" 
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-800 outline-none bg-white placeholder:text-gray-400 placeholder:italic focus:ring-2 focus:ring-green-300 transition"
                  value={socialMedia.link}
                  onChange={(e) => setSocialMedia({...socialMedia, link: e.target.value})}
                />

                 <button 
              className="ml-2 w-5 h-5 flex items-center justify-center rounded-full border-2 hover:bg-green-400 transition duration-200"
              onClick={addLink}
            >
              <Plus size={16} />
            </button>
              </div>


{/* Output of social media */}
{socialMediaList.length > 0 && (
  <div className="mt-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Added Links:</h3>
    <div className="flex flex-wrap gap-4">
      {socialMediaList.map((item, index) => (
        <div 
          key={index} 
          className="flex items-center gap-2 p-1 border-2 bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
        >
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="py-1 px-3 bg-white text-sm font-medium text-green-600 underline hover:text-green-800"
          >
            {item.platform}
          </a>
          <button 
            className="text-red-500 hover:text-red-700"
            onClick={() => removeLink(index)}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  </div>
)}


            </div>
          </div>

          {/* Accomplishment section */}
          <h2 className="text-xl font-bold mb-2 text-gray-800">Accomplishment</h2>
          <div className="skill-section bg-white mb-3 mt-2 border-2 border-black  flex justify-between items-center px-4 py-1">
            <input 
              type="text" 
              placeholder="Accomplishment" 
              className="outline-none bg-transparent w-full pr-3"
              value={accomplishment}
              onChange={(e) => setAccomplishment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addAccomplishment()}
            />
           <button 
              className="ml-2 w-5 h-5 flex items-center justify-center rounded-full border-2 hover:bg-green-400 transition duration-200"
              onClick={addAccomplishment}
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {accomplishmentList.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-2 border-2 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <p className="py-1 px-3 bg-white">{item}</p>
                <button 
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeAccomplishment(index)}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>

 
          </div>
   

          </main>

      {/* Footer */}
<footer className="bottom-0 left-0 z-50 w-full border-t border-green-500/30 bg-green-300 backdrop-blur-md">
  <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3">
    <div className="flex items-center gap-3">
      <button className="border-2 border-black bg-white px-3 py-1 text-sm font-medium shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition">
        Preview
      </button>
      <button className="border-2 border-black bg-white px-3 py-1 text-sm font-medium shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition">
        Publish
      </button>
      <button className="border-2 border-black bg-white px-3 py-1 text-sm font-medium shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition">
        Delete Account
      </button>
    </div>
  </div>
</footer>

    </div>
  );

};



//export default PortfolioBuilder;
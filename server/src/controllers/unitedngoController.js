// require("../models/database");
import Contact from "../models/contactModel.js";
import Issue from "../models/issueModel.js";
import NGO from "../models/ngoModel.js";
import Campaign from "../models/campaignModel.js";
import CompletedProject from "../models/completedProjectModel.js";
import OngoingProject from "../models/ongoingProjectModel.js";
import UpcomingProject from "../models/upcomingProjectModel.js";
import Testimonial from "../models/testimonialModel.js";
 const submitQuery=async(req,res)=>{
    try {
        const { name, email, message } = req.body;
        const newMessage = new Contact({ name, email, message });
        await newMessage.save();
        return res.json({
            error:false,
            newMessage,
            message: "Message received"
        });
      } catch (error) {
        // res.status(500).json({ success: false, error: err.message });
        return res.status(400).json({
            error:true,
            message:"Internal server error"
        })
      }
}


const raiseIssue=async(req,res)=>{
  try {
    const { name, email, category, message, location } = req.body;
    console.log(req.body);
    const mediaUrls = req.files.map(file => ({
      public_id: file.filename,
      url: file.path,
      type: file.mimetype.includes('image')
        ? 'image'
        : file.mimetype.includes('video')
        ? 'video'
        : 'pdf',
    }));

    const issue = new Issue({
      name,
      email,
      category,
      message,
      location,
      mediaUrls,
    });

    await issue.save();
    res.status(201).json({ message: 'Issue submitted successfully!' });
    console.log("Issue submitted successfully!")
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
}


const getNGOs=async(req,res)=>{
  try {
    const ngos = await NGO.find(); // Fetches all NGOs
    res.status(200).json(ngos);    // Sends them as JSON
  } catch (error) {
    console.error('Error fetching NGOs:', error);
    res.status(500).json({ message: 'Server error while fetching NGOs' });
  }
}

const getNGObyId=async(req,res)=>{
  try{
    const { id } = req.params;
    const ngo = await NGO.findById(id);
    if (!ngo) {
      return res.status(404).json({ message: "NGO not found" });
    }
    res.status(200).json(ngo);
  }catch{
    console.error("Error fetching NGO by ID:", error);
    res.status(500).json({ message: "Server error" });
  }
}

const getOngoingProjects=async(req,res)=>{
  try {
    const projects = await OngoingProject.find(); // Fetches all ongoing projects
    res.status(200).json(projects);    // Sends them as JSON
  } catch (error) {
    console.error('Error fetching ongoing projects:', error);
    res.status(500).json({ message: 'Server error while fetching ongoing projects' });
  }
}

const getUpcomingProjects=async(req,res)=>{
  try {
    const projects = await UpcomingProject.find(); // Fetches all ongoing projects
    res.status(200).json(projects);    // Sends them as JSON
  } catch (error) {
    console.error('Error fetching upcoming projects:', error);
    res.status(500).json({ message: 'Server error while fetching upcoming projects' });
  }
}
const getNgoCompletedProjects=async(req,res)=>{
  try {
    const { id } = req.params;

    const ngo = await NGO.findById(id).populate("projects.completed");

    if (!ngo) {
      return res.status(404).json({ message: "NGO not found" });
    }

    res.status(200).json({ completed: ngo.projects.completed });
  } catch (error) {
    console.error("Error fetching completed projects:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const getNgoOngoingProjects=async(req,res)=>{
  try {
    const { id } = req.params;

    const ngo = await NGO.findById(id).populate("projects.ongoing");

    if (!ngo) {
      return res.status(404).json({ message: "NGO not found" });
    }

    res.status(200).json({ ongoing: ngo.projects.ongoing });
  } catch (error) {
    console.error("Error fetching ongoing projects:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const getNgoUpcomingProjects=async(req,res)=>{
  try {
    const { id } = req.params;

    const ngo = await NGO.findById(id).populate("projects.upcoming");

    if (!ngo) {
      return res.status(404).json({ message: "NGO not found" });
    }

    res.status(200).json({ upcoming: ngo.projects.upcoming});
  } catch (error) {
    console.error("Error fetching upcoming projects:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
// Import your Campaign model

const submitCampaign = async (req, res) => {
  try {
    const {
      title,
      ngoName,
      description,
      state,
      city,
      startDate,
      endDate,
      targetImpact,
      fundraisingTarget,
      ngoEmail,
      contactNumber,
      agreedToTerms,
    } = req.body;

    // Make sure files are uploaded
    if (!req.files || !req.files.banner || !req.files.document) {
      return res.status(400).json({ error: "Banner and document are required" });
    }

    const bannerUrl = req.files.banner[0].filename;
    const documentUrl = req.files.document[0].filename;

    const newCampaign = new Campaign({
      title,
      ngoName,
      description,
      state,
      city,
      startDate,
      endDate,
      targetImpact,
      fundraisingTarget,
      ngoEmail,
      contactNumber,
      agreedToTerms,
      collectedAmount: 0,
      bannerUrl,   // Ensure you're assigning the right field
      documentUrl, // Same here
    });

    await newCampaign.save();
    res.status(201).json({ message: "Campaign uploaded successfully", campaign: newCampaign });
  } catch (error) {
    console.error("Error submitting campaign:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};


//get all campaign
const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().sort({ createdAt: -1 });
    res.status(200).json(campaigns);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch campaigns' });
  }
};
// controllers/campaignController.js (continued)

const donateToCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const { collectedAmount } = req.body;
    console.log("Campaign ID:", id);
    console.log("Received collectedAmount:", collectedAmount);

    if (collectedAmount == null || isNaN(collectedAmount)) {
      return res.status(400).json({ message: "Invalid collectedAmount" });
    }

    const campaign = await Campaign.findByIdAndUpdate(
      id,
      { $set: { collectedAmount } },
      { new: true }
    );

    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    res.json(campaign);
  } catch (err) {
    console.error("Error updating campaign:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const submitReview=async(req,res)=>{
  try {
    const { name, city, state, review } = req.body;

    if (!name || !city || !state || !review) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newTestimonial = new Testimonial({ name, city, state, review });
    await newTestimonial.save();

    res.status(201).json({ message: "Testimonial submitted successfully!" });
  } catch (error) {
    console.error("Error submitting testimonial:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
}

const getReviews=async(req,res)=>{
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 }).limit(3);
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
}

export {submitQuery,getReviews,submitReview,raiseIssue,getNGOs,getNGObyId,getOngoingProjects,getUpcomingProjects,getNgoCompletedProjects,getNgoOngoingProjects,getNgoUpcomingProjects,submitCampaign,getAllCampaigns,donateToCampaign}

// async function insertOngoingProjectData(){
//   try{
//     const projectsnew=await OngoingProject.insertMany([
//       {
//         "title": "Tech Bus: Mobile Learning Unit",
//         "description": "Running a mobile classroom across 50 villages to teach STEM.",
//         "startDate": "2023-06-01",
//         "endDate": "2024-12-01",
//         "ngo": "67fb7afb32bfb7f2655033e8"
//       },
//       {
//         "title": "Adhya Art Fellowship",
//         "description": "Training student-artists to use creative methods for community learning.",
//         "startDate": "2023-10-01",
//         "endDate": "2024-10-01",
//         "ngo": "67fb7afb32bfb7f2655033e9"
//       },
//       {
//         "title": "AeroLabs: School Engagement",
//         "description": "Building low-cost aircraft models with school students across Gujarat.",
//         "startDate": "2024-02-01",
//         "endDate": "2024-12-31",
//         "ngo": "67fb7afb32bfb7f2655033ea"
//       },
//       {
//         "title": "Innovation Hubs Expansion",
//         "description": "Setting up creativity labs in 100 rural government schools.",
//         "startDate": "2023-09-01",
//         "endDate": "2024-10-01",
//         "ngo": "67fb7afb32bfb7f2655033eb"
//       },
//       {
//         "title": "Model School Program",
//         "description": "Developing 10 model government schools with full infrastructure.",
//         "startDate": "2023-08-01",
//         "endDate": "2024-12-31",
//         "ngo": "67fb7afb32bfb7f2655033ec"
//       }
      
      
           
//     ]
//     )
//     const groupedByNGO = {};

//     projectsnew.forEach((project) => {
//       const ngoId = project.ngo.toString();
//       if (!groupedByNGO[ngoId]) groupedByNGO[ngoId] = [];
//       groupedByNGO[ngoId].push(project._id);
//     });

//     // Update each NGO to push the project IDs into their completedProjects array
//     const updatePromises = Object.entries(groupedByNGO).map(([ngoId, projectIds]) =>
//       NGO.findByIdAndUpdate(
//         ngoId,
//         { $push: { "projects.ongoing": { $each: projectIds } } },
//         { new: true }
//       )
//     );

//     await Promise.all(updatePromises);

//     console.log("Ongoing projects added and linked to NGOs!");
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// insertOngoingProjectData();
// async function insertUpcomingProjectData(){
//   try{
//     const projectsnewfor=await UpcomingProject.insertMany([
//       {
//         "title": "Youth4India Leadership Program",
//         "description": "Grooming youth to become social changemakers in rural tech initiatives.",
//         "startDate": "2025-05-01",
//         "endDate": "2025-06-15",
//         "ngo": "67fb7afb32bfb7f2655033e8",
//         "volunteers": []
//       },
//       {
//         "title": "Compassion Curriculum Launch",
//         "description": "Introducing a value-based curriculum in 100 schools across Gujarat.",
//         "startDate": "2025-01-15",
//         "endDate": "2025-03-30",
//         "ngo": "67fb7afb32bfb7f2655033e9",
//         "volunteers": []
//       },
//       {
//         "title": "National Aeronautics Innovation Challenge",
//         "description": "A tech challenge for student teams to design sustainable flying machines.",
//         "startDate": "2025-07-10",
//         "endDate": "2025-08-10",
//         "ngo": "67fb7afb32bfb7f2655033ea",
//         "volunteers": []
//       },
//       {
//         "title": "STEM Caravan India",
//         "description": "A traveling STEM caravan with 3D printers, IoT, and robotics demos.",
//         "startDate": "2025-03-10",
//         "endDate": "2025-04-15",
//         "ngo": "67fb7afb32bfb7f2655033eb",
//         "volunteers": []
//       },
//       {
//         "title": "Eco-Education Challenge",
//         "description": "An interschool competition to develop eco-friendly school solutions.",
//         "startDate": "2025-02-15",
//         "endDate": "2025-03-15",
//         "ngo": "67fb7afb32bfb7f2655033ec",
//         "volunteers": []
//       }
      
      
      

      
      
      
           
//     ]
//     )
//     const groupedByNGO = {};

//     projectsnewfor.forEach((project) => {
//       const ngoId = project.ngo.toString();
//       if (!groupedByNGO[ngoId]) groupedByNGO[ngoId] = [];
//       groupedByNGO[ngoId].push(project._id);
//     });

//     // Update each NGO to push the project IDs into their completedProjects array
//     const updatePromises = Object.entries(groupedByNGO).map(([ngoId, projectIds]) =>
//       NGO.findByIdAndUpdate(
//         ngoId,
//         { $push: { "projects.upcoming": { $each: projectIds } } },
//         { new: true }
//       )
//     );

//     await Promise.all(updatePromises);

//     console.log("Ongoing projects added and linked to NGOs!");
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// insertUpcomingProjectData();
// async function insertProjectData(){
//   try{
//     const projectsnew=await CompletedProject.insertMany([
//       {
//         "title": "Kalam Innovation Lab",
//         "description": "Built a lab for underprivileged students to experiment with science and robotics.",
//         "startDate": "2021-01-10",
//         "endDate": "2021-06-20",
//         "ngo": "67fb7afb32bfb7f2655033e8"
//       },
//       {
//         "title": "Rural Solar Electrification Drive",
//         "description": "Provided solar panels to 100+ homes in off-grid villages.",
//         "startDate": "2020-05-01",
//         "endDate": "2020-08-30",
//         "ngo": "67fb7afb32bfb7f2655033e8"
//       },
//       {
//         "title": "Digital Dreams Campaign",
//         "description": "Distributed tablets to 300 students during COVID-19 lockdown for online learning.",
//         "startDate": "2020-10-15",
//         "endDate": "2020-12-15",
//         "ngo": "67fb7afb32bfb7f2655033e8"
//       },
//       {
//         "title": "Gift Compassion 2021",
//         "description": "Connected urban and rural children via storytelling and empathy workshops.",
//         "startDate": "2021-11-01",
//         "endDate": "2021-12-20",
//         "ngo": "67fb7afb32bfb7f2655033e9"
//       },
//       {
//         "title": "Science Express Program",
//         "description": "A 3-month mobile science fair that toured 20 schools.",
//         "startDate": "2022-02-10",
//         "endDate": "2022-05-10",
//         "ngo": "67fb7afb32bfb7f2655033e9"
//       },
//       {
//         "title": "Digital Storytelling for Kids",
//         "description": "Taught children how to create digital comics and stories to express social issues.",
//         "startDate": "2021-07-01",
//         "endDate": "2021-08-15",
//         "ngo": "67fb7afb32bfb7f2655033e9"
//       },
//       {
//         "title": "Wings of Wisdom",
//         "description": "Seminar series across universities on careers in aerospace.",
//         "startDate": "2021-03-01",
//         "endDate": "2021-04-15",
//         "ngo": "67fb7afb32bfb7f2655033ea"
//       },
//       {
//         "title": "Drone Workshop for Students",
//         "description": "Taught drone basics and assembly to 200 engineering students.",
//         "startDate": "2022-08-10",
//         "endDate": "2022-09-30",
//         "ngo": "67fb7afb32bfb7f2655033ea"
//       },
//       {
//         "title": "Women in Aviation",
//         "description": "A mentorship program for girls aspiring to become aerospace engineers.",
//         "startDate": "2020-05-01",
//         "endDate": "2020-08-01",
//         "ngo": "67fb7afb32bfb7f2655033ea"
//       },
//       {
//         "title": "Lab on Wheels",
//         "description": "Science vans delivered experiments to rural government schools.",
//         "startDate": "2021-06-01",
//         "endDate": "2021-09-01",
//         "ngo": "67fb7afb32bfb7f2655033eb"
//       },
//       {
//         "title": "Young Innovators Bootcamp",
//         "description": "Summer bootcamp for hands-on learning and invention in Bangalore.",
//         "startDate": "2022-04-15",
//         "endDate": "2022-05-15",
//         "ngo": "67fb7afb32bfb7f2655033eb"
//       },
//       {
//         "title": "Creative Science Festival",
//         "description": "District-wide science competition for low-income school students.",
//         "startDate": "2020-11-01",
//         "endDate": "2020-12-15",
//         "ngo": "67fb7afb32bfb7f2655033eb"
//       },{
//         "title": "School Infrastructure Upgrade",
//         "description": "Renovated 15 classrooms with digital boards and new benches.",
//         "startDate": "2021-04-01",
//         "endDate": "2021-07-30",
//         "ngo": "67fb7afb32bfb7f2655033ec"
//       },
//       {
//         "title": "Green Campus Drive",
//         "description": "Planted 200 trees and developed vertical gardens in schools.",
//         "startDate": "2022-01-10",
//         "endDate": "2022-03-10",
//         "ngo": "67fb7afb32bfb7f2655033ec"
//       },
//       {
//         "title": "Teacher Tech Training",
//         "description": "Trained 300 teachers in using smart teaching aids and Zoom tools.",
//         "startDate": "2020-12-01",
//         "endDate": "2021-02-01",
//         "ngo": "67fb7afb32bfb7f2655033ec"
//       }
//     ]
//     )
//     const groupedByNGO = {};

//     projectsnew.forEach((project) => {
//       const ngoId = project.ngo.toString();
//       if (!groupedByNGO[ngoId]) groupedByNGO[ngoId] = [];
//       groupedByNGO[ngoId].push(project._id);
//     });

//     // Update each NGO to push the project IDs into their completedProjects array
//     const updatePromises = Object.entries(groupedByNGO).map(([ngoId, projectIds]) =>
//       NGO.findByIdAndUpdate(
//         ngoId,
//         { $push: { "projects.completed": { $each: projectIds } } },
//         { new: true }
//       )
//     );

//     await Promise.all(updatePromises);

//     console.log("Completed projects added and linked to NGOs!");
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// insertProjectData();
// async function insertNgoData(){
//   try{
//     await NGO.insertMany([
//       {
//         "name": "A.P.J. Abdul Kalam Centre",
//         "description": "Dr A P J Abdul Kalam Centre is a non profit organization located primarily in India with branches spread across the country It was formed in the memory of Dr A P J Abdul Kalam 11th President of India in 2015 The organization is founded by Srijan Pal Singh an author social entrepreneur and public speaker He also worked as the Officer on Special Duty and Advisor for Science Technology and Policy to Dr A P J Abdul Kalam between 2009 and 2015 The organization aspires to create a sustainable and liva",
//         "city": "Warangal",
//         "state": "Telangana",
//         "theme": [
//           "Environment",
//           "Technology"
//         ],
//         "contactEmail": "contact@a.p.j.abdulkalamcentre.org",
//         "phoneNumber": "+91-8864467544",
//         "website": "https://en.wikipedia.org/wiki/A.P.J._Abdul_Kalam_Centre",
//         "address": "326 Indira Nagar, Warangal, Telangana - 300112",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=A.P.J.+Abdul+Kalam+Centre",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Adhya Educational Society",
//         "description": "Adhya Educational Society AES is an education non profit organisation based in Hyderabad Telangana in India Through Adhya Academy and Project Gift Compassion AES supports and educates underprivileged children through innovative pedagogy in Science Education Mathematics Education and Language development Adhya participated in The Story of Light Festival in Goa from 15 18 January 2015 Project Gift Compassion is an outreach program of Adhya Educational Society The project engages schools children t",
//         "city": "Ahmedabad",
//         "state": "Gujarat",
//         "theme": [
//           "Child Welfare",
//           "Animal Welfare"
//         ],
//         "contactEmail": "contact@adhyaeducationalsociety.org",
//         "phoneNumber": "+91-8733134450",
//         "website": "https://en.wikipedia.org/wiki/Adhya_Educational_Society",
//         "address": "997 MG Road, Ahmedabad, Gujarat - 987800",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Adhya+Educational+Society",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Aeronautical Society of India",
//         "description": "Aeronautical Society of India AeSI is the principal Society in India serving the professions in areas of aeronautics aerospace and aviation Its stated primary purpose is to advance the sciences engineering technology and management of aerospace aeronautics and aviation and to foster and promote the professionalism of those engaged in these pursuits The Aeronautical Society of India a professional body devoted to advancement of aeronautical sciences and engineering in India was founded in 1948 Pa",
//         "city": "Ahmedabad",
//         "state": "Gujarat",
//         "theme": [
//           "Women's Empowerment"
//         ],
//         "contactEmail": "contact@aeronauticalsocietyofindia.org",
//         "phoneNumber": "+91-8553688399",
//         "website": "https://en.wikipedia.org/wiki/Aeronautical_Society_of_India",
//         "address": "111 MG Road, Ahmedabad, Gujarat - 124041",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Aeronautical+Society+of+India",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Agastya International Foundation",
//         "description": "Agastya International Foundation Agastya is an Indian education trust and non profit organization based in Bangalore India whose mission is to spark curiosity Aah nurture creativity Aha and build confidence Ha Ha among economically disadvantaged children and teachers in India A team of scientists educators and entrepreneurs led by Ramji Raghavan founded Agastya in 1999 Agastya s founders include the late KV Raghavan former chairman of Engineers India Limited and Dr PK Iyengar former chairman of ",
//         "city": "New Delhi",
//         "state": "Delhi",
//         "theme": [
//           "Environment"
//         ],
//         "contactEmail": "contact@agastyainternationalfoundation.org",
//         "phoneNumber": "+91-9261660420",
//         "website": "https://en.wikipedia.org/wiki/Agastya_International_Foundation",
//         "address": "854 Indira Nagar, New Delhi, Delhi - 241387",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Agastya+International+Foundation",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Ahmedabad Education Society",
//         "description": "Ahmadabad Education Society is a premier educational trust which has founded many schools and colleges in Ahmedabad Gujarat India One of the largest academic trusts in Gujarat consisting of 25 institutions providing education to more than 10 000 college and 3 000 school going children and hostel facilities to 1 000 male and 450 female students Ahmedabad Education Society was established in 1935 The society was established under the leadership of Ganesh Mavlankar Kasturbhai Lalbhai and Amritlal H",
//         "city": "Hyderabad",
//         "state": "Telangana",
//         "theme": [
//           "Environment"
//         ],
//         "contactEmail": "contact@ahmedabadeducationsociety.org",
//         "phoneNumber": "+91-8458296527",
//         "website": "https://en.wikipedia.org/wiki/Ahmedabad_Education_Society",
//         "address": "726 MG Road, Hyderabad, Telangana - 515157",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Ahmedabad+Education+Society",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Akancha Srivastava Foundation",
//         "description": "Akancha Srivastava Foundation is the founder of Akancha Against Harassment The Foundation was formed in 2017 It is an 80G certified non profit organization in India that works for the education and empowerment of people by imparting the knowledge of cyber safety Akancha Srivastava founded the non profit organisation in 2017 after a personal experience that involved severe cyber stalking She decided to take up this cause build India s movement against cyber harassment Foundation has conducted wor",
//         "city": "Howrah",
//         "state": "West Bengal",
//         "theme": [
//           "Environment",
//           "Technology"
//         ],
//         "contactEmail": "contact@akanchasrivastavafoundation.org",
//         "phoneNumber": "+91-8150240656",
//         "website": "https://en.wikipedia.org/wiki/Akancha_Srivastava_Foundation",
//         "address": "880 Park Street, Howrah, West Bengal - 735766",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Akancha+Srivastava+Foundation",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "All India Federation of Tax Practitioners",
//         "description": "The All India Federation of Tax Practitioners AIFTP is an association of Advocates Chartered Accountants and Tax Practitioners in India The Federation was established in 1976 It includes 125 tax associations and 7000 individual members including leading senior advocates and Chartered Accountants It is an association formed by those who perform as taxation law practitioners of India The body was an initiative of Nanabhoy Palkhivala Its head office is in Mumbai It organised a free helpline for tra",
//         "city": "New Delhi",
//         "state": "Delhi",
//         "theme": [
//           "Child Welfare",
//           "Animal Welfare",
//           "Women's Empowerment"
//         ],
//         "contactEmail": "contact@allindiafederationoftaxpractitioners.org",
//         "phoneNumber": "+91-7060597607",
//         "website": "https://en.wikipedia.org/wiki/All_India_Federation_of_Tax_Practitioners",
//         "address": "496 Park Street, New Delhi, Delhi - 155679",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=All+India+Federation+of+Tax+Practitioners",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "All India Management Association",
//         "description": "All India Management Association AIMA is a national apex body of the management profession in India It is based on a federation of 67 Local Management Associations LMAs including Qatar Indian Management Association and Mauritius Management Association It was established in 1957 Among its activities AIMA conducts the Management Aptitude Test MAT used by over 600 business schools across India is represented in national forums and organisations and awards annual awards AIMA was established in 1957 ",
//         "city": "Bangalore",
//         "state": "Karnataka",
//         "theme": [
//           "Animal Welfare",
//           "Disaster Relief",
//           "Child Welfare"
//         ],
//         "contactEmail": "contact@allindiamanagementassociation.org",
//         "phoneNumber": "+91-7256014763",
//         "website": "https://en.wikipedia.org/wiki/All_India_Management_Association",
//         "address": "163 Indira Nagar, Bangalore, Karnataka - 994080",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=All+India+Management+Association",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Amalthea (technical summit)",
//         "description": "Amalthea is the annual technical summit of Indian Institute of Technology Gandhinagar It remains the only technical summit in the country which is completely student driven The first summit was organised in 2010 with the belief in spreading knowledge and since then it has been organised every year during the fall The summit s tagline is prosperity through technology The summit started off with only the Conclave and now has grown into a wide array of activities which include the Conclave Symposiu",
//         "city": "Bangalore",
//         "state": "Karnataka",
//         "theme": [
//           "Child Welfare"
//         ],
//         "contactEmail": "contact@amalthea(technicalsummit).org",
//         "phoneNumber": "+91-7056604344",
//         "website": "https://en.wikipedia.org/wiki/Amalthea_(technical_summit)",
//         "address": "445 Park Street, Bangalore, Karnataka - 366593",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Amalthea+(technical+summit)",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Animal Aid Unlimited",
//         "description": "Animal Aid Unlimited or AAU founded in 2002 is an Indian animal rescue organization based in Udaipur city of Rajasthan which rescues and treats animals that are sick injured stuck or in need of urgent medical aid and attention They gained more popularity worldwide after they started posting videos of their rescue on their YouTube channel Animal Aid Unlimited India As of January 2020 their YouTube channel has over 4 9 million subscribers Some of the most viral videos of the channel are Wounded an",
//         "city": "Udaipur",
//         "state": "Rajasthan",
//         "theme": [
//           "Animal Welfare",
//           "Environment",
//           "Women's Empowerment"
//         ],
//         "contactEmail": "contact@animalaidunlimited.org",
//         "phoneNumber": "+91-8206070084",
//         "website": "https://en.wikipedia.org/wiki/Animal_Aid_Unlimited",
//         "address": "402 MG Road, Udaipur, Rajasthan - 334957",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Animal+Aid+Unlimited",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Apnalaya",
//         "description": "Apnalaya Our Space in English is a non profit organization founded in 1973 by Tom Holland who was then the Australian Consul General in Bombay At that time it was called Holland Welfare Centre which was a day care centre for labourer s children in Nariman Point the place where National Centre for the Performing Arts NCPA stands today Apnalaya has been awarded the Guidestar India Gold as one of the most transparent NGO in 2016 Sachin Tendulkar s voice has been a big support to Apnalaya",
//         "city": "Bangalore",
//         "state": "Karnataka",
//         "theme": [
//           "Technology",
//           "Disaster Relief",
//           "Environment"
//         ],
//         "contactEmail": "contact@apnalaya.org",
//         "phoneNumber": "+91-9060679575",
//         "website": "https://en.wikipedia.org/wiki/Apnalaya",
//         "address": "112 MG Road, Bangalore, Karnataka - 551710",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Apnalaya",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Association for Democratic Reforms",
//         "description": "The Association for Democratic Reforms ADR is an Indian non partisan non governmental organization which works in the area of electoral and political reforms Along with National Election Watch NEW ADR is striving to bring transparency and accountability in Indian politics and reducing the influence of money and muscle power in elections ADR came into existence in 1999 when a group of Professors from the Indian Institute of Management IIM Ahmedabad and Bangalore filed a Public Interest Litigation",
//         "city": "Warangal",
//         "state": "Telangana",
//         "theme": [
//           "Education",
//           "Child Welfare"
//         ],
//         "contactEmail": "contact@associationfordemocraticreforms.org",
//         "phoneNumber": "+91-7971248121",
//         "website": "https://en.wikipedia.org/wiki/Association_for_Democratic_Reforms",
//         "address": "862 MG Road, Warangal, Telangana - 243173",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Association+for+Democratic+Reforms",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Association for Social and Environmental Development",
//         "description": "The Association for Social and Environmental Development ASED is an Indian non profit organisation headquartered in Kolkata West Bengal India and registered under Section 25 of the Indian Companies Act It promotes nature conservation and an ecologically resilient society and undertakes programmes for school students ASED has worked with over 200 schools across the country It has three flagship programmes the Green Rhinos programme Nature Smart and Nature Club These programmes are conducted under",
//         "city": "Mumbai",
//         "state": "Maharashtra",
//         "theme": [
//           "Technology",
//           "Education"
//         ],
//         "contactEmail": "contact@associationforsocialandenvironmentaldevelopment.org",
//         "phoneNumber": "+91-7764789555",
//         "website": "https://en.wikipedia.org/wiki/Association_for_Social_and_Environmental_Development",
//         "address": "903 Main Street, Mumbai, Maharashtra - 756460",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Association+for+Social+and+Environmental+Development",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Audit Bureau of Circulations (India)",
//         "description": "The Audit Bureau of Circulations ABC of India is a non profit circulation auditing organisation It certifies and audits the circulations of major publications including newspapers and magazines in India ABC is a voluntary organisation initiated in 1948 that operates in different parts of the world Until 1948 the concept of circulation audit was yet to be made in India and the publishers had no means to verify the actual circulation number of publications that they used for advertising and had to",
//         "city": "Chennai",
//         "state": "Tamil Nadu",
//         "theme": [
//           "Health",
//           "Technology"
//         ],
//         "contactEmail": "contact@auditbureauofcirculations(india).org",
//         "phoneNumber": "+91-7928921547",
//         "website": "https://en.wikipedia.org/wiki/Audit_Bureau_of_Circulations_(India)",
//         "address": "204 Main Street, Chennai, Tamil Nadu - 260043",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Audit+Bureau+of+Circulations+(India)",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Bal Bharati Public School",
//         "description": "Bal Bharati Public School BBPS is a group of institutions educating people at school level in India Padma Vibhushan Lala Hansraj Gupta an Indian philanthropist founded the parent body the Child Education Society which governs all the member schools across India Bal Bharati Public School ranks among the premier institutes in Delhi and the country Padma Vibhushan Lala Hansraj Gupta established the first Bal Bharati in 1944 near the Central Ridge in New Delhi The school spreads over six acres and i",
//         "city": "Noida",
//         "state": "Uttar Pradesh",
//         "theme": [
//           "Disaster Relief",
//           "Animal Welfare",
//           "Health"
//         ],
//         "contactEmail": "contact@balbharatipublicschool.org",
//         "phoneNumber": "+91-8148192299",
//         "website": "https://en.wikipedia.org/wiki/Bal_Bharati_Public_School",
//         "address": "463 MG Road, Noida, Uttar Pradesh - 776297",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Bal+Bharati+Public+School",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Balala Hakkula Sangham",
//         "description": "Balala Hakkula Sangham is an Indian Community that protects the rights of children They oppose child marriage sexual abuse and child labour The community was founded in 1985 The chief officer is Achyuta Rao The sangham conducts a 2k walk with girls to oppose child marriage and allow girls to complete their studies before marriage It conducts cultural activities competitions and short film contests for children and supporting them in all aspects other than studies",
//         "city": "Surat",
//         "state": "Gujarat",
//         "theme": [
//           "Women's Empowerment",
//           "Child Welfare"
//         ],
//         "contactEmail": "contact@balalahakkulasangham.org",
//         "phoneNumber": "+91-7443722301",
//         "website": "https://en.wikipedia.org/wiki/Balala_Hakkula_Sangham",
//         "address": "817 Park Street, Surat, Gujarat - 234452",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Balala+Hakkula+Sangham",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Bangalore Astronomical Society",
//         "description": "The Bangalore Astronomical Society BAS is a society of amateur astronomers and other interested individuals headquartered in Bangalore The primary objective of the BAS is to promote and popularize Astronomy as a hobby and science The society was founded in 2006 and registered as not for profit organization In the initial days members used to meet virtually over Orkut and then eventually they decided to form a not for profit organization BAS today has over 1 000 members and the group is active th",
//         "city": "Jaipur",
//         "state": "Rajasthan",
//         "theme": [
//           "Animal Welfare"
//         ],
//         "contactEmail": "contact@bangaloreastronomicalsociety.org",
//         "phoneNumber": "+91-9074755466",
//         "website": "https://en.wikipedia.org/wiki/Bangalore_Astronomical_Society",
//         "address": "677 Indira Nagar, Jaipur, Rajasthan - 430252",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Bangalore+Astronomical+Society",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Bell Bajao",
//         "description": "Bell Bajao Hindi for ring the bell is an anti domestic violence campaign that urges local residents to take a stand against physical abuse through simple acts meant to interrupt domestic violence When residents especially men overhear violence against a woman taking place they are urged to ring the doorbell and ask a simple question such as to borrow some tea to use the phone or to have a glass of water This is meant to let the abuser know that others can hear them and will act to interrupt the ",
//         "city": "Kolkata",
//         "state": "West Bengal",
//         "theme": [
//           "Education"
//         ],
//         "contactEmail": "contact@bellbajao.org",
//         "phoneNumber": "+91-9101515705",
//         "website": "https://en.wikipedia.org/wiki/Bell_Bajao",
//         "address": "878 MG Road, Kolkata, West Bengal - 360719",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Bell+Bajao",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Bharatiya Bhasha Parishad",
//         "description": "Bharatiya Bhasha Parishad a Kolkata based literary organization was founded on 1975 by Sitaram Seksaria and Bhagirat H Kanodia with the aim of promoting Indian languages It works for the development of Indian literature through publication of books on literature and implementation of various literary projects It honors Indian writers for the contribution to Indian literature through their respective languages The award consists of cash prize 1 lakh a memento and a shawl",
//         "city": "Warangal",
//         "state": "Telangana",
//         "theme": [
//           "Environment",
//           "Technology",
//           "Child Welfare"
//         ],
//         "contactEmail": "contact@bharatiyabhashaparishad.org",
//         "phoneNumber": "+91-9281122814",
//         "website": "https://en.wikipedia.org/wiki/Bharatiya_Bhasha_Parishad",
//         "address": "993 Main Street, Warangal, Telangana - 300270",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Bharatiya+Bhasha+Parishad",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Bharatiya Jain Sanghatana",
//         "description": "The Bharatiya Jain Sanghatana is an Indian non governmental organisation established in 1985 by Shantilal Muttha an Indian philanthropist and property developer in Pune Maharashtra The organisation primarily operates in disaster relief and social development The BJS started its activities by campaigning for mass marriage in order to remove the financially debilitating nature of traditional wedding ceremonies in 1989 Muttha arranged a mass marriage of over 600 couples of multiple religions Howeve",
//         "city": "Noida",
//         "state": "Uttar Pradesh",
//         "theme": [
//           "Health",
//           "Child Welfare"
//         ],
//         "contactEmail": "contact@bharatiyajainsanghatana.org",
//         "phoneNumber": "+91-8882184026",
//         "website": "https://en.wikipedia.org/wiki/Bharatiya_Jain_Sanghatana",
//         "address": "970 Park Street, Noida, Uttar Pradesh - 261110",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Bharatiya+Jain+Sanghatana",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Bharatiya Jnanpith",
//         "description": "Bharatiya Jnanpith a literary and research organization based in New Delhi India was founded on February 18 1944 by Sahu Shanti Prasad Jain of the Sahu Jain family and his wife Rama Jain to undertake systematic research and publication of Sanskrit Prakrit Pali and Apabhramsha texts and covering subjects like religion philosophy logic ethics grammar astrology poetics etc Its research and publication programme started with the publication of the Dhavala texts A Jain temple at Moodabidri in Karnata",
//         "city": "Lucknow",
//         "state": "Uttar Pradesh",
//         "theme": [
//           "Education",
//           "Women's Empowerment",
//           "Animal Welfare"
//         ],
//         "contactEmail": "contact@bharatiyajnanpith.org",
//         "phoneNumber": "+91-8767358755",
//         "website": "https://en.wikipedia.org/wiki/Bharatiya_Jnanpith",
//         "address": "698 Park Street, Lucknow, Uttar Pradesh - 212721",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Bharatiya+Jnanpith",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "BHUMI (organisation)",
//         "description": "Bhumi is one of India s largest independent youth volunteer non profit organisations Bhumi as a platform enables over 12 000 volunteers in more than 12 cities across India for causes like education environment animals community welfare etc Bhumi capitalises on the volunteering force of Indian youth playing a catalyst directing India and the youth towards a better tomorrow Bhumi has established itself as a front ranking charity organisation that helps poor children to realise their potential rais",
//         "city": "Mumbai",
//         "state": "Maharashtra",
//         "theme": [
//           "Health",
//           "Disaster Relief",
//           "Education"
//         ],
//         "contactEmail": "contact@bhumi(organisation).org",
//         "phoneNumber": "+91-7833976931",
//         "website": "https://en.wikipedia.org/wiki/BHUMI_(organisation)",
//         "address": "283 MG Road, Mumbai, Maharashtra - 759181",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=BHUMI+(organisation)",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Books on the Delhi Metro",
//         "description": "Books on the Delhi Metro or BODM is a not for profit venture started in May 2017 by the couple Shruti Sharma and Tarun Chauhan Both Sharma and Chauhan along with the book fairies leave books on the Delhi Metro for travelers to pick up and read and then redrop at any metro station for other commuters to read Books on the Delhi Metro is inspired by Hollie Fraser s Books on the Underground Books on the Move Global initiative that encourages people to read on public transit and had Emma Watson the H",
//         "city": "Warangal",
//         "state": "Telangana",
//         "theme": [
//           "Disaster Relief",
//           "Health",
//           "Animal Welfare"
//         ],
//         "contactEmail": "contact@booksonthedelhimetro.org",
//         "phoneNumber": "+91-9049145881",
//         "website": "https://en.wikipedia.org/wiki/Books_on_the_Delhi_Metro",
//         "address": "389 Main Street, Warangal, Telangana - 623115",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Books+on+the+Delhi+Metro",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Broadcast Audience Research Council",
//         "description": "Sunil Lulla CEO Broadcast Audience Research Council BARC India is a joint industry body founded by stakeholder bodies that represent Broadcasters IBF Advertisers ISA and Advertising Media Agencies AAAI It is also the world s largest television measurement science industry body Built upon a robust and future ready technology backbone BARC India owns and manages a transparent accurate and inclusive TV audience measurement system Apart from the currency products to the TV industry BARC India also p",
//         "city": "Jaipur",
//         "state": "Rajasthan",
//         "theme": [
//           "Technology",
//           "Health",
//           "Child Welfare"
//         ],
//         "contactEmail": "contact@broadcastaudienceresearchcouncil.org",
//         "phoneNumber": "+91-8309881431",
//         "website": "https://en.wikipedia.org/wiki/Broadcast_Audience_Research_Council",
//         "address": "581 MG Road, Jaipur, Rajasthan - 876898",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Broadcast+Audience+Research+Council",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Byrraju Foundation",
//         "description": "Byrraju Foundation was an Indian non governmental organisation set up in July 2001 in the memory of Byrraju Satyanarayana Raju who was a philanthropist believed in the development of villages and worked towards upliftment of rural lives",
//         "city": "Mysore",
//         "state": "Karnataka",
//         "theme": [
//           "Child Welfare",
//           "Technology",
//           "Health"
//         ],
//         "contactEmail": "contact@byrrajufoundation.org",
//         "phoneNumber": "+91-7022557988",
//         "website": "https://en.wikipedia.org/wiki/Byrraju_Foundation",
//         "address": "458 Park Street, Mysore, Karnataka - 991702",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Byrraju+Foundation",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "The C. P. Ramaswami Aiyar Foundation",
//         "description": "The C P Ramaswami Aiyar Foundation is a non profit organization founded on 14 October 1966 as per the will of lawyer C P Ramaswami Iyer The foundation is headquartered a1 1 Eldam s Road Alwarpet in Chennai India also known as C P Ramaswami Road on the property known as The Grove which belongs to the C P Ramaswami Iyer family The present President of the foundation is Nanditha Krishna a member of the family The foundation runs several institutions that contribute to society in the fields of educa",
//         "city": "Bangalore",
//         "state": "Karnataka",
//         "theme": [
//           "Animal Welfare",
//           "Disaster Relief"
//         ],
//         "contactEmail": "contact@thec.p.ramaswamiaiyarfoundation.org",
//         "phoneNumber": "+91-7753560785",
//         "website": "https://en.wikipedia.org/wiki/The_C._P._Ramaswami_Aiyar_Foundation",
//         "address": "266 Indira Nagar, Bangalore, Karnataka - 193966",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=The+C.+P.+Ramaswami+Aiyar+Foundation",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Cellular Operators Association of India",
//         "description": "The Cellular Operators Association of India COAI is an industry association of mobile service providers telecom equipment internet services providers and other digital technologies companies and businesses in India COAI was constituted in 1995 as a registered non governmental society As of 2017 COAI has been jointly organizing the India Mobile Congress with the Department of Telecommunications Government of India Over the years COAI has emerged as the official voice for the Indian telecom indust",
//         "city": "Noida",
//         "state": "Uttar Pradesh",
//         "theme": [
//           "Environment",
//           "Women's Empowerment"
//         ],
//         "contactEmail": "contact@cellularoperatorsassociationofindia.org",
//         "phoneNumber": "+91-7347335213",
//         "website": "https://en.wikipedia.org/wiki/Cellular_Operators_Association_of_India",
//         "address": "231 Park Street, Noida, Uttar Pradesh - 160649",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Cellular+Operators+Association+of+India",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Centre for Internet and Society (India)",
//         "description": "The Centre for Internet and Society CIS is a Bangalore based non profit organisation looking at multidisciplinary research and advocacy CIS works on digital pluralism public accountability and pedagogic practices in the field of Internet and Society Wikimedia Foundation granted a project to CIS to promote and support the Indic language Wikimedia s Indic language free knowledge projects including Wikipedia in Indic languages and English The grant is also aimed to support wider distribution of Wik",
//         "city": "Udaipur",
//         "state": "Rajasthan",
//         "theme": [
//           "Education",
//           "Women's Empowerment",
//           "Environment"
//         ],
//         "contactEmail": "contact@centreforinternetandsociety(india).org",
//         "phoneNumber": "+91-9667968648",
//         "website": "https://en.wikipedia.org/wiki/Centre_for_Internet_and_Society_(India)",
//         "address": "416 Main Street, Udaipur, Rajasthan - 514036",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Centre+for+Internet+and+Society+(India)",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Centre for Science and Environment",
//         "description": "Centre for Science and Environment CSE is a not for profit public interest research and advocacy organisation based in New Delhi India Established in 1980 CSE works as a think tank on environment development issues in India poor planning climate shifts devastating India s Sundarbans and advocates for policy changes and better implementation of the already existing policies CSE uses knowledge based activism to create awareness about problems and propose sustainable solutions The director of the C",
//         "city": "New Delhi",
//         "state": "Delhi",
//         "theme": [
//           "Technology"
//         ],
//         "contactEmail": "contact@centreforscienceandenvironment.org",
//         "phoneNumber": "+91-8645595591",
//         "website": "https://en.wikipedia.org/wiki/Centre_for_Science_and_Environment",
//         "address": "601 Park Street, New Delhi, Delhi - 791745",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Centre+for+Science+and+Environment",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       },
//       {
//         "name": "Centre for Social Research",
//         "description": "The Centre for Social Research CSR established in 1983 is an advocacy group for women based in New Delhi India The group tries to bring attention and justice to all marginalized and underprivileged areas of society They offer services to women and girls throughout the country and focus on restructuring gender relations with the aim of creating a more humane equitable and gender just society In 1997 CSR founded the Gender Training Institute GTI to facilitate the empowerment of women and social ju",
//         "city": "Kolkata",
//         "state": "West Bengal",
//         "theme": [
//           "Child Welfare",
//           "Health"
//         ],
//         "contactEmail": "contact@centreforsocialresearch.org",
//         "phoneNumber": "+91-8534054181",
//         "website": "https://en.wikipedia.org/wiki/Centre_for_Social_Research",
//         "address": "186 MG Road, Kolkata, West Bengal - 641161",
//         "logoURL": "https://dummyimage.com/200x200/000/fff.png&text=Centre+for+Social+Research",
//         "projects": {
//           "completed": [],
//           "ongoing": [],
//           "upcoming": []
//         },
//         "volunteers": []
//       }
//     ])
//   }catch(error){
//     console.log(error);
//   }
// }
// insertNgoData()
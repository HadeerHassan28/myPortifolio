import weather from "../../assests/projectImgs/weather.png";
import globagen from "../../assests/projectImgs/globagen.png";
import blood from "../../assests/projectImgs/blood.png";
import contactList from "../../assests/projectImgs/contactList.png";
import toDoListContactList from "../../assests/projectImgs/toDoListContactList.png";
import eCommerce from "../../assests/projectImgs/eCommerce.png";
export const projectData = [
  {
    title: "FreshCart ",
    image: eCommerce,
    description: "E-commerce: shop and buy  online ",
    technologies:
      "React JS via Vite | Bootstrap, React Slick | Axios | useAxios Hook | Formik, Yup | JWT-decode | Toast |Online Payment (stripe ) | react-detect-offline. ",
    github: "https://github.com/HadeerHassan28/e-commerce",
    deployed: "https://e-commerce-hadeerhassan28.vercel.app/",
    bgcolor: "4D9208",
    id: "1",
  },
  {
    title: "Weather App",
    image: weather,
    description:
      "From Khamsat, The app is displayes the current weather of the user using his location.",
    technologies: "Angular | Weather API | Bootstrap",
    github: "https://github.com/HadeerHassan28/WeatherApp",
    deployed:
      "https://drive.google.com/file/d/1lAzsWT2BpaaHQZOKHCRy6r7Vsn0Prmxh/view",
    bgcolor: "#f37737",
    id: "1",
  },
  {
    title: "Glogaben",
    image: globagen,
    technologies: "React JS | EmailJS | Bootstrap | i18n | Strapi ",
    description:
      " The website has 3 parts: 1- display the product and conect vis WhatsApp for more info, 2- Research and development, 3- Logistics & Customs Clearance Department. consists of 5 pages (Home, About, Research,Products,Contact us ",
    github: "https://github.com/HadeerHassan28/globagen-project",
    deployed: "https://mdyeates.github.io/weather-app/",
    bgcolor: "#29cbe0",
    id: "2",
  },
  {
    title: "Blood Donation (ITI Graduation Project)",
    image: blood,
    technologies: "React JS | EmailJS | Bootstrap | i18n | JSON |  ",
    description:
      "Spread the awareness About Blood Types, When And How to donate,Two sides of registration for users and organizations,Users Functionality: Profile that shows specific details and edit his info, ability to announce by blood type and area, Organizations Functionality: Profile that shows specific details and edit his info, ability to announce by blood type and area, ability to announce by blood type and area, The website supports the phone calls, WhatsApp, Google Maps, and Payment for the user the and organization.",
    github: "https://github.com/HadeerHassan28/Blood-Donation-App ",
    deployed: "https://www.youtube.com/watch?v=pB8La6uZSpUw",
    bgcolor: "#6c4bf4",
    id: "3",
  },
  {
    title: "Contact List (ITI)",
    image: contactList,
    technologies:
      "Material-UI | React Native | useAxios | UseReducer | Navigation stack | json-server ",
    description: "Display the contact list and his details of everyone.",
    github: "https://github.com/HadeerHassan28/ContactList_React-Native",
    deployed: "https://www.youtube.com/watch?v=-qIFmv9l-jk",
    bgcolor: "#f85781",
    id: "4",
  },

  {
    title: "To Do List with Contact List App (ITI)",
    image: toDoListContactList,
    description: "Display the dotoApp navigate with contact list.",
    technologies: "React Native | React navigation | uuid ",
    github:
      "https://github.com/HadeerHassan28/ITI_ToDoList_ConatctList_React-Native",
    deployed: "https://www.youtube.com/watch?v=_suEt2I7oxQ",
    bgcolor: "#ffcc33",
    id: "5",
  },
];

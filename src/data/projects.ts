import BillTraxImage from "../../public/assets/images/billTrax.png";
import GitReactCompsImage from "../../public/assets/images/gitReactComponents.png";
import LoremCakesImage from "../../public/assets/images/loremCakes.png";
import ShiftScribeImage from "../../public/assets/images/shiftscribe-header.png";

export const projectData = [
  {
    title: "ShiftScribe",
    description:
      "ShiftScribe is an integrated time-tracking solution built for businesses to centralize employee work hours, job locations, and other crucial details. The React Native mobile app interfaces seamlessly with its web counterpart at shiftscribe.com, enabling administrators to manage configurations effortlessly. Employees benefit from an intuitive platform to log and adjust their hours, ensuring accuracy and transparency.",
    githubLink: "https://github.com/Dozr13/ShiftScribe",
    iosLink: "https://apps.apple.com/us/app/shiftscribe/id6450401614",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.shiftscribe.app",
    website: "https://www.shiftscribe.com/",
    logo: ShiftScribeImage,
    technologiesUsed: [
      "React Native",
      "Expo",
      "Firebase Realtime DB",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    title: "BillTrax",
    description:
      "BillTrax, a bootcamp creation, offering users a streamlined way to track bills and set budgeting goals.  With the ability to view expenses daily, monthly, or annually, as well as gives the ability to set goals and view everything in a user friendly manner, it provides insights into one's financial habits. Although feature-rich, this project is currently not hosted.",
    githubLink: "https://github.com/Dozr13/Bill_Track",
    logo: BillTraxImage,
    technologiesUsed: ["React.js", "Node.js", "Express", "Axios"],
  },
  {
    title: "Git React Comps",
    description:
      "Git React Comps (GRC) serves as a dedicated hub for React enthusiasts, reminiscent of the GitHub experience. This collaborative team project empowers users to share, update, and leverage community-contributed components. What makes GRC unique is the capability to preview components visually before integration and tailor styling seamlessly upon implementation, ensuring a cohesive blend with any project.",
    githubLink: "https://github.com/GitReactComponents",
    logo: GitReactCompsImage,
    technologiesUsed: ["React.js", "Node.js", "Stripe", "Express", "Axios"],
  },
  {
    title: "Lorem Cakes",
    description:
      "Lorem Cakes, a delightful destination for cake aficionados, simplifies the cake-buying experience. Born out of a coding bootcamp project, this platform showcases an array of delectable cakes, allowing users to explore, select, and purchase with ease. Whether it's a special occasion or just a sweet craving, Lorem Cakes offers a piece of joy with every click.",
    githubLink: "https://github.com/Dozr13/lorem-cakes",
    logo: LoremCakesImage,
    technologiesUsed: ["React.js", "Express", "Axios"],
  },
  // {
  //   title: "This Portfolio",
  //   description:
  //     "If you're interested in checking out the code behind this site, you can see it on Github at the link below, I used Next, Typescript, Wit.ai, Formik, and Material UI.",
  //   githubLink: "https://github.com/Dozr13/port_v3.0",
  //   logo: BillTraxImage,
  //   technologiesUsed: ["React.js", "Next.js", "Typescript", "MaterialUI"],
  // },
];

export type TJobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
};

export type TJobItemDetails = TJobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};

const jobItem = {
  id: 898679876973546,
  description:
    "We are looking for an entry-level software developer with enthusiasm, broad exposure to different types of development tasks. This position will support a wide array of services and features.",
  qualifications: [
    "HTML",
    "CSS",
    "JavaScript",
    "React/Angular/Vue",
    "Node.js",
    "MongoDB/NoSQL",
    "Optional: SQL",
  ],
  reviews: [
    "Good place to start your developer career.",
    "Decent benefits and pay.",
    "Growing company with good opportunities.",
    "Good place to work.",
  ],
  title: "Junior Software Developer",
  badgeLetters: "RR",
  company: "Rey and Rey",
  duration: "Full-Time",
  salary: "$95,000+",
  location: "Global",
  relevanceScore: 99,
  daysAgo: 2,
  coverImgURL:
    "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1272&q=100",
  companyURL: "https://fictionalreyandreywebsite.com",
};

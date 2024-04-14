"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Coworking Space Website",
    description: "Next.js Headless Wordpress with GraphQL",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yurisbittencourt",
    previewUrl: "https://cwsp.vercel.app/",
  },
  {
    id: 2,
    title: "Cabin Rental Website",
    description: "Next.js and Styled-Components",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yurisbittencourt/great-lake-cabins",
    previewUrl: "https://greatlakecabins.com/",
  },
  {
    id: 3,
    title: "Social Media Application",
    description: "React.js, Styled-Components, Node.js, Axios and Firebase",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yurisbittencourt/gossip-monkey",
    previewUrl: "https://gossipmonkey.web.app",
  },
  {
    id: 4,
    title: "JavaScript Game",
    description:
      "Just JavaScript. Use arrow keys to move and Enter for special move",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/yurisbittencourt/shadow-dog/tree/main/JS%20Game/",
    previewUrl: "https://shadow-dog.netlify.app/",
  },
  // {
  //   id: 5,
  //   title: "Car Dealership Website",
  //   description: "Next.js and Styled-Components",
  //   image: "/images/projects/project5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/yurisbittencourt/",
  //   previewUrl: "https://spanixauto.ca/",
  // },
  {
    id: 5,
    title: "Frontend Checkout",
    description: "React.js and Styled-Components",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yurisbittencourt/front-end-checkout/",
    previewUrl: "https://frontend-checkout-process.web.app/",
  },
  {
    id: 6,
    title: "Recipe Search",
    description: "Next.js, Styled-Components and Spoonacular API",
    image: "/images/projects/project7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yurisbittencourt/next-recipes",
    previewUrl: "https://recipes-next.web.app/",
  },
  {
    id: 7,
    title: "Dentist's Landing Page",
    description: "HTML and CSS",
    image: "/images/projects/project8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yurisbittencourt/page-vitin",
    previewUrl: "https://drvictorferrari.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

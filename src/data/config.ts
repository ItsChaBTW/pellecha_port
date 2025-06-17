const config = {
  title: "Charlie Pelle | Backend Developer",
  description: {
    long: "Explore the portfolio of Charlie Pelle, a passionate Backend Developer with expertise in PHP, C#, ASP.NET, Symfony, JavaScript, Laravel, and MySQL. I love creating efficient and scalable web applications that solve real-world problems with a strong foundation in software development and a keen eye for detail.",
    short:
      "Discover the portfolio of Charlie Pelle, a Backend Developer specializing in creating efficient and scalable web applications.",
  },
  keywords: [
    "Charlie",
    "Charlie Pelle",
    "charliepelle",
    "Charlie Pelle portfolio",
    "portfolio",
    "Backend Developer",
    "PHP Developer",
    "C# Developer",
    "ASP.NET",
    "Laravel",
    "Symfony",
    "JavaScript",
    "MySQL",
    "Database Design",
    "web development",
    "RESTful APIs",
    "Bootstrap",
    "Git",
    "Software Development",
    "Freelance Developer",
    "Bago City College",
  ],
  author: "Charlie Pelle",
  email: "charliepelle@example.com",
  site: "https://charliepelle.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/ItsChaBTW",
    linkedin: "https://www.linkedin.com/in/charlie-pelle-001/",
    instagram: "",
    facebook: "",
    github: "https://github.com/ItsChaBTW",
  },
};
export { config };

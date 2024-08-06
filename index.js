const Projects = [
  {
    title: "Battleships",
    description: "Battleship game made with vanilla HTML, CSS and JavaScript",
    image_src: "./images/projectImages/battleship-desktop.png",
    image_alt: "BattleShip game",
    github: "https://github.com/SReddy-96/TOP-battleship",
  },
  {
    title: "Weather App",
    description: "Weather app using https://www.weatherapi.com/ API",
    image_src: "./images/projectImages/TOP-weather-app.png",
    image_alt: "Weather App",
    github: "https://github.com/SReddy-96/TOP-weather-app",
  },
  {
    title: "Library App",
    description: "Library app, let's you add books to your own virtual library",
    image_src: "./images/projectImages/TOP-library.png",
    image_alt: "Library App",
    github: "https://github.com/SReddy-96/TOP-Library",
  },
  {
    title: "Image Carousel",
    description: "A Vanilla JavaScript image carousel",
    image_src: "./images/projectImages/ImageCarousel.gif",
    image_alt: "Image Carousel",
    github: "https://github.com/SReddy-96/TOP-image-carousel",
  },
  {
    title: "To-do List",
    description:
      "A To-do list using HTML, CSS and JS to be able to add tasks and projects",
    image_src: "./images/projectImages/index.png",
    image_alt: "To-do List",
    github: "https://github.com/SReddy-96/TOP-To-Do-List",
  },
  {
    title: "Restaurant Page",
    description:
      "A Restaurant page using HTML, CSS and JS showing the restaurant's menu and information",
    image_src: "./images/projectImages/home.png",
    image_alt: "Restaurant Page",
    github: "https://github.com/SReddy-96/TOP-Restaurant-Page",
  },
  {
    title: "Ti-Tac-Toe",
    description:
      "A Tic-Tac-Toe using HTML, CSS and JS, being able for 2 players to play against each other",
    image_src: "./images/projectImages/Tic-Tac-Toe.gif",
    image_alt: "Tic-Tac-Toe",
    github: "https://github.com/SReddy-96/TOP-tic-tac-toe",
  },
  {
    title: "Admin Dashboard",
    description: "A Admin Dashboard using HTML, CSS and JS, ",
    image_src: "./images/projectImages/TOP-dashboard.png",
    image_alt: "admin dashboard",
    github: "https://github.com/SReddy-96/TOP-dashboard",
  },
  {
    title: "Sign-up Form",
    description:
      "A Sign-up Form using HTML, CSS and JS, handling form validation.",
    image_src: "./images/projectImages/TOP-sign-up-form.png",
    image_alt: "Sign-up Form",
    github: "https://github.com/SReddy-96/TOP-sign-up-form",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  // add projects

  Projects.forEach((project) => {
    // create elements
    let projectCard = document.createElement("div");
    let projectTitle = document.createElement("h3");
    let projectImage = document.createElement("img");
    let projectDescription = document.createElement("p");
    let svgWrapper = document.createElement("a");
    let github = document.createElement("span");
    let projectGithub = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    projectGithub.setAttribute("viewBox", "0 0 24 24");
    let newElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newElement.setAttribute(
      "d",
      "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
    ); //Set path's data
    projectGithub.appendChild(newElement);
    projectGithub.classList.add("projectGithub");
    github.textContent = "Github";
    svgWrapper.append(projectGithub, github);

    projectTitle.textContent = project.title;
    projectImage.src = project.image_src;
    projectImage.alt = project.image_alt;
    projectDescription.textContent = project.description;
    svgWrapper.href = project.github;
    svgWrapper.target = "_blank";

    projectCard.append(
      projectTitle,
      projectImage,
      projectDescription,
      svgWrapper
    );

    projectCard.classList.add("projectCard");
    setTimeout(() => {
      projectCard.style.opacity = 1;
    }),
      1000;

    container.append(projectCard);
  });
});

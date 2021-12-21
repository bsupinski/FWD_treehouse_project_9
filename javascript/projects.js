//Set up to be able to add more projects easily
const projectCardsContainer = document.getElementById("card-teamhouse-project");
const otherProjectsContainer = document.getElementById("card-teamhouse-practice");

treehouseProjects = [
    project1 = {
        title: "My Person Profile Page",
        codes: "HTML CSS",
        description: "Customize a personal online profile by adding graphics, customizing text, and improving the look of a web page using Cascading Style Sheets.",
        image: "images/project-1.jpg",
        address: "https://bsupinski.github.io/FWD_treehouse_project_1"
    },
    project2 = {
        title: "Mobile-first",
        codes: "HTML CSS",
        description: "Designing web pages that look and function well on multiple screen sizes is an essential skill for a web developer. Using HTML, CSS, and responsive design, you'll create a mobile-first web page with a layout that adjusts to fit mobile phones, tablets, and desktop displays.",
        image: "images/project-2.jpg",
        address: "https://bsupinski.github.io/FWD_treehouse_project_2"
    },
    project3 = {
        title: "Registration Form ",
        codes: "HTML CSS",
        description: "This project challenges you to build a responsive, mobile-first registration form using a variety of HTML form elements.",
        image: "images/project-3.jpg",
        address: "https://bsupinski.github.io/FWD_treehouse_project_3"
    },
    project4 = {
        title: "Web Style Guide",
        codes: "HTML CSS Sass",
        description: "Create a style guide that can act as your own personal and custom Bootstrap that you can drop into any of your projects to speed up styling, layout and development in general.",
        image: "images/project-4.jpg",
        address: "https://bsupinski.github.io/FWD_treehouse_project_4"
    },
    project5 = {
        title: "Photo Gallery",
        codes: "HTML CSS Sass Javascript",
        description: "Use HTML, CSS and the popular programming language JavaScript to create an interactive, searchable gallery of photos.",
        image: "images/project-5.jpg",
        address: "https://bsupinski.github.io/FWD_treehouse_project_5"
    },
    project6 = {
        title: "Game Show App",
        codes: "HTML CSS Javascript",
        description: "Create a browser version of “Wheel of Success”, a word guessing game. You’ll use Javascript to come up with a random phrase that players will try to guess by entering different letters into the program.",
        image: "images/project-6.jpg",
        address: "https://bsupinski.github.io/FWD_treehouse_project_6"
    },
    project7 = {
        title: "WebApp Dashboard",
        codes: "HTML CSS Sass Javascript",
        description: "Build an interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming. The project involves creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability",
        image: "images/project-7.jpg",
        address: "https://bsupinski.github.io/FWD_treehouse_project_7"
    },
    project8 = {
        title: "Employee Directory",
        codes: "HTML CSS Sass Javascript",
        description: "Using JavaScript, you’ll create an employee directory by communicating with a third-party API (Application Programming Interface).",
        image: "images/project-8.jpg",
        address: "https://bsupinski.github.io/FWD_treehouse_project_8"
    },

    
];
 otherProjects= [
    practice1 = {
        title: "Chatapp- Mockup",
        codes: "HTML CSS Sass Javascript",
        description: "You've been asked to create a chat interface! This will test your CSS skills by structuring multiple elements within a single container.",
        image: "images/practice-1.jpg",
        address: "https://bsupinski.github.io/FWD_treehouse_practice_1"
    },

    practice2 = {
        title: "Featherlite Note Taking app",
        codes: "HTML CSS  Sass Javascript",
        description: "The design team at your company has come to you with some mockups for a potential note taking application your company wants to create; Feather. Feather will have two version LITE and PRO.",
        image: "images/practice-2.jpg",
        address: "https://bsupinski.github.io/FWD_Treehouse_practice_2/"
    },
    practice3 = {
        title: "Firebase.js",
        codes: "HTML CSS  Sass Javascript",
        description: "Create a page to show off feature of the new firebase.js.",
        image: "images/practice-3.jpg",
        address: "https://bsupinski.github.io/FWD_Treehouse_practice_3/"
    },
    bs_udemy_1 = {
        title: "Bootstrap Portfolio Template",
        codes: "HTML Bootstrap 5",
        description: "Using strictly bootstrap 5 classes, create a portfolio template.",
        image: "images/bs_portfolio.jpg",
        address: "https://bsupinski.github.io/bs_udemy_portfolio/"
    },
    bs_udemy_2 = {
        title: "Bootstrap Resume Template",
        codes: "HTML Bootstrap 5",
        description: "Using strictly bootstrap 5 classes, create a portfolio template.",
        image: "images/bs_resume.jpg",
        address: "https://bsupinski.github.io/bs_udemy_resume/"
    },
    bs_udemy_3 = {
        title: "Bootstrap Knowledgebase Template",
        codes: "HTML Bootstrap 5",
        description: "Using strictly bootstrap 5 classes, create a portfolio template.",
        image: "images/bs_Knowledgebase.jpg",
        address: "https://bsupinski.github.io/bs_udemy_knowledgebase/"
    },
    bs_udemy_4 = {
        title: "Bootstrap Survey Template",
        codes: "HTML Bootstrap 5",
        description: "Using strictly bootstrap 5 classes, create a portfolio template.",
        image: "images/bs_survey.jpg",
        address: "https://bsupinski.github.io/bs_udemy_survey/"
    },
    bs_udemy_4 = {
        title: "Bootstrap Landing PAge Template",
        codes: "HTML Bootstrap 5",
        description: "Using strictly bootstrap 5 classes, create a portfolio template.",
        image: "images/bs_landingpage.jpg",
        address: "https://bsupinski.github.io/bs_udemy_landingpage/"
    },
    bs_udemy_4 = {
        title: "Bootstrap Small Business Template",
        codes: "HTML Bootstrap 5",
        description: "Using strictly bootstrap 5 classes, create a portfolio template.",
        image: "images/bs_smallbusiness.jpg",
        address: "https://bsupinski.github.io/bs_udemy_smallbusiness/"
    
    }
    
    

];

function makeCard(array, location) {
    Array.from(array).forEach(project => {
        location.innerHTML += 
        `<div class="col text-center mb-1">
            <div class="card h-100 border border-primary shadow">
                <img src=${project.image} class="card-img-top border-bottom border-primary" alt="...">
                <div class="card-body d-flex flex-column">
                    <h4 class="card-title mb-3">${project.title}</h4>
                    <h5>Code Used</h5>
                    <p>${project.codes}</p>
                    <p class="card-text mb-3">${project.description}</p>
                    <a href=${project.address} target="_blank" class="btn btn-primary text-light mt-auto">View Project</a>
                </div>
            </div>
        </div>`
    })
};

makeCard(treehouseProjects, projectCardsContainer)
makeCard(otherProjects, otherProjectsContainer)
// Graph
// var ctx = document.getElementById("myChart");

// var myChart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ],
//     datasets: [
//       {
//         data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
//         lineTension: 0,
//         backgroundColor: "transparent",
//         borderColor: "#007bff",
//         borderWidth: 4,
//         pointBackgroundColor: "#007bff",
//       },
//     ],
//   },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: false,
//           },
//         },
//       ],
//     },
//     legend: {
//       display: false,
//     },
//   },
// });
// const navLinks = document.querySelectorAll('nav a');
// const sections = document.querySelectorAll('section');

// function updateNav() {
//   const currentPos = window.scrollY;
//   console.log(currentPos);
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - 50;
//     const sectionHeight = section.offsetHeight;
//     if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
//       navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${section.id}`) {
//           link.classList.add('active');
//         }
//       });
//     }
//   });
// }

// window.addEventListener('scroll', updateNav);
// window.addEventListener('resize', updateNav);
// const navbarToggler = document.getElementById('navbar-toggler');
// const navbar = document.querySelector('.navbar');

// navbarToggler.addEventListener('click', () => {
//   console.log("clicked");
//   // navbarToggler.classList.toggle('open');
//   // navbar.classList.toggle('open');

//   // if (navbar.classList.contains('open')) {
//   //   navbar.style.transform = 'translateY(0)';
//   // } else {
//   //   navbar.style.transform = 'translateY(-100%)';
//   // }
// });
// Get the container element
const skills_cotainer = document.getElementById("skills");
const h1Div = document.createElement("h1");

// Set the text content of the h1 element
h1Div.textContent = "Skills";
skills_cotainer.appendChild(h1Div);
// Define the content for each cell
const skills = [
  {
    item_name:"Languages",
    item_label:"75%",
    item_skills:"C,C++,Java,Python,HTML,CSS",
  },
  {
    item_name:"Frameworks",
    item_label:"65%",
    item_skills:"Spring Boot, Flask, Laravel",
  },
  {
    item_name:"DBMS",
    item_label:"80%",
    item_skills:"Oracle,MySQL",
  },
  {
    item_name:"Scripting",
    item_label:"80%",
    item_skills:"Shell Script, Latex",
  },
  {
    item_name:"Version-Control",
    item_label:"80%",
    item_skills:"Git",
  }
];

// Define the number of rows and columns
// const numRows = 3;
// const numCols = 2;

// // Loop through each cell and create a Bootstrap column for each
// for (let i = 0; i < cellContent.length;) {
//   const row = document.createElement("div");
//   row.classList.add("row");
//   for (let j = 0; j < numCols && i<cellContent.length; j++,i++) {
//     console.log(i);
//     const col = document.createElement("div");
//     col.classList.add("col-md-6");
//     col.classList.add("col-sm-12");
//     col.textContent = cellContent[i];
//     row.appendChild(col);
//   }
//   container.appendChild(row);
// }
let row=null;
skills.forEach((skill,index) => {
  // const [category, items] = skill.split(":");
  // const itemsArray = items.split(", ");
  console.log(index);
  if(index%2==0){
    row=document.createElement("div");
    row.classList.add("row");
}
  const col=document.createElement("div");
  col.classList.add("col-md-6");
  col.classList.add("col-sm-12");
  const skillLabel = document.createElement("div");
  skillLabel.classList.add("skill-class");
  skillLabel.textContent = skill.item_name;
  col.appendChild(skillLabel);

  // itemsArray.forEach((item) => {
    // const [name, level] = item.split(" ");
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress");

    const progressBarInner = document.createElement("div");
    progressBarInner.classList.add("progress-bar");
    
    progressBarInner.textContent = skill.item_skills;
    // const progressBarWidth = progressBarInner.textContent.offsetWidth;
    console.log(skill.item_name,progressBarInner.scrollWidth);
    progressBarInner.style.width = skill.item_label;
    progressBar.appendChild(progressBarInner);

    col.appendChild(progressBar);
    row.appendChild(col);
    skills_cotainer.appendChild(row);
  // });
});
const work_experience=[{
  company_name:"Reve Systems",
  posts:[{
     post_name:"Software Engineer",
     timeline:"Feb 2022-June 2022",
     projects:[{
       project_name:"Bangla Text to Speech",
       project_details:[
         "Analysed the existing bangla dataset to find out if those are balanced dataset or not and applied it to collect our own balanced data",
         "Built some important sub components to preprocess the data before feeding into the model.",
         "Surveyed all the existing research papers and determined the key components and suitable model according to our needs."
      ],
      languages:["Python","Fast Api","Flask","Pytorch"]
     },
     {
      project_name:"Data Collection and Annotation Tool ",
      project_details:[
        "Worked with some components using spring boot for back end and react for front end.",
        "Worked with wavesurfer js to make an annotation tool for sentence,word and phoneme annotation."
     ],
     languages:["React Bootstrap","React","Spring boot","MySql"]
    }
    ]
  },{
    post_name:"Junior Software Engineer",
     timeline:"Feb 2022-June 2022",
     projects:[{
       project_name:"Data Collection and Annotation Tool",
       project_details:[
         "Managing the tool and implementing new features",
         "Fixing bugs of the newly implemented features and old features"
        
      ],
      languages:["React Bootstrap","React","Spring boot","MySql"]

  }]
 }
]
}];
let experience_container=document.getElementById("experience");
// for(let i=0;i<work_experience.length;i++)
// {
//   console.log(work_experience[i].company_name);
//   let h2CompanyName = document.createElement("h2");
//   h2CompanyName.innerHTML = work_experience[i].company_name;
//   experience_container.appendChild(h2CompanyName);
//   let div_post=document.createElement("div");
//   div_post.className="job-post-class";
//   for(let j=0;j<work_experience[i].posts.length;j++)
//   {
//     console.log(work_experience[i].posts[j].post_name);
//     console.log(work_experience[i].posts[j].timeline);
    
//     let h3PostName = document.createElement("h4");
//     h3PostName.innerHTML = work_experience[i].posts[j].post_name;
//     let spanTimeDuration = document.createElement("span");
//     spanTimeDuration.innerHTML = work_experience[i].posts[j].timeline;
//     h3PostName.appendChild(spanTimeDuration);
//     div_post.appendChild(h3PostName);
//     let projectAndProjectDetails=document.createElement("div");
//     projectAndProjectDetails.className="project-name-details";
//     for(let k=0;k<work_experience[i].posts[j].projects.length;k++)
//     {
//       console.log(work_experience[i].posts[j].projects[k].project_name);
//       let h4ProjectName=document.createElement("b");
//       h4ProjectName.innerHTML=work_experience[i].posts[j].projects[k].project_name;
//       projectAndProjectDetails.appendChild(h4ProjectName);
//       for(let m=0;m<work_experience[i].posts[j].projects[k].project_details.length;m++)
//       {
//         console.log(work_experience[i].posts[j].projects[k].project_details[m]);
//         let paraProjectDetails=document.createElement("p");
//         paraProjectDetails.className="project-details";
//         paraProjectDetails.innerHTML="&#x25CF   "+work_experience[i].posts[j].projects[k].project_details[m];
//         projectAndProjectDetails.appendChild(paraProjectDetails);
//       }
//       let divTags = document.createElement("div");
//       divTags.className="skills-per-project";
//       for(let m=0;m<work_experience[i].posts[j].projects[k].languages.length;m++)
//       {
//         //console.log(work_experience[i].posts[j].projects[k].project_details[m]);
//         let languageforProject=document.createElement("span");
//         languageforProject.className="badge badge-secondary";
       
//         languageforProject.innerHTML=work_experience[i].posts[j].projects[k].languages[m];
//         divTags.appendChild(languageforProject);
//       }
//       projectAndProjectDetails.appendChild(divTags);
//       div_post.appendChild(projectAndProjectDetails);
//       //div_post.appendChild(divTags);
//     }
//   }
//   experience_container.appendChild(div_post);
// }
work_experience.forEach((company) => {
  const companyCard = document.createElement("div");
  companyCard.classList.add("card");

  const companyHeader = document.createElement("div");
  companyHeader.classList.add("card-header");
  const companyHeaderBold=document.createElement("b");
  companyHeaderBold.textContent=company.company_name;
  companyHeader.appendChild(companyHeaderBold);
  // companyHeader.textContent = company.company_name;
  companyCard.appendChild(companyHeader);

  company.posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.classList.add("card");

    const postHeader = document.createElement("div");
    postHeader.classList.add("card-header");
    postHeader.textContent = post.post_name;
    

    const postSubheader = document.createElement("span");
    postSubheader.classList.add("card-timeline");
    postSubheader.textContent=post.timeline;
    // postSubheader.classList.add("card-subheader");
    // postSubheader.textContent = post.timeline;
    // postSubheader.classList.add("card-subheader-small");
    postHeader.appendChild(postSubheader);
    postCard.appendChild(postHeader);

    post.projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("card");

      const projectHeader = document.createElement("div");
      projectHeader.classList.add("card-header");
      projectHeader.classList.add("card-project-title");
      projectHeader.textContent = project.project_name;
      projectCard.appendChild(projectHeader);

      const projectDetails = document.createElement("div");
      projectDetails.classList.add("card-details");
      const projectDetailsList = document.createElement("ul");
      project.project_details.forEach((detail) => {
        const detailItem = document.createElement("li");
        detailItem.textContent = detail;
        projectDetailsList.appendChild(detailItem);
      });
      projectDetails.appendChild(projectDetailsList);
      projectCard.appendChild(projectDetails);

      const projectLanguages = document.createElement("div");
      projectLanguages.classList.add("card-languages");
      // const projectLanguagesList = document.createElement("ul");
      // projectLanguagesList.classList.add("card-languages-list");
      project.languages.forEach((language) => {
        const badge = document.createElement("span");
        badge.classList.add("badge");
        badge.classList.add("bg-primary");
        badge.classList.add("me-1");
        badge.textContent = language;
        projectLanguages.appendChild(badge);
        // projectLanguagesList.appendChild(languageItem);
      });
      // projectLanguages.appendChild(projectLanguagesList);
      projectCard.appendChild(projectLanguages);

      postCard.appendChild(projectCard);
    });

    companyCard.appendChild(postCard);
  });

  experience_container.appendChild(companyCard);
});

const projects=[
  {
    project_name:"English to Bangla Word Translation",
    skills:"React,Node,SQL",
    description:"Developed a english word to bangla extension to make users feel comfortable when they need to know the meaning of word just by double click.React js used for front end,node js used for backend ,mysql database was used.Also the backend is deployed in microsoft azure.",
    github_link:""
  },
  {
    project_name:"School Management System",
    skills:"Java , JavaFX , SQL",
    description:"Developed a school management system for using java and mysql.It can add and delete and edit data of students,teachers and admins.",
    github_link:"" 
  },
  {
    project_name:"Race Game",
    skills:"C++",
    description:"It is a hardware project using ATMega32 and gyroscope,led matrix and led display .Conducted by 4 8*8 led matrix Which is basically a race game where object needs to arrive at other end without touching any of the moving obstacles.",
    github_link:""
  },
  {
    project_name:"Park Your Car",
    skills:"Laravel(framework), PHP, HTML, CSS",
    description:"A parking app with the help of google map api to find some available parking space to park user’s car.And the parking space owner can rent out their space to users in real time scenario.",
    github_link:""
  },
  {
    project_name:"Online Shopping System",
    skills:"MVC pattern, PHP, HTML, CSS, SQL, JMeter, HAproxy",
    description:"A secured HTTPS online shopping system with one load balancer powered by haproxy and two application server serving in round robin algorithm to increase availabilty and two databases in the backend database server and using JMeter for load test where users can purchase items and post their items for sell.",
    github_link:"" 
  }
]



  // Card data
  
  // Function to generate a card
  function createCard(card) {
    const cardHtml = `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${card.project_name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
          ${card.skills}
          </h6>
          <p class="card-text">${card.description}</p>
          </div>
          <div class="card-footer">
            
              <a href="${card.githubLink}" class="btn "><i class="fab fa-github"></i></a>
           
          </div>
        
      </div>
    `;
    return cardHtml;
  }

  // Function to add cards to container
  function addCardsToContainer(container, cards) {
    let rowHtml = '<div class="row">';
    let count = 0;
    for (let i = 0; i < cards.length; i++) {
      const card = createCard(cards[i]);
      rowHtml += `<div class="col-md-6">${card}</div>`;
      count++;
      if (count === 2 || i === cards.length - 1) {
        rowHtml += '</div><div class="row">';
        count = 0;
      }
    }
    rowHtml += '</div>';
    container.innerHTML = rowHtml;
  }

  // Get card container element
 // const cardContainer = document.querySelector('.card-container');

  // Add cards to container
  let projects_container=document.getElementById("projects");
  addCardsToContainer(projects_container, projects);

  const education=[
    {
      degree_name:"Bachelor of Science in Computer Science and Engineering",
      college_name:"Bangladesh University of Engineering and Technology",
      subjects:["Data Structures and Algorithms","Operating Systems","Computer Networks","Operating Systems","Artificial Intelligence","High Performance Computing"]
    },
    {
      degree_name:"Intermediate in Science",
      college_name:"Notre Dame College",
      subjects:["Physics","Chemistry","Mathematics"]
    }
  ]
  function createEducationCard(card) {
    const cardHtml = `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${card.degree_name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
          ${card.college_name}
          </h6>
          <p class="card-text">${card.subjects.map(subject => `<span class="badge bg-secondary">${subject}</span>`).join('')}</p>
          </div>
          
        
      </div>
    `;
    return cardHtml;
  }

  function addEducationToContainer(container, cards) {
    let rowHtml = '<div class="row">';
    let count = 0;
    for (let i = 0; i < cards.length; i++) {
      const card = createEducationCard(cards[i]);
      rowHtml += `<div class="col-md-12">${card}</div>`;
      count++;
      if (count === 2 || i === cards.length - 1) {
        rowHtml += '</div><div class="row">';
        count = 0;
      }
    }
    rowHtml += '</div>';
    container.innerHTML = rowHtml;
  }
  let education_container=document.getElementById("education");
  addEducationToContainer(education_container, education);

  const contact=[
    {
      label:"Dev Profiles",
      data:[
        {
        text:"leetcode",
        link:""
      },
      {
        text:"github",
        link:""
      }
    ]
    },
    {
      label:"Social Profiles",
      data:[{
        text:"Facebook",
        link:"",
      },
      {
        text:"LinkedIn",
        link:"",
      },
      {
        text:"Twitter",
        link:"",
      }
    ]
    }
  ]
  function addContactToContainer(container, cards) {
    cards.forEach(function(item){
               let unordered_list=document.createElement("ul");
              
               let label_element=document.createElement("li");
               let bold_element=document.createElement("b");
               bold_element.innerHTML=item.label;
               label_element.appendChild(bold_element);
               unordered_list.append(label_element);
               item.data.forEach(function(element){
                let temp_list=document.createElement("li");
                let temp_anchor=document.createElement("a");
                temp_anchor.href=element.link;
                temp_anchor.innerHTML=element.text;
                temp_list.appendChild(temp_anchor);
                unordered_list.appendChild(temp_list);
               })
               container.appendChild(unordered_list);
    })
  }
  let contact_container=document.getElementById("contact-upper");
  addContactToContainer(contact_container, contact);
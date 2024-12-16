
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,

});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


const workData = [
	{ image: "https://via.placeholder.com/300x200", title: "Project 1" },
	{ image: "https://via.placeholder.com/300x200", title: "Project 2" },
	{ image: "https://via.placeholder.com/300x200", title: "Project 3" },
	{ image: "https://via.placeholder.com/300x200", title: "Project 4" },
  ];
  

const blenderData = [
    { image: "assets/img/replika.png", link: "#" },
    { image: "assets/img/pauk1.0.png", link: "#" },
    { image: "assets/img/lizalice1.png", link: "#" }
];

const figmaData = [
    { image: "assets/img/plavi_logo 1.png", link: "https://www.figma.com/proto/5mTVV5b5lFg3aLimRCoEDI/astrum?node-id=471-3291&t=kOzUsPxW2n8PuefQ-1" },
    { image: "assets/img/welcome.png", link: "https://www.figma.com/proto/uIbCDndXgU7g7E0HH1rxJu/FIDIT%2B?node-id=0-1&t=3kuaQfk5UsNWzUDg-1" },
    { image: "assets/img/Prvi zaslon_nala.png", link: "https://www.figma.com/proto/9pifzexBa7JCEJhYXyFBDC/KRALJICANETA_DIKSI?node-id=0-1&t=VUy5vS8peGQDmxI0-1" }
];


const blenderContainer = d3.select("#blender-container");


blenderContainer
    .selectAll(".work__img")
    .data(blenderData)
    .enter()
    .append("a")
    .attr("class", "work__img")
    .attr("href", d => d.link)
    .html(d => `<img src="${d.image}" alt="Blender project">`);


const figmaContainer = d3.select("#figma-container");


figmaContainer
    .selectAll(".work__img")
    .data(figmaData)
    .enter()
    .append("a")
    .attr("class", "work__img")
    .attr("href", d => d.link)
    .html(d => `<img src="${d.image}" alt="Figma project">`);

const projects = [
		{ title: "Red room", description: "3D Model - Blender", date: "2022", img: "assets/img/replika.png" },
		{ title: "Spider", description: "3D Model - Blender, polygonal modeling technique", date: "2022", img: "assets/img/pauk1.0.png" },
		{ title: "Lollipops", description: "Animation - Blender, creative coding(Python) ", date: "2022", img: "assets/img/lizalice1.png" },
		{ title: "Astrum", description: "Figma Prototype - Click to view!", date: "2023", img: "assets/img/plavi_logo 1.png" },
		{ title: "FIDIT+", description: "Figma Prototype - Click to view!", date: "2023", img: "assets/img/welcome.png" },
		{ title: "Hotel Nala", description: "Figma Prototype - Click to view!", date: "2022", img: "assets/img/Prvi zaslon_nala.png" },
	];
	
const tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('position', 'absolute')
    .style('background', '#fff')
    .style('padding', '10px')
    .style('border', '1px solid #ccc')
    .style('border-radius', '5px')
    .style('box-shadow', '0 4px 6px rgba(0,0,0,0.1)')
    .style('display', 'none');

d3.selectAll('.work__img img')
    .data(projects)
    .on('mouseover', function(event, d) {
        tooltip.style('display', 'block')
            .html(`<strong>${d.title}</strong><br>${d.description}<br>Date: ${d.date}`);
    })
    .on('mousemove', function(event) {
        tooltip.style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY + 10}px`);
    })
    .on('mouseout', function() {
        tooltip.style('display', 'none');
    });
	

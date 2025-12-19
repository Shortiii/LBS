import './styles/spotlight.css'
import img from './assets/spotlightImg.png'

const spotlightData = [
  {
    cohort: 'MBA 2015',
    name: 'Chidi Okafor',
    text: 'Leading renewable energy innovation in Sub-Saharan Africa.'
  },
  {
    cohort: 'EMBA 2010',
    name: 'Ngozi Balogun',
    text: 'Empowering women in tech through strategic mentorship.'
  },
  {
    cohort: 'SMP 2012',
    name: 'Tunde Adebayo',
    text: 'Building inclusive finance solutions for rural entrepreneurs.'
  },
  {
    cohort: 'Class 2022',
    name: 'Fatima Ali',
    text: 'Co-Founder of EduTech Hub, creating accessible education platforms for underserved communities.'
  },
  {
    cohort: 'Class 2022',
    name: 'Tunde Balogun',
    text: 'Head of Product at FinServe, revolutionizing financial services for small businesses in Africa.'
  },
  {
    cohort: 'Class 2021',
    name: 'Sophie Wang',
    text: 'Director of Operations at HealthNet, improving healthcare delivery through innovative technologies.'
  },
  {
    cohort: 'Class 2021',
    name: 'Jide Olatunji',
    text: 'VP of Engineering at SmartHome Solutions, enhancing smart living experiences with IoT technologies.'
  },
  {
    cohort: 'Class 2021',
    name: 'Aisha Mohammed',
    text: 'Founder of FashionTech, merging traditional crafts with modern tech to empower local artisans.'
  },
  {
    cohort: 'Class 2020',
    name: 'Kofi Mensah',
    text: 'Lead Data Scientist at AgriTech, using data analytics to boost agricultural productivity.'
  },
  {
    cohort: 'Class 2020',
    name: 'Leila Rahman',
    text: 'CEO of CleanEnergy Solutions, promoting renewable energy initiatives across urban centers.'
  },
  {
    cohort: 'Class 2019',
    name: 'Rashid Al-Hassan',
    text: 'Creative Director at MediaWave, transforming the media landscape through innovative storytelling.'
  },
  {
    cohort: 'Class 2019',
    name: 'Zara Khan',
    text: 'Program Manager at WomenTech Network, advocating for gender equality in tech industries.'
  },
  {
    cohort: 'Class 2018',
    name: 'Omar Farouk',
    text: 'Chief Financial Officer at BuildSmart, financing affordable housing projects for low-income families.'
  },
  {
    cohort: 'Class 2018',
    name: 'Pooja Desai',
    text: 'Startup Mentor at VentureLab, guiding aspiring entrepreneurs in the tech space.'
  },
  {
    cohort: 'Class 2017',
    name: 'Nia Robinson',
    text: 'Environmental Scientist at EcoSolutions, working on sustainable practices for urban ecosystems.'
  },
]


const spotlightContainer = document.getElementById('spotlightList')

spotlightContainer.innerHTML = spotlightData.map(item => `
  <div class="div-list flex gap-4 items-start">
    <img src=${img} alt="">
    <div class="list-details">
      <h3>${item.cohort}</h3>
      <h2>${item.name}</h2>
      <p>${item.text}</p>
    </div>
  </div>
`).join('')

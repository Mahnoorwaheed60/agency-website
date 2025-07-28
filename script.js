document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openSidebar');
  const closeBtn = document.getElementById('closeSidebar');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay-nav');

  openBtn.addEventListener('click', () => {
    // Step 1: Show overlay (fade in)
    overlay.classList.add('active');

    // Step 2: Then show sidebar (after overlay appears)
    setTimeout(() => {
      sidebar.classList.add('active');
    }, 400); // match with overlay transition
  });

  function closeSidebar() {
    // Step 1: Hide sidebar
    sidebar.classList.remove('active');

    // Step 2: After delay, hide overlay
    setTimeout(() => {
      overlay.classList.remove('active');
    }, 300); // match with sidebar transition
  }

  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);
});



const header = document.querySelector('header');
const header1 = document.querySelector('.header1');
const header2 = document.querySelector('.header2');

// Hide default header and show header2
function showheader2() {
  header.classList.add('hidden-header');
  header2.classList.remove('hidden-header');
}

// Show default header and hide header2
function showheader() {
  header.classList.remove('hidden-header');
  header2.classList.add('hidden-header');
}

// Scroll behavior
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    showheader2();
  } else {
    showheader(); // revert back to original header at top
  }
});

// Hover behavior - only active when scrollY <= 20
header1.addEventListener('mouseover', () => {
  if (window.scrollY <= 20) {
    showheader2();
  }
});

header1.addEventListener('mouseout', () => {
  if (window.scrollY <= 20) {
    showheader();
  }
});




 const services = {
    ai: {
      title: "AI Development",
      description: `
        <p>At Xeven Solutions, innovation meets intelligence. Our team of experts utilizes cutting-edge technologies to craft custom AI solutions that seamlessly integrate with your unique requirements.</p>
       <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
    chatbot: {
      title: "AI Chatbot Development",
      description: `
       <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
    gpt: {
      title: "ChatGPT Integration",
      description: `
        <p>Integrate OpenAI’s GPT models into your platform to create engaging and human-like conversations.</p>
        <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
    ml: {
      title: "Machine & Deep Learning",
      description: `
        <p>We develop predictive models using deep learning frameworks to unlock the power of data.</p>
      <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
     cv: {
      title: "Computer Vision",
      description: `
        <p>We develop predictive models using deep learning frameworks to unlock the power of data.</p>
      <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
     bda: {
      title: "Big Data Analytics",
      description: `
        <p>We develop predictive models using deep learning frameworks to unlock the power of data.</p>
      <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
     pm: {
      title: "Predictive Modeling",
      description: `
        <p>We develop predictive models using deep learning frameworks to unlock the power of data.</p>
      <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
     csd: {
      title: "Custom Software Development",
      description: `
        <p>We develop predictive models using deep learning frameworks to unlock the power of data.</p>
      <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
     dm: {
      title: "Digital Marketing",
      description: `
        <p>We develop predictive models using deep learning frameworks to unlock the power of data.</p>
      <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
     nlp: {
      title: " Natural Language Processing ",
      description: `
        <p>We develop predictive models using deep learning frameworks to unlock the power of data.</p>
      <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
      do: {
      title: "  DevOps",
      description: `
        <p>We develop predictive models using deep learning frameworks to unlock the power of data.</p>
      <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
      ux: {
      title: " UI/UX ",
      description: `
        <p>We develop predictive models using deep learning frameworks to unlock the power of data.</p>
      <h3>Business Benefits of Choosing Us</h3>
          <ul id="serviceList" >
            <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
               <li><h4><span>Cutting-Edge Expertise:</span>
              Our team of experts is proficient in utilizing the latest
              technulogies to develop custom AI solutions tailored to your needs.
            </h4></li>
           

          </ul>
             <a>Read More</a>
      `
    },
  };

  const serviceItems = document.querySelectorAll('#serviceList li');
  const serviceContent = document.getElementById('serviceContent');

  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all
      serviceItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const serviceKey = item.getAttribute('data-service');
      const service = services[serviceKey];

      serviceContent.innerHTML = `<h2>${service.title}</h2>${service.description}`;
    });
  });



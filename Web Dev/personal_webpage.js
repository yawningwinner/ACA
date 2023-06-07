const aboutContent = "I am currently in my second semester at the Indian Institute of Technology Kanpur (IITK). I am pursuing my studies in Data Science. Apart from academics, I am a passionate anime fan, and one of my all-time favorite anime series is Demon Slayer.The field of deep learning and neural networks has captured my curiosity and I am eager to delve into its depths. The power of neural networks to mimic the human brain and process vast amounts of data is awe-inspiring. I am fascinated by the potential applications of deep learning, from image and speech recognition to natural language processing and autonomous systems. The ability of neural networks to learn from data, adapt, and make predictions opens up a world of possibilities for solving complex problems and uncovering valuable insights. I am excited to explore the intricacies of neural networks, understand their architectures, and learn how to train and optimize them for various tasks. I want to immerse myself in the world of deep learning, stay updated with the latest research advancements, and contribute to the development of innovative solutions that harness the power of neural networks.";

const aboutContentElement = document.getElementById("about-content");
let index = 0;

function typeWriter() {
  if (index < aboutContent.length) {
    aboutContentElement.textContent += aboutContent.charAt(index);
    index++;
    setTimeout(typeWriter, 20); 
  } else {
    setTimeout(untypeWriter, 2000);
  }
}

function untypeWriter() {
  if (index >= 0) {
    aboutContentElement.textContent = aboutContent.slice(0, index);
    index--;
    setTimeout(untypeWriter, 30); 
  }
}

typeWriter();

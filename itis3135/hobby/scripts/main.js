// JavaScript to manage section visibility based on clicked navigation link
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

let thisPage = window.location.href;
document.getElementById("html-validator").href = "https://validator.w3.org/check?uri=" + thisPage;
document.getElementById("CSS-validator").href =  "https://jigsaw.w3.org/css-validator/validator?uri=" + thisPage;
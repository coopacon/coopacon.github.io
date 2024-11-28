// Generated with ChatGPT
async function loadHeader() {
    try {
      const response = await fetch("scripts/header.json");
      const data = await response.json();

      const headerElement = document.getElementById("dynamic-header");

      // Title
      const titleElement = document.createElement("h1");
      titleElement.textContent = data.header.title;
      headerElement.appendChild(titleElement);

      // Navigation
      const navElement = document.createElement("nav");
      data.header.navigation.forEach((item) => {
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.label;
        navElement.appendChild(link);
        navElement.innerHTML += " † "; // Add separator
      });

      // Append nav to header
      headerElement.appendChild(navElement);

      // Extra Navigation
      const extraNavElement = document.createElement("nav");
      data.header.extraNavigation.forEach((item) => {
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.label;
        extraNavElement.appendChild(link);
        extraNavElement.innerHTML += " † "; // Add separator
      });

      // Append extra nav to header
      headerElement.appendChild(extraNavElement);

      // Add header to the body
      document.body.insertBefore(headerElement, document.body.firstChild);
    
    } catch (error) {
      console.error("Failed to load header:", error);
    }
  }

  async function loadFooter() {
    try {
      const response = await fetch("scripts/footer.json");
      const data = await response.json();

      const footerElement = document.getElementById("dynamic-footer");

      // Quote
      const quoteElement = document.createElement("p");
      quoteElement.innerHTML = `<em>"${data.footer.quote}"</em>`;
      footerElement.appendChild(quoteElement);

      // Navigation
      const navElement = document.createElement("nav");
      data.footer.navigation.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.link;
        a.textContent = link.label;
        navElement.appendChild(a);
        navElement.innerHTML += " † "; // Add separator
      });
      footerElement.appendChild(navElement);

      // Credits
      const creditsElement = document.createElement("p");
      const designedBy = `<a href="${data.footer.credits.designedBy.link}">${data.footer.credits.designedBy.label}</a>`;
      const year = data.footer.credits.year;
      const certifications = data.footer.credits.certifications
        .map((cert) => `<a href="${cert.link}">${cert.label}</a>`)
        .join(" ");
      creditsElement.innerHTML = `Page designed by ${designedBy} &copy;${year}, ${certifications}`;
      footerElement.appendChild(creditsElement);
    } catch (error) {
      console.error("Failed to load footer:", error);
    }
  }

  // Load both header and footer on page load
  window.onload = () => {
    loadHeader();
    loadFooter();
  };

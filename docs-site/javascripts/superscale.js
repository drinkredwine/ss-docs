/* SuperScale Interactive Elements
 * Adds dynamic behaviors and animations
 */

document.addEventListener("DOMContentLoaded", function () {
  // Fix header positioning issues on scroll
  function handleHeaderScroll() {
    const header = document.querySelector(".md-header");
    const headerTitle = document.querySelector(".md-header__title");

    if (header && headerTitle) {
      // Ensure header stays fixed and properly positioned
      header.style.position = "fixed";
      header.style.top = "0";
      header.style.left = "0";
      header.style.right = "0";
      header.style.zIndex = "1000";

      // Prevent title overflow issues
      headerTitle.style.overflow = "hidden";
      headerTitle.style.textOverflow = "ellipsis";
      headerTitle.style.whiteSpace = "nowrap";
    }
  }

  // Call on load and resize
  handleHeaderScroll();
  window.addEventListener("resize", handleHeaderScroll);
  window.addEventListener("scroll", handleHeaderScroll);
  // Fix grid cards rendering if markdown doesn't process properly
  const gridCards = document.querySelectorAll(".grid.cards");
  gridCards.forEach((grid) => {
    // Ensure proper grid structure
    if (!grid.querySelector("ul") && !grid.querySelector("li")) {
      // If no proper list structure, create one from the content
      const items = grid.querySelectorAll("p, h3, hr, a");
      if (items.length > 0) {
        const ul = document.createElement("ul");
        ul.className = "cards-list";

        // Group content into cards (each group separated by hr or strong element)
        let currentCard = null;
        items.forEach((item) => {
          if (
            item.tagName === "HR" ||
            (item.tagName === "P" && item.querySelector("strong"))
          ) {
            if (currentCard) {
              ul.appendChild(currentCard);
            }
            currentCard = document.createElement("li");
          }
          if (currentCard) {
            currentCard.appendChild(item.cloneNode(true));
          }
        });

        if (currentCard) {
          ul.appendChild(currentCard);
        }

        // Replace original content with structured list
        if (ul.children.length > 0) {
          grid.innerHTML = "";
          grid.appendChild(ul);
        }
      }
    }
  });

  // Add fade-in animation to cards
  const cards = document.querySelectorAll(".grid.cards > *, .grid.cards li");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("ss-fade-in");
  });

  // Add SuperScale hover effects
  const links = document.querySelectorAll(
    'a[href*="README.md"], a[href*=".md"]'
  );
  links.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(4px)";
      this.style.transition = "transform 0.2s ease";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
    });
  });

  // Dynamic SuperShadow elements
  function createSuperShadowElement() {
    const shadowElements = document.querySelectorAll(".ss-supershadow");
    shadowElements.forEach((element) => {
      if (!element.querySelector(".ss-dynamic-shadow")) {
        const shadowDiv = document.createElement("div");
        shadowDiv.className = "ss-dynamic-shadow";
        shadowDiv.style.cssText = `
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(63deg, transparent 45%, rgba(74, 60, 199, 0.1) 45%, rgba(74, 60, 199, 0.1) 55%, transparent 55%);
                    pointer-events: none;
                    z-index: -1;
                    border-radius: 14px;
                `;
        element.appendChild(shadowDiv);
      }
    });
  }

  // Initialize SuperShadow elements
  createSuperShadowElement();

  // Add smooth scroll behavior for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add SuperScale branding to code blocks
  const codeBlocks = document.querySelectorAll("pre code");
  codeBlocks.forEach((block) => {
    block.style.position = "relative";

    // Add subtle brand accent
    const accent = document.createElement("div");
    accent.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #4A3CC7, #9C8AEB);
        `;
    block.parentElement.insertBefore(accent, block);
  });

  // Enhanced table styling
  const tables = document.querySelectorAll("table");
  tables.forEach((table) => {
    table.style.position = "relative";

    // Add hover effects to rows
    const rows = table.querySelectorAll("tbody tr");
    rows.forEach((row) => {
      row.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "rgba(74, 60, 199, 0.05)";
        this.style.transform = "scale(1.01)";
        this.style.transition = "all 0.2s ease";
      });

      row.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "";
        this.style.transform = "scale(1)";
      });
    });
  });

  // Add loading animation for images
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.style.opacity = "0";
    img.style.transition = "opacity 0.3s ease";

    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });

    // If image is already loaded
    if (img.complete) {
      img.style.opacity = "1";
    }
  });

  // Dynamic theme color updates
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.content = "#4A3CC7";
  }

  // Add SuperScale signature to console
  console.log(`
    ╔══════════════════════════════════════╗
    ║              SuperScale              ║
    ║        The success engine for games  ║
    ║                                      ║
    ║    Dynamic • Precise • Warm • Assured║
    ╚══════════════════════════════════════╝
    `);
});

// Progressive enhancement for modern browsers
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ss-fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe headings and sections for scroll animations
  document
    .querySelectorAll("h2, h3, .admonition, .grid.cards > *")
    .forEach((el) => {
      observer.observe(el);
    });
}

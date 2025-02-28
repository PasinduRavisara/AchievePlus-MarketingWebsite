      document.addEventListener("DOMContentLoaded", function() {
      const heroContent = document.querySelector('.hero-content');
    });

      document.addEventListener("DOMContentLoaded", function() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if(entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.5
        });

        animatedElements.forEach(el => {
          observer.observe(el);
        });
      });


        // Select all features cards
        const featuresCards = document.querySelectorAll('.features-card');
      
        // Options for the observer (when 50% of the element is visible)
        const observerOptions = {
          threshold: 0.5
        };
      
        // Callback for Intersection Observer
        const revealOnScroll = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              // Optionally unobserve the element after revealing
              observer.unobserve(entry.target);
            }
          });
        };
  
        // Create the observer
        const observer = new IntersectionObserver(revealOnScroll, observerOptions);
      
        // Observe each features card
        featuresCards.forEach(card => {
          observer.observe(card);
        });
   
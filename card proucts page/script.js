/*navbar start javascript*/
        // Toggle Navbar on mobile
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        }
/*navbar end javascript */

function scrollToSection() {
    const productSection = document.getElementById('product-section');
    productSection.scrollIntoView({ behavior: 'smooth' });
}

/*slider script*/
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Optional: Auto-play the slider
setInterval(nextSlide, 5000); // Change slide every 5 seconds

/*footer start*/

function copyPhoneNumber() {
    const phoneNumber = "+923317021329";
    const tempInput = document.createElement("input");
    
    document.body.appendChild(tempInput);
    tempInput.value = phoneNumber;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    // Show tooltip
    const tooltip = document.querySelector('.copy-tooltip');
    tooltip.classList.add('active');
    setTimeout(() => tooltip.classList.remove('active'), 2000);
}

/*contact us scrool behaviour */
            function copyPhoneNumber() {
                const phoneNumber = "+92 3317021329";
                navigator.clipboard.writeText(phoneNumber).then(function() {
                    const tooltip = document.querySelector('.tooltip');
                    tooltip.style.visibility = 'visible';
                    setTimeout(function() {
                        tooltip.style.visibility = 'hidden';
                    }, 2000);
                });
            }
    


      /* JavaScript for copying phone number*/

    function copyPhoneNumber() {
        const phoneNumber = "+92 3317021329";
        navigator.clipboard.writeText(phoneNumber).then(function() {
            const tooltip = document.querySelector('.tooltip');
            tooltip.style.visibility = 'visible';
            setTimeout(function() {
                tooltip.style.visibility = 'hidden';
            }, 2000);
        });
    }

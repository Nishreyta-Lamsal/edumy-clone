// Wait for the document to be ready
$(document).ready(function() {
  // Select all elements with the class 'counter'
  const counters = document.querySelectorAll('.counter');

  // Apply the counter effect to each one
  counters.forEach(counter => {
    // Get the target number from data-count attribute
    const target = counter.getAttribute('data-count');
    const originalText = counter.getAttribute('data-original');

    const updateCount = () => {
      const count = +counter.innerText.replace(/\D/g, ''); // Remove non-digit characters
      const increment = target / 200; // Adjust this for speed of counting

      if(count < target) {
        counter.innerText = Math.ceil(count + increment).toLocaleString();
        setTimeout(updateCount, 1); // Adjust this for smoothness
      } else {
        counter.innerText = originalText;
      }
    };

    updateCount();
  });
});




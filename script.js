$(document).ready(function () {
  // Contact Us Button Click
  $('#contactUsButton').on('click', function () {
    $('#contactFormModal').css('display', 'flex');
  });

  // Close Modal
  $('.close').on('click', function () {
    $('#contactFormModal').css('display', 'none');
  });

  // Submit Form
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    // Post form data to getform.io
    const formData = $(this).serialize();
    $.post('https://getform.io/f/navvqrda', formData)
      .done(function () {
        alert('Form submitted successfully');
        $('#contactFormModal').css('display', 'none');
      })
      .fail(function () {
        alert('Form submission failed');
      });
  });

  // Change Project Image
  $('.project-detail').on('click', function () {
    const imageSrc = $(this).data('image');
    $('.project-image').attr('src', imageSrc);
  });
});
//pagination
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});


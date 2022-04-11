window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

document.querySelectorAll('.btn2').forEach((item) => {
  item.addEventListener('click', (event) => {
    const sidemenu = event.target.parentNode.nextElementSibling;
    sidemenu.classList.toggle('show');
  });
});

document.querySelectorAll('.btn3').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.order-modal').classList.add('show-modal');
    window.scrollTo(0, 0);
  });
});

const handleMessageSubmit = () => {
  const userName = document.getElementById('userName').value;
  alert(`Thanks for contacting us ${userName}!\nYou will hear from us soon!`);
};

const handleOrderSubmit = () => {
  document
    .querySelector('.submit-order-button')
    .addEventListener('click', () => {
      const userName = document.getElementById('userNameModal').value;
      alert(
        `Thanks for order${userName}!\nYour order will be on your doorstep very soon!`
      );
      document.querySelector('.order-modal').classList.remove('show-modal');
      document.querySelector('.order-form').reset();
    });
};
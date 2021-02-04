// Initialize navbar
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  let options = [];
  const instances = M.Sidenav.init(elems, options);
});

// modal trigger
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.modal');
  let options = {
    onOpenEnd: () => {
      // Get the open modal and set focus on the first input element.
      elems.forEach((modal) => {
        if (M.Modal.getInstance(modal).isOpen) {
          modal.querySelector('input:nth-child(1)').focus();
        }
      })
    }
  };
  const instances = M.Modal.init(elems, options);
});

// confirm password on register after entering confirm password
const passwordEl = document.getElementById('reg_password');
const confirmPasswordEl = document.getElementById('reg_confirm_password');
confirmPasswordEl.addEventListener('keyup', () => {
  if (confirmPasswordEl.value !== passwordEl.value) {
    confirmPasswordEl.setCustomValidity('Passwords Do Not Match')
  } else {
    confirmPasswordEl.setCustomValidity('');
  }
});

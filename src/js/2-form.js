const formData = {
    email: "",
    message: "",
}

const feedbackForm = document.querySelector(".feedback-form");
const btnSubmit = document.querySelector('button[type="submit"]')
const textarea = feedbackForm.elements.message;
const emailV = feedbackForm.elements.email;

feedbackForm.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });
  
const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
console.log(savedFormData);

textarea.value = savedFormData.message ?? "";
emailV.value = savedFormData.email ?? "";

  feedbackForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (textarea.value === "" || emailV.value === "") {
        alert('Fill please all fields')}
    else {
        console.log(formData)
        localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
    }    
  });


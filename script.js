const form = document.querySelector("form");
const successMessage = document.querySelector("#success-message");

const planButtons = document.querySelectorAll(".plan-button");
const membershipSelect = document.querySelector("#membership");

planButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const selectedPlan = button.dataset.plan;
    membershipSelect.value = selectedPlan;
  });
});

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  });

  if (response.ok) {
  successMessage.textContent = "Thanks! We’ll contact you soon.";
  successMessage.style.color = "#4caf50";
  form.reset();
} else {
  successMessage.textContent = "Something went wrong. Please try again.";
  successMessage.style.color = "#ff4d4d";
}
});
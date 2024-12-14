// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const delayInput = event.target.elements.delay.value;
  const state = event.target.elements.state.value;

  const delay = parseInt(delayInput, 10);

  if (isNaN(delay) || delay <= 0) {
    iziToast.error({
      title: "Error",
      message: "Please enter a valid positive number for delay",
    });
    return;
  }

  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        title: "✅ Success",
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "❌ Error",
        message: `Rejected promise in ${delay}ms`,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

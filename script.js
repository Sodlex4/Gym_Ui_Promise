document.getElementById("bookBtn").addEventListener("click", () => {
    const client = document.getElementById("clientName").value.trim();
    const slot = document.getElementById("slotTime").value;
    const loader = document.getElementById("loader");
    const message = document.getElementById("message");

    if (!client || !slot) {
      message.textContent = "❗ Please enter your name and select a time slot.";
      return;
    }

    loader.classList.remove("hidden");
    message.textContent = "";

    const bookSlot = new Promise((resolve, reject) => {
      let slotAvailable = Math.random() > 0.2;

      setTimeout(() => {
        loader.classList.add("hidden");
        if (slotAvailable) {
          resolve(`✅ ${client}, your slot at ${slot} is booked!`);
        } else {
          reject("❌ Sorry, that slot is full. Try another one.");
        }
      }, 2000);
    });

    bookSlot
      .then(msg => message.textContent = msg)
      .catch(err => message.textContent = err);
  });
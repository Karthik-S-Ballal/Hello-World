function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
  
    const digits = document.querySelectorAll(".digit");
    digits.forEach((digit, index) => {
      const digitValue = index <=1 ? hours[index] : (index == 2) ? minutes[0] : (index == 3) ? minutes[1] : (index == 4) ? seconds[0] : seconds[1];
      digit.textContent = digitValue;
  
      // Set the transform property to flip the digit
      digit.style.transform = `rotateX(${digitValue * -360}deg)`;
    });
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
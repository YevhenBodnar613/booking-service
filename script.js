const buttons = document.querySelectorAll('.time-btn');
const timeGrid = document.getElementById('timeGrid');
const statusContainer = document.getElementById('status-container');
const statusText = document.getElementById('status-text');
const serviceSelect = document.getElementById('service');
const resetBtn = document.getElementById('reset-btn');

// Логіка натискання на час
buttons.forEach(btn => {
  btn.onclick = function() {
    const time = this.innerText;
    const service = serviceSelect.value;
    
    statusText.innerText = `✅ Записано на ${service} о ${time}`;
    statusContainer.style.display = "block";
    timeGrid.style.display = "none";
  };
});

// Логіка кнопки "Забронювати ще раз"
resetBtn.onclick = function() {
  statusContainer.style.display = "none";
  timeGrid.style.display = "grid";
  statusText.innerText = "";
};
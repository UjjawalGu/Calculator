
const calculatePercentage = function () {
    const wins = parseInt(document.querySelector("#wins").value);
    const loss = parseInt(document.querySelector("#loss").value);
    const tiescheckbox = document.querySelector("#includeTies").checked;
  
    let ties = 0;
  
    if (tiescheckbox) {
      ties = parseInt(document.querySelector("#ties").value);
    }
  
    const total = wins + loss + ties;
    let winningPercentage;
    if (tiescheckbox) {
      winningPercentage = ((2 * wins + ties) / (2 * total)) * 100;
    } else {
      winningPercentage = (wins / total) * 100;
    }
  
    document.querySelector(
      ".output"
    ).innerText = `Winning Percentage: ${winningPercentage.toFixed(2)}%`;
  };
  document.querySelector("#includeTies").addEventListener("change", function () {
    const tiesInput = document.querySelector("#ties");
    const display = document.querySelector('.display');
    if(this.checked) {
      display.style.display = 'block';
      tiesInput.disabled = false;
    }
    else {
      display.style.display = 'none';
      tiesInput.disabled = true;
    }
  });
  
  const addDisplay = function(){
   
  }
  addDisplay();
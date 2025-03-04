function changeColor(color) {
    const messageElement = document.getElementById('message');
    const dialogElement = document.getElementById('colorDialog');
    
    if (color === 'pink') {
      messageElement.textContent = "You selected pink! New content will open.";
    } else if (color === 'blue') {
      messageElement.textContent = "You selected blue! Please choose another color.";
    } else if (color === 'green') {
      messageElement.textContent = "You selected green! Selection is complete.";
    }
  
    dialogElement.showModal();
  }
  
  function closeDialog() {
    const dialogElement = document.getElementById('colorDialog');
    dialogElement.close();
  }
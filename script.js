document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
  
    if (name && phone) {
      var table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
      var newRow = table.insertRow();
  
      var nameCell = newRow.insertCell(0);
      var phoneCell = newRow.insertCell(1);
  
      nameCell.textContent = name;
      phoneCell.textContent = phone;
  
      // Limpar o formulário após adicionar o contato
      document.getElementById('contactForm').reset();
    }
  });
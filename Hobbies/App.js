let draggables = document.querySelectorAll(".draggable");

const dropZone = document.getElementById('drop-zone');

draggables.forEach(function(dragItem) {
  dragItem.addEventListener('dragstart', ev => {
    ev.dataTransfer.setData('text', ev.target.id);
    ev.target.classList.add('dragging'); // Add the class to change the border
  });

  dragItem.addEventListener('dragstart', ev => {
    ev.dataTransfer.setData('text', ev.target.id);
    ev.target.classList.add('dragging'); // Add the class to change the border
  });
  
  dragItem.addEventListener('drag', ev => ev.target.classList.add('dragging'));
  
  dragItem.addEventListener('dragend', ev => {
    ev.target.classList.remove('dragging');
  }); 
});


// Event listeners for the drop zone
dropZone.addEventListener('dragover', ev => ev.preventDefault()); // Necessary to allow the drop

dropZone.addEventListener('drop', ev => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  const draggableElement = document.getElementById(data);
  if(draggableElement.id == "drag-item2") {
    ev.target.appendChild(draggableElement);
    ev.target.style.border = '2px dashed #ccc'; // Reset border if needed
    ev.target.style.backgroundColor = "";
  }
});

dropZone.addEventListener('dragenter', ev => {
  ev.target.style.border = '2px dashed blue'; // Highlight for user feedback
  ev.target.style.backgroundColor = 'yellow'
});

dropZone.addEventListener('dragleave', ev => {
  ev.target.style.border = '2px dashed #ccc'; // Reset border if needed
  ev.target.style.backgroundColor = "None";
});
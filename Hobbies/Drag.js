let draggables = document.querySelectorAll(".draggable");

const dropZone = document.getElementById('drop-zone');

draggables.forEach(function(dragItem) {
  dragItem.addEventListener('dragstart', ev => {
    ev.dataTransfer.setData('text', ev.target.id);
    ev.target.classList.add('dragging'); 
  });

  dragItem.addEventListener('dragstart', ev => {
    ev.dataTransfer.setData('text', ev.target.id);
    ev.target.classList.add('dragging'); 
  });
  
  dragItem.addEventListener('drag', ev => ev.target.classList.add('dragging'));
  
  dragItem.addEventListener('dragend', ev => {
    ev.target.classList.remove('dragging');
  }); 
});


// Event listeners for the drop zone
dropZone.addEventListener('dragover', ev => ev.preventDefault()); 

dropZone.addEventListener('drop', ev => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  const draggableElement = document.getElementById(data);
  if(draggableElement.id === "drag-item2") {
    ev.target.appendChild(draggableElement);
    ev.target.style.border = '2px dashed #ccc'; 
    ev.target.style.backgroundColor = "";
  }
});

dropZone.addEventListener('dragenter', ev => {
  ev.target.style.border = '5px dashed green'; 
});

dropZone.addEventListener('dragleave', ev => {
  ev.target.style.border = '5px dashed black'; 
});
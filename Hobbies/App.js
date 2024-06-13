// React function component to render a list of class names

function ClassList() {
  const classes = ['Biology', 'Chemistry', 'Physics', 'Mathematics'];
  
  return (
    <div className="container">
          {classes.map((className, index) => (
       
              <div className="card" key={index}>{className}</div>
          ))}
      
    </div>
  );
}

// Render the ClassList component in the 'app' div
ReactDOM.render(<ClassList />, document.getElementById('app'));
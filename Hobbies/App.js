// React function component to render a list of class names
import "./App.css";

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

export default ClassList;

// Render the ClassList component in the 'app' div
ReactDOM.render(<ClassList />, document.getElementById('app'));
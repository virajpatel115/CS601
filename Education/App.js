// React function component to render a list of class names

function ClassList() {
  const under = ['Biology', 'Chemistry', 'Physics', 'Mathematics'];
  const masters = ['Biology', 'Chemistry', 'Physics', 'Mathematics'];

  return (
    <div className="container">
      <h2>My Education</h2>
      <h3>Undergraduate</h3>
      <div className="under">
        {under.map((className, index) => (
            <div className="card" key={index}>{className}</div>
        ))}   
      </div>
      
      <h3>Graduate</h3>
      <div className="masters">
        {under.map((className, index) => (
          <div className="card" key={index}>{className}</div>
        ))}   
      </div>
    </div>

  );
}

// Render the ClassList component in the 'app' div
ReactDOM.render(<ClassList />, document.getElementById('app'));
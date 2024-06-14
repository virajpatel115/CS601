// React function component to render a list of class names

function ClassList() {
  const under = ['Data Science', 'Database Design & Practices', 'Information Systems in Management', 'Computer Networks', "Scripting Languages"];
  const masters = ['Data Structure & Algorithms', 'Advanced Programming Techniques', 'Software Design & Patterns', 'Information Structures with Python'];

  return (
    <div className="app-container">
      <h2>Undergraduate</h2>
      <h3>BS in Information Systems, Stony Brook University</h3>
      <p>Graduation Date: 2019</p>
      <div className="under">
        {under.map((className, index) => (
            <div className="card" key={index}>{className}</div>
        ))}   
      </div>

      <h2>Graduate</h2>
      <h3>MS in Software Development, Boston University</h3>
      <p>Graduation Date: December 2024 (Expected)</p>
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
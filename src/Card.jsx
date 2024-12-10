import "./Card.css"

function Card({teamname , members= []}) {
    return (
      <>
    <article className="card">
        <div className="thumb"></div>
        <div className="infos">
          <h2 className="title">{teamname}</h2>
          {members.map((member, index) => (
            <div key={index}>
              <h3 className="seats">{member}</h3>
              <br />
            </div>
          ))}
        </div>
      </article>
    </>
    );
  }
  
  export default Card;
  
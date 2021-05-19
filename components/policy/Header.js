export default function Header({ text }) {
  return (
    <header id="header" className="ex-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{ text }</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

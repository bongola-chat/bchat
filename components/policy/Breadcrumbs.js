export default function Breadcrumbs({ text }) {
  return (
    <div className="ex-basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumbs">
              <a href="index.html">Home</a>
              <i className="fa fa-angle-double-right"></i>
              <span>{text}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

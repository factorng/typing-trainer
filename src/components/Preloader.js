import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__text">Loading, please wait...</div>
      <i className="circle-preloader"></i>
    </section>
  );
}

export default Preloader;

import "./home.css";
import { useNavigate } from "react-router-dom";

const foods = [
  "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
  "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  "https://cdn-icons-png.flaticon.com/512/5787/5787016.png",
  "https://cdn-icons-png.flaticon.com/512/3480/3480618.png",
  "https://cdn-icons-png.flaticon.com/512/135/135620.png",
];

function Home() {
    var Navigate=useNavigate();
  // 🎯 mouse parallax effect


  return (
    <div className="hero">
      {/* floating foods */}
      {foods.map((src, i) => (
        <img key={i} src={src} alt="" className={`hover-food pos${i + 1}`} />
      ))}

      {/* center content */}
      <div className="hero-content">
        <h1 className="title">Daydream Food Club</h1>
        <p className="subtitle">Delicious moments floating in the dark ✨</p>

        <div className="buttons">
          <button className="btn register" onClick={()=>{
                Navigate("/Register")
              }}>Register</button>
          <button className="btn login" onClick={()=>{
                Navigate("/login")
              }}>Login</button>
        </div>
      </div>

      {/* glow ring */}
      <div className="glow-ring" />
    </div>
  );
}

export default Home;
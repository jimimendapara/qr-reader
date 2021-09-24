import React,{ useState } from "react";
import QrReader from "react-qr-reader";
import { useSound } from "use-sound";
import Waveurl from "./mixkit-positive-notification-951.wav";

function App() {
  const [result, setResult] = useState("No result App");
  const [play] = useSound(Waveurl, { volume: 0.5 });

  const handleScan = (data) => {
    if (data) {
      play();
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <QrReader
            delay={3000}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <p>{result}</p>
    </div>
  );
}

export default App;

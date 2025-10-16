import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Timer runs every 1.8 seconds
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((t) => t + 1), 600);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Start/Stop toggle
  const handleStartStop = () => setIsRunning((prev) => !prev);

  // Reset
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const colors = {
    background: "#f7f7f7ff",
    card: "#000205ff",
    title: "#00fc4cff",
    start: "#ef4444",
    stop: "#facc15",
    reset: "#22c55e",
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: colors.card,
          color: "white",
          padding: "40px",
          borderRadius: "12px",
          width: "260px",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ color: colors.title, marginBottom: "10px" }}>
          Stopwatch ADV 101
        </h1>

        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "25px",
            fontFamily: "'Orbitron', sans-serif",
          }}
        >
          {Math.floor(time / 60)
            .toString()
            .padStart(2, "0")}
          :
          {(time % 60).toString().padStart(2, "0")}
        </h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={handleStartStop}
            style={{
              backgroundColor: isRunning ? colors.stop : colors.start,
              color: isRunning ? "black" : "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontFamily: "'Poppins', sans-serif",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {isRunning ? "𝑺𝑻𝑶𝑷" : "𝐒𝐓𝐀𝐑𝐓"}
          </button>

          <button
            onClick={handleReset}
            style={{
              backgroundColor: colors.reset,
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontFamily: "'Poppins', sans-serif",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            𝑹𝑬𝑺𝑬𝑻
          </button>
        </div>
      </div>
    </div>
  );
}
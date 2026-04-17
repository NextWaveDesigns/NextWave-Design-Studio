import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("NWDS Backend Running");
});

app.post("/api/generate", (req, res) => {
  const layout = [
    { id: 1, type: "chair", x: 100, y: 120, width: 80, height: 80 },
    { id: 2, type: "table", x: 220, y: 200, width: 120, height: 80 }
  ];

  res.json({ layout });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
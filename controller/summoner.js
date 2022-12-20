import Summoner from "../models/Summoner.js";


export const getSummoners = async (req, res) => {
  try {
    const summoners = await Summoner.find();
    res.json(summoners);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getSummoner = async (req, res) => {
    try {
      const { id } = req.params;
      const summoner = await Summoner.findById(id);
  
      if (summoner) {
        return res.json(summoner);
      }
  
      res.status(404).json({ message: "Summoner not found!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

export const createSummoner = async (req, res) => {
  try {
    const summoner = new Summoner(req.body);
    await summoner.save();
    res.status(201).json(summoner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateSummoner = async (req, res) => {
  try {
    const { id } = req.params;
    const summoner = await Summoner.findByIdAndUpdate(id, req.body);
    res.status(201).json(summoner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteSummoner = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Summoner.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Summoner deleted!");
    }

    throw new Error("Summoner not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
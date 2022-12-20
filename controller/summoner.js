import Summoner from "../models/Summoner.js";

export const getSummoner = async (req, res) => {
  try {
    const summoner = await Summoner.find();
    res.json(summoner);
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
import Champion from "../models/Champion.js";


export const getChampions = async (req, res) => {     //Get all champions
  try {
    const champions = await Champion.find();
    res.json(champions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getChampion = async (req, res) => {    //Get specific champion
    try {
      const { id } = req.params;
      const champion = await Champion.findById(id);
  
      if (champion) {
        return res.json(champion);
      }
  
      res.status(404).json({ message: "Champion not found!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

export const createChampion = async (req, res) => {  //Create a new champion
  try {
    const champion = new Champion(req.body);
    await champion.save();
    res.status(201).json(champion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateChampion = async (req, res) => {    //Update a specific champion
  try {
    const { id } = req.params;
    const champion = await Champion.findByIdAndUpdate(id, req.body);
    res.status(201).json(champion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteChampion = async (req, res) => {  //Delete a champion
  try {
    const { id } = req.params;
    const deleted = await Champion.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Champion deleted!");
    }

    throw new Error("Champion not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
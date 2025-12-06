const supabase = require("../config/supabase");

exports.getNutrition = async (req, res) => {
  const itemId = req.params.id;

  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .eq("id", itemId)
    .single();

  if (error || !data) {
    console.error(error);
    return res.status(404).json({ error: "Item not found" });
  }

  res.json(data);
};



const bakeryItems = [
  { id: "1", name: "Apple Pie", calories: 340, sugar: "18g", fat: "22g", protein: "6g" },
  { id: "2", name: "Coffee", calories: 10, sugar: "35g", fat: "5g", protein: "5g" },
  { id: "3", name: "Chicken Sandwich", calories: 450, sugar: "40g", fat: "25g", protein: "7g" }
];

exports.getNutrition = (req, res) => {
  const item = bakeryItems.find(i => String(i.id) === String(req.params.id)); //was worried about potential mismatch
  res.json(item);
};



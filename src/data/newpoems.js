import { existsSync, readFileSync, writeFileSync } from "fs";

const filePath = "src\\data\\poems.json";

// New poems to be added
const newPoems = [
  {
    id: 8,
    title: "ज्ञान अज्ञान",
    language: "marathi",
    content: `बारीक असा अंतर असे 
शब्दात या दोन
असे नाव जया 
ज्ञान व अज्ञान 

नसे माहीत कोणा फरक
नसे जाण कोणा अंतर
वेळ फक्त दाखवी
यात फरक नी अंतर

तुटे हे रेख जया 
संपेल तया सर्व
समजे ना कधी
घडे ना कधी

सुटे शब्दातला उच्चार अ
तया घडे उच्चार ज्ञान 
जूडे शब्दात उच्चार अ 
तया बिघडे उच्चार ज्ञान
नी होवे अज्ञान 

अंतर हा इतकाच 
शब्द हे इतकेच
फरक यात अवघेच
असे शब्द जे 
ज्ञान व अज्ञान `,
    preview: "बारीक असा अंतर असे \nशब्दात या दोन\n",
  },  
];

// Check if file exists and has valid JSON
let poemsData = { poems: [] };
if (existsSync(filePath)) {
  try {
    const existingData = readFileSync(filePath, "utf8");
    poemsData = JSON.parse(existingData);
    if (!Array.isArray(poemsData.poems)) {
      throw new Error("Invalid format: 'poems' should be an array");
    }
  } catch (error) {
    console.error(
      "Error reading or parsing poems.json. Creating a new file.",
      error
    );
    poemsData = { poems: [] }; // Reset to default structure
  }
}

// Ensure unique IDs for new poems
const existingIds = new Set(poemsData.poems.map((poem) => poem.id));
newPoems.forEach((poem) => {
  while (existingIds.has(poem.id)) {
    poem.id++;
  }
  existingIds.add(poem.id);
  poemsData.poems.push(poem);
});

// Write updated data back to the file
try {
  writeFileSync(filePath, JSON.stringify(poemsData, null, 2), "utf8");
  console.log("Poems have been saved to poems.json");
} catch (error) {
  console.error("Error writing to poems.json:", error);
}

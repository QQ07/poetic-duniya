import { existsSync, readFileSync, writeFileSync } from "fs";

const filePath = "src\\data\\poems.json";

// New poems to be added
const newPoems = [
  {
    id: 9,
    title: "Epitome of love",
    language: "english",
    content: `Incarnation of infatuation
Essence of affection
Instantiation of passion
Abstract of desire 

Caress account in three
Crave being the first
Allure the second
Add-on bond to be the final
Phases counting in three
Summa of worship

Segments of of love
With warmth, fondness
Devotion to cherish
Alliance of zenith
Praised to the promised land
Being an belle of paradise

Reincarnation of treasure
Brings clouds chasing dark
Complications elevate
Fondness explode
Reverence to scorn
Like to loathe
Leading the way to demise of soul
It's the epitome of love
 `,
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

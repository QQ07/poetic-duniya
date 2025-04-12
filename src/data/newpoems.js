import { existsSync, readFileSync, writeFileSync } from "fs";

const filePath = "src\\data\\poems.json";

// New poems to be added
const newPoems = [
  {
    id: 11,
    title: "Hard to say you all a goodbye",
    language: "english",
    content: 'Longing in the memories
    Withstanding in your presence
    We all are wondering 
    How to say you all 
    Those simple words
    All those though seems easy
    But yet hard to say
    Hard to say you all a goodbye
    
    Splashes of the countless memories
    Moments we spend together 
    Occasions we celebrated together 
    Hardships we faced, success we achieved
    All these moments we spend together
    Turning to memories
    Can't think of turning the pages 
    Cause these chapter is about to close
    Though the new chapter brings more joy
    Yet it's hard to to say
    Hard to say you all a goodbye
    
    Though the memories longing behind 
    Success awaits for you
    Bringing joy, happiness and prosperity 
    May this all moments and memories 
    Live long enough to the last breath
    May you all achieve the strength 
    To get all you wish for' ,
    preview: "All those though seems easy\nBut yet hard to say\nHard to say you all a goodbye\n",
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

import { existsSync, readFileSync, writeFileSync } from "fs";

const filePath = "src\\data\\poems.json";

// New poems to be added
const newPoems = [
  {
    id: 11,
    title: "कोणते माझे धर्म",
    language: "marathi",
    content: `कोणी ना विचारे काय माझे नाव  
कोणी ना विचारे कोणते माझे गाव 
कोणी ना विचारे कोणती माझी भाषा 
कोणी ना विचारे कोणते माझे भाव 
विचारे आज सर्वे कोणते माझे धर्म 

ना चाले आज जात पात इथं 
न विचारे आज सर्वे नुसतं 
कोणते माझे धर्म 

राहे जिथं मिळूणी सर्वे एकत्र 
चले जिथं मिळूणी एक 
तिथे चाले आज हा विषय 
नी कोणी बोले नी विचारे 
कोणते माझे धर्म 

ना जात ना पात 
ना अमीर ना गरीब 
असो तो कोणी मात्र 
मारेल तो फक्त 
एक च धर्म 

दहशत ही कशी जमली
आज या आपुल्या दारी 
आले कोण हे घुसूणी 
मारे हे कसे आपल्या बंधूंना 
का तर असे त्यास हिंदू धर्म 

देई दोष सर्व फक्त तयासणी 
म्हणे असे ते मुस्लिम धर्म 
केला नाही जिथं फरक काही 
देव असे सारखाच असो तो धर्म कोणत्याही 
अल्लाह असो व राम असो व  गजानन 
आहे सर्वे एक मग कुठून आले हे फरक 

असे जिथे सर्व जीव 
नसे काही फरक जयासणी 
का असे फरक तिथे 
नी विचारे कोणी येउणि इथे 
कोणते असे माझे धर्म`,
    preview:
      "कोणी ना विचारे काय माझे नाव  \nकोणी ना विचारे कोणते माझे गाव\n",
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

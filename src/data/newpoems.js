import { existsSync, readFileSync, writeFileSync } from "fs";

const filePath = "src\\data\\poems.json";

// New poems to be added
const newPoems = [
  {
    id: 7,
    title: "बाप आणि लेक ",
    language: "marathi",
    content: `लेक जाई सासरी 
बाप बोले भर पिशवी
येतो सोडूणी पोरी
सुखरूपे तुज तुझ्या घरी 

येई तू बणूणी पाहुणी 
आता जावे लागे तुज बाळा 
समजूनी सांगे बाबा तया 
जावे लगे का सासरी तुजला 

होतं जे घर आधी तुझलं  
झाले ग आज ते माहेर तुझं 
येई आता तू चार दिवसाची पाहुणी 
जा ग पोरी आता आपल्या घरला 

लाहानाची मोठी झाली जिथं 
सुटलं घर आता हे सारं 
सुटले ग घर हे पोरी आता 
गेले जिथं तुझं बालपण सारं 

याच घरी आणलं होतं तुजला 
माझ्याच या हातानी बाळा 
तुझ्या त्या इतुकल्या पाउलाणणी 
घर हे सारा गदबळूणी जायचं  

पाहुणी तुज जाता पोरी 
येई धार अश्रुंच्या नयनी 
वाटे सून सून घर हे आता 
राहावे ना जिव आता जया इथे 

दिसे काल पोरी जेव्हा नयनी रोज तू इथे 
खेळी अंगणात या, नी बघे आम्ही खाटावरी जे 
आता आंगण झालंया सून हे ग पोरी 
बसतो आता आम्ही दोघंच इथे 

वाट पहाते नयन आमचे पोरी 
बसतो जया बाजेवरी मिळूणी 
वाटे येई कधी पोर ही इथं 
नी खेळे कधी पुन्हा आधी वाणी 

पुसवित अश्रु नयनाचे, बोले बाबा माझे 
चल ग पोरी करू नको उशीर आणखी 
येतो सोडूणी तुला तुझ्या घरी
घे निरोप आता, नी कर संसार सुखाचा पोरी 
`,
    preview: "लेक जाई सासरी\nबाप बोले भर पिशवी\n",
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

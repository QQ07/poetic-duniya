import { existsSync, readFileSync, writeFileSync } from "fs";

const filePath = "src\\data\\poems.json";

// New poems to be added
const newPoems = [
  {
    id: 14,
    title: "घडामोडी",
    language: "marathi",
    content: `बोलण्यात अबोली झाली होती खरी 
बोलण्यात अबोली झाली होती खरी 
पण त्यात वाट चुकली होती थोडी 
रोजच्या त्या सवई नित्यानेमाणे चाली 
रोजच्या त्या सवई नित्यानेमाणे चाली 
जिथे नको होते तिथेच जाऊन बोली 
चुकत चुकत आलो आपण कुठं 
बोलात अबोली करून जिंकलो काय आपण इथं 

शब्दाला शब्द जोडूनी बोलतो आपण खरे 
शब्दाला शब्द जोडूनी बोलतो आपण खरे 
पण तोचटात किती बघतो आपण कुठे 
मानलं मानपान ज्याचा त्याला देतो आपण खूप 
मानलं बघा मानपान ज्याचा त्याला देतो आपण खूप 
पण बोलण्यात आपण वाकड वाघतो किती बघ 
म्हणून म्हणतात शब्द जपून वापरावे 
तिराहून शब्द घाव करतात मोठे 
जपुनी शब्द म्हनूणी वापरावे, नी विना चुकून बोलावे 

फूटी कौळी पासून  सुरू झाला होता जो व्यापार 
फूटी कौळी पासून  सुरू झाला होता जो व्यापार 
रुपया परेंत येऊन पोचला बघा तो आज 
दशकाणू दशकात बदलत आले ते मूल्य
अवधि अवधि ने बदलले त्याचेच महत्व 
मान मोठा कौळीचा होता ज्या दशकि 
रुपया झाला मोठा बघा या दशकि 
कोटी ते दहा दशलक्ष पोचले आज सर्वे 
कुठे न मोजे आज कोणी कौळी न दमळी इथे 
हरवले ते नाणे, कौळी, आणि दमळी 
आले हाती नुसतं आता नोट भारी भारी 
बघा किती बदलले सारे दशको दशकि 
फूटी कौळी पासूणी रुपया आला भारी भारी 

अभिमान अहंकाराणे भरला हा संसार किती 
अभिमान अहंकाराणे भरला हा संसार बघा किती 
आढयता माणसात वाढली ही किती 
किंमत नसे आज पैसास न असे कोणा शब्दास
मान आणि दर्प बघा भांडेएकमेकास 
वाढे तोरा नी बणवे अभिमानी
जिंकूनी सर्व हरवे अहंकाराणी 

हरवूनी मोल शब्दासी कसली राहली बोली 
म्हणूनच तर बोलण्यात अबोली झाली ही खरी 
शब्दास शब्द जोडूनी मन टोचले लई सारे 
म्हणूनच तर बोलण्यात अबोली झाली ही खरी 
अभिमान अहंकाराणे भरून विसरले मान सर्वे 
म्हणूनच तर बोलण्यात अबोली झाली ही खरी 
म्हणूनच तर बोलण्यात अबोली झाली ही खरी 
बोलण्यात अबोली झाली हीच खरी`,
    preview:
      "बोलण्यात अबोली झाली होती खरी, पण त्यात वाट चुकली होती थोडी\n",
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

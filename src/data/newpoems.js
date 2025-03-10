import { existsSync, readFileSync, writeFileSync } from "fs";

const filePath = "poems.json";

// New poems to be added
const newPoems = [
  {
    id: 1,
    title: "राधा भी रोई थी",
    language: "marathi",
    content: `राधा भी रोई थी विरह की आग में
मीरा भी रोई थी उसके ख़ोज में
पाने कान्हा की बस एक झलक को
सारी गोपियां भी रोई थी
नाही पूरी हुई प्रीत राधा की
नहीं प्रार्थना मीरा की
प्रीत जगत को हैं जिसने सिखाई
उसी ने विरह की कठिनाइयां है सही

गोपियां सारी रोई देख विरह की घड़ी
राधा मदहोश पड़ी विरह की आग में
सहे कितने सितम जहां में सबने 
कोई ना बच सका इस विरह के ज़ोर से
ना तब राधा कृष्ण बच पाए थे
ना अब प्रेमी प्रेमिका बच पा रहे
हुई न थी मुक्कम्मल मोहब्बत की डोर तब
है क्या उम्मीद होगी अब?

मोहब्बत न मिली थी राधा को उस समय
न रुक्मिणी पा पाई थी सुख प्यार का
साथ दिया कृष्ण ने भले ही रुक्मिणी का
पर क्या मोहब्बत मिली उसे कृष्ण की
प्यार तो कृष्ण बरसाता सब पे था
मगर मोहब्बत कर बैठा सिर्फ उससे था
तब नाही मोहब्बत मुक्कम्मल हुई थी
है क्या कोई उम्मीद होगी अब?

राधा ने तो बस प्यार का सच देखा था
मीरा ने तो इंसान में ही भगवान खोजा था
मगर, क्या दिया साथ हालात ने उनका
एक झोंके से ही पलट दिया सारे जीवन का हश्र उनका
उनके मोहब्बत के हालत के
झोंके आज सारे कवि बजाते हैं 
मोहब्बत तो तब भी न हुई मुक्कम्मल थी
अब क्या है कोई उम्मीद होगी अब?

देखने मोहब्बत को मुक्कम्मल होते
विरह की सीढ़ियां चढ़ी कितनी जाती
पर हुई न मोहब्बत मुक्कम्मल तब भी
है क्या अब उम्मीद कोई की पूरी होगी अब?
`,
    preview: "राधा भी रोई थी विरह की आग में\nमीरा भी रोई थी उसके ख़ोज में\n",
  },
  {
    id: 2,
    title: "वादळ",
    language: "marathi",
    content: `वादळ हे मनातलं का आज उरहुन उठले
काय तरी हवंय या मनाला कोणाला का नाही कळले
जाते मन हे भटकून सुटते ते धागे 
विणलेल्या त्या धाग्यांचं उलगढायचं मात्र राहूनिया जाते
क्षण तो आलेला रमवून नेतो मना सारे
भासलेले ते क्षणाचं स्थायिक राहणं मात्र राहूनिया जाते
काय तरी हवंय या मनाला कोणाला का नाही कळले 

वादळ हे मनातलं का आज उरहुन उठलं 
काय तरी हवंय या मनाला कोणाला का नाही कळले

जाते क्षणो क्षणी हे मागे मागे जणू बनून भवरा
त्या फुलाच्या सुगंधालाही नसते याचे भान
एखाद्या कागदा ला जशे दिले जाते शब्दांच्या बेडी
तसाच जणू दिल्या जातो प्रेमाच्या या मनाला बेडी
नसते त्या शब्दांना, न कागदाला, न त्या प्रेमाला या काळजाचे भान
काय तरी हवंय या मनाला कोणाला का नाही कळले

वादळ हे मनातलं का आज उरहुन उठले
काय तरी हवंय या मनाला कोणाला का नाही कळले

अखेर हे शेवटचं पान उरलं
मनातल्या त्या सर्व्या आठवणी एका डबक्यात भरलं 
लावली किल्ली त्या डबक्याला न सोडले त्यास समुद्रात
खारं पाण्याची वृत्तीच जनु न्यारी फेकले तयाने डबक्याला किनारी 
खुलले ते किल्ली आणि घेतला तयाने वेग
नसते उरवह्यचे ते सारे वादळ परत उरहवले
मग काय तर परत तीच मनाची व्यथा 
परत तेच वादळ आणि मनाचं उरहवने
सुरू झाला तो चक्रव्यूह पुन्हा
उठले ते वादळ, सुटले ते धागे, हरवले ते क्षण
उरहवलेले ते आठवणी चिरढून गेले ते मनी
काय तरी हवंय या मनाला कोणाला का नाही कळलं

वादळ हे मनातलं का आज उरहुन उठलं 
काय तरी हवंय या मनाला कोणाला का नाही कळलं

एकची मात्र राहूनिया गेले
क्षणो क्षणी साथ तयाची भेटले
तो पान मात्र उलघडायचे राहुनिया गेले
मित्र जयासी म्हणता, जिवलगी बनुनी रहूनिया गेले
विचार काय कारावा न घडूनिया काय गेले
साथ बघून मित्राची वादळ गेले ते भटकून 
कळले त्या क्षणी राहिले नाही काही यात अजून
कळले त्या क्षणी मनाच्या त्या साऱ्या व्यथा
उरहवलेलं वादळ शांत जणू झालं 
काही नकोय या मनाला आता
वादळ सारे शांत जणू झालं 

वादळ हे मनातलं का आज उरहुन उठले
काय तरी हवंय या मनाला कोणाला का नाही कळले
`,
    preview:
      "वादळ हे मनातलं का आज उरहुन उठले\nकाय तरी हवंय या मनाला कोणाला का नाही कळले",
  },
  {
    id: 3,
    title: "व्यथा  काळजाची",
    language: "marathi",
    content: `काय सांगू व्यथा मी 
माझ्या या काळजाची
तू जिथे मी तिथे असावे 
वाटते या मनाशी

होईल का रे स्वप्न पुरे 
पाहिले जे मी संगती
राही का रे साथ तुझी 
होई का ना सोबती

दिशा ही का वेगळी 
होई रे कान्हा
साथ दे तू मजशी 
होई का ना रे कुणा

साथ तुझी 
साथ तुझी हवी रे मला
माझ्या या मना
देई ना रे साथ तू, 
जाई का रे दूर तू

साथ तुझी 
साथ तुझी हवी रे मला
माझ्या या मना              x2

साथ तुझी हवी या मना
काय सांगू रे कान्हा
भावे ना रे दुरी ही मना
येई ना जवळी पुन्हा
वाटे तू हवेसा मनी
का ना राही सोबती
येई ना रे जवळी तू
का जाई दूर तू

होई काय रे माझ्या मना 
सांगू काय रे मी तुला
व्यथा ती माझी 
होई का रे पाहुनी तुला

जाऊ नको दूर तू 
वाटे हे माझ्या मना 

काय सांगू व्यथा मी 
माझ्या या काळजाची
तू जिथे मी तिथे असावे वाटते या मनाशी
`,
    preview:
      "काय सांगू व्यथा मी\nमाझ्या या काळजाची\nतू जिथे मी तिथे असावे\nवाटते या मनाशी\n",
  },
  {
    id: 4,
    title: "व्यक्तिमत्व",
    language: "marathi",
    content: `कोणासाठी शांत तर कोणासाठी लाजाळू 
कोणी म्हणे अंतर्मुखी तर कोणी म्हणे उभयमुखी 
फिरत्या जगी राहण्याजागी वाटे मना राहे एकटं 
भेटे शांती जिवा जेव्हा राही हे फक्त 

नाही हे अंतर्मुखी बघा 
बस झालंय बेभान हे प्रेमात 
प्रेम ते स्वत:च्या जीवी, मनी 
प्रेम हे फक्त सारं माझं माझ्याशीच 
राह्य पाही मन हे दूर साऱ्याशी 
ओळखी व अनोळखी असो कुणीही 
राही पाहे मन हे दूर साऱ्याशी 

म्हणी मला जे आहे मी अंतर्मुखी 
विचारवं कोणी तया असे जो जया 
दिसे भला कसा माणूस हा अंतर्मुखी जना 
दुरून दिसे जो शहाणा रही का कोणी असा म्हणा 
अंतर्मुखी असो व बहिर्मुख ओळखावे कसे यांना जना 
दिसे जे जया नसे तया 
भासे मना जशे असे का नेमकं खरं तशे 

शांत दिसे जो नेहमी 
माने का कोणी असे तो चिडखोर 
बोले का कोणी असे तो रागीट 
नाही राही सके शांत तो 

माने अंतर्मुखी तो मजला 
ठेवले मी जया दूर 
बहिर्मुख मी तयासाठी 
जाणे मज जो
`,
    preview:
      "कोणासाठी शांत तर कोणासाठी लाजाळू \nकोणी म्हणे अंतर्मुखी तर कोणी म्हणे उभयमुखी...",
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

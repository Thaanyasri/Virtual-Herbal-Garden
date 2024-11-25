// Plant data for search by name
const plantData = {
  "Tulsi": { 
    botanicalName: "Ocimum sanctum", 
    benefits: "Boosts immunity, fights infections", 
    medicalSubstance: "Eugenol", 
    medicinalPart: "Leaves" 
  },
  "Neem": { 
    botanicalName: "Azadirachta indica", 
    benefits: "Cleanses blood, treats acne", 
    medicalSubstance: "Azadirachtin", 
    medicinalPart: "Leaves, Bark, Seeds" 
  },
  "Aloe Vera": { 
    botanicalName: "Aloe barbadensis miller", 
    benefits: "Heals wounds, aids digestion, moisturizes skin", 
    medicalSubstance: "Aloin, Emodin", 
    medicinalPart: "Leaves" 
  },
  "Mint": { 
    botanicalName: "Mentha", 
    benefits: "Soothes digestion, relieves headaches, freshens breath", 
    medicalSubstance: "Menthol, Tannins", 
    medicinalPart: "Leaves" 
  },
  "Ashwagandha": { 
    botanicalName: "Withania somnifera", 
    benefits: "Reduces stress, boosts energy, enhances memory", 
    medicalSubstance: "Withanolides, Alkaloids", 
    medicinalPart: "Root" 
  }
};

// Symptom data for search by symptoms
const symptomData = {
  "headache": ["Peppermint", "Lavender"],
  "stress": ["Tulsi", "Ashwagandha"],
};

// Search by Plant Name
document.getElementById("plantSearchForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("plantName").value.trim();
  const plant = plantData[name];
  if (plant) {
    document.getElementById("botanicalName").textContent = plant.botanicalName;
    document.getElementById("plantBenefits").textContent = plant.benefits;
    document.getElementById("medicalSubstance").textContent = plant.medicalSubstance;
    document.getElementById("medicinalPart").textContent = plant.medicinalPart;
    document.getElementById("plantInfo").style.display = "block";
  } else {
    alert("Plant not found!");
  }
});

// Search by Symptoms
document.getElementById("symptomSearchForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const symptom = document.getElementById("symptoms").value.trim().toLowerCase();
  const plants = symptomData[symptom];
  const plantList = document.getElementById("plantList");
  plantList.innerHTML = "";
  if (plants) {
    plants.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      plantList.appendChild(li);
    });
    document.getElementById("plantInfo").style.display = "block";
  } else {
    alert("No plants found for the entered symptom.");
  }
});

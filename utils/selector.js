module.exports.pillSelector = (data) => {
  const age = data.age;
  const smokes = data.smokes;
  const purpose = data.purpose;
  const sideEffects = data.sideEffects;
  const healthConditions = data.healthConditions;
  const medications = data.medications;
  const period = data.period;

  if ((age > 35 && smokes) || healthConditions.length > 0) return "minipill";
  else if (purpose.includes("Endometriosis")) return "previfem";
  else if (purpose.includes("Polycystic Ovarian Syndome (PCOS)"))
    return "alesse";
  else if (purpose.includes("Premenstrual Dysphoric Disorder")) return "beyaz";
  else if (purpose.includes("Acne")) {
    if (medications.includes("Topiramate")) return "gianvi";
    else return "ocella";
  } else if (period == "skip") {
    const rand = Math.floor(Math.random() * 2);
    if (rand == 1) return "seasonique";
    else return "seasonale";
  } else if (medications.length > 0) return "velivet";
  else if (sideEffects.length > 0) return "apri";
  else return "lybrel";
};

export function helloWorld(message) {
  console.log(message)
}

export function generateName(gender, maleNames, femaleNames, unisexNames, lastNames) {
  if (gender == 'male') {
    return maleNames[Math.floor(Math.random()*maleNames.length)].name + ' ' + lastNames[Math.floor(Math.random()*lastNames.length)].name;
  } else if (gender == 'female') {
    return femaleNames[Math.floor(Math.random()*femaleNames.length)].name + ' ' + lastNames[Math.floor(Math.random()*lastNames.length)].name;
  } else {
    return unisexNames[Math.floor(Math.random()*unisexNames.length)].name + ' ' + lastNames[Math.floor(Math.random()*lastNames.length)].name;
  }
}

export function generateAge(ageRange) {
  if (ageRange == '10-18') {
    return Math.floor(Math.random() * (18 - 10) + 10);
  } else if (ageRange == '19-29'){
    return Math.floor(Math.random() * (29 - 19) + 19);
  } else if (ageRange == '30-39'){
    return Math.floor(Math.random() * (39 - 30) + 30);
  } else if (ageRange == '40-49'){
    return Math.floor(Math.random() * (49 - 40) + 40);
  } else if (ageRange == '50-59'){
    return Math.floor(Math.random() * (59 - 50) + 50);
  } else if (ageRange == '59+'){
    return Math.floor(Math.random() * (125 - 59) + 59);
  } else {
    return Math.floor(Math.random() * (125 - 10) + 10);
  }
}

export function randomHoroscope(horoscopes) {
  return horoscopes[Math.floor(Math.random()*horoscopes.length)].horoscope;
}
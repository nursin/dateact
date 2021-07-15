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
  if (ageRange == '10-19') {
    return Math.floor(Math.random() * (19 - 10) + 10);
  } else if (ageRange == '20-29'){
    return Math.floor(Math.random() * (29 - 20) + 20);
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

export function generateBIO() {
  const GREW_UP_IN = ['small', 'large', 'jungle'];
  const LIKES = ['cats', 'dogs', 'tigers', 'peanuts', 'cilantro'];
  const OWNS_A = ['house', 'cat', 'dog', 'robot', 'boat', 'hospital', 'business'];
  const PLAYS = ['baseball', 'basketball', 'football', 'video games'];
  const BIGGEST_ACHIEVEMENT = ['ate a biscuit', 'ran a marathon', 'won a superbowl ring', 'have a baby'];
  const ULTIMATE_GOAL = ['be a dancer', 'fly a plane', 'have a baby', 'eat 60 pizzas', 'beat a guinness world record'];
  const ASPIRE_TO_BE = ['a bunny', 'hit man', 'gardener'];

  return "Grew up in a " + GREW_UP_IN[Math.floor(Math.random()*GREW_UP_IN.length)] + " town. Likes " + LIKES[Math.floor(Math.random()*LIKES.length)] + ". Owns a " + OWNS_A[Math.floor(Math.random()*OWNS_A.length)] + ". Plays " + PLAYS[Math.floor(Math.random()*PLAYS.length)] + ". Biggest achievement is " + BIGGEST_ACHIEVEMENT[Math.floor(Math.random()*BIGGEST_ACHIEVEMENT.length)] + ". My ultimate goal is to " + ULTIMATE_GOAL[Math.floor(Math.random()*ULTIMATE_GOAL.length)] + ". Aspire to be " + ASPIRE_TO_BE[Math.floor(Math.random()*ASPIRE_TO_BE.length)] + ".";
  // 'Movies','TV','Religion','Music','Sports','Books','Politics'
}

export function generateAdjectives(positive, negative) {
  return positive[Math.floor(Math.random()*positive.length)].positive + "/" + negative[Math.floor(Math.random()*negative.length)].negative;
}

export function generateQuirkyFact(quirkyFacts) {
  return quirkyFacts[Math.floor(Math.random()*quirkyFacts.length)].quirkyFact;
}

export function generateProfession(professions) {
  return professions[Math.floor(Math.random()*professions.length)].profession; 
}
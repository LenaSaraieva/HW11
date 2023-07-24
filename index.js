//Вік
let birthYear = prompt('What year were you born?');
if (birthYear === null) {
    alert("It's a pity that you didn't want to enter your year of birth.");
  } else {
const currentYear = new Date().getFullYear();
const age = currentYear -  birthYear;
alert(`You are ${age} years old!`);}

//Місто
const  city = prompt('Where do you live?');
if (city === null) {
    alert("It's a pity that you didn't want to enter the city you live in.");
  } else {
function showMessage(city) {
 switch (city) {
    case 'Kyiv':
    alert('You live in the capital of Ukraine');
    break;

    case 'Washington':
    alert('You live in the capital of the United States');
    break;   

    case 'London':
        alert('You live in the capital of the United Kingdom');
        break;
        default:
            alert(`You live in ${city}.`);
            break;
    }
}
showMessage(city);}

//Спорт
let favoriteSport = prompt('What is you favourite kind of sport?');
if (favoriteSport === null) {
    alert("It's a pity that you didn't want to enter your favourite kind of sport.");
  } else {
function showMessage2(favoriteSport) {
    switch (favoriteSport) {
        case 'football':
            alert('Cool! Would you like to become like Andriy Shevchenko?');
            break;

        case 'basketball':
            alert('Cool! Would you like to become like Michael Jordan?');
            break;
        
        case 'tennis':
            alert('Cool! Would you like to become like Elina Svitolina?');
            break;

            default:
      alert(`Awesome! Do you have any idols in ${favoriteSport}?`);
      break;
  }
    }
showMessage2(favoriteSport);}


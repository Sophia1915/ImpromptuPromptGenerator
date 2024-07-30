let btn = document.getElementById('btn');
let output = document.getElementById('output');

let concrete = ['Dress', 'Bicycle', 'Toothbrush', 'Coffee', 'Medicine', 'Magnet', 'Skyscraper', 'Smile', 'Tree', 'Skeleton', 'Photograph', 'Rainbow', 'Library', 'Music', 'Turtle', 'Notebook', 'Headphones', 'Lion', 'Violin', 'Ocean', 'Pen', 'Luggage', 'Piano', 'Desk', 'Popcorn', 'Knife', 'Village', 'Money', 'Teacher', 'Ivory', 'Sheep', 'Mirror', 'Ladder', 'Flag', 'Baggage', 'Magician', 'Tea', 'Eraser', 'Globe', 'Baby', 'Scissors', 'Flowers', 'Sand', 'Alarm Clock', 'Fire', 'Exit', 'Wall', 'Mountain'];

let abstract = ['Responsibility', 'Accountability', 'Honesty', 'Hunger', 'Independence', 'Influence', 'Inspiration', 'Leadership', 'Love', 'Lust', 'Loyalty', 'Nature', 'Order', 'Patience', 'Power', 'Privacy', 'Recognition', 'Resourcefulness', 'Freedom', 'Empathy', 'Ambition', 'Creativity', 'Compassion', 'Justice', 'Respect', 'Hope', 'Wisdom', 'Courage', 'Risk', 'Security', 'Self-Control', 'Serenity', 'Stability', 'Status', 'Strength', 'Success', 'Greed', 'Anger', 'Aggression', 'Selfishness', 'Betrayal', 'Pain', 'Grief', 'Rudeness', 'Disgust', 'Despair', 'Faith'];

let quote = ['"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela', '"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt', '"It is during our darkest moments that we must focus to see the light." -Aristotle', '"The future belongs to those who believe in the beauty of their dreams. " -Eleanor Roosevelt', '"I have not failed. I have just found 10,000 ways that will not work." -Thomas A. Edison', '"Early to bed and early to rise makes a man healthy, wealthy, and wise." -Benjamin Franklin', '"What does not kill you makes you stronger." -Kelly Clarkson', '"Be yourself; everyone else is already taken." -Oscar Wilde', '"Success is not final; failure is not fatal: It is the courage to continue that counts." -Winston S. Churchill', '"Curiosity is the wick in the candle of learning." -William Arthur Ward', '"Life is what happens when you are busy making other plans." -John Lennon', '"Whoever is happy will make others happy too." -Anne Frank', '"Two roads diverged in a wood and I took the one less traveled by, and that has made all the difference." -Robert Frost', '"When in  Rome, do as the Romans do."', '"Always forgive your enemies; nothing annoys them so much." -Oscar Wilde', '"Everyone has a plan: until they get punched in the face." -Mike Tyson.', '"The time is always right to do what is right." -Martin Luther King, Jr ', '"The pure and simple truth is rarely pure and never simple." -Oscar Wilde', '"We choose to go to the moon not because it is easy, but because it is hard." -John F. Kennedy', '"Each generation imagines itself to be more intelligent than the one that went before it and wiser than the one that comes after it." -George Orwell', '"Be the change that you wish to see in the world." -Mahatma Gandhi', '"Worrying is like paying a debt you do not owe." -Mark Twain', '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." -Martin Luther King, Jr', '"Live as if you were to die tomorrow. Learn as if you were to live forever." -Mahatma Gandhi', '"We accept the love we think we deserve." -Stephen Chbosky', '"No one is more hated than he who speaks the truth." -Plato', '"At the touch of love, everyone becomes a poet." -Plato', '"Never discourage anyone who continually makes progress no matter how slow." -Plato', '"Yer a wizard, Harry." -Hagrid', '"In the face of pain there are no heroes." -George Orwell', '"Any fool can criticize, complain, and condemn-and most fools do." -Dale Carnegie', '"All men have fears, but the brave put down their fears and go forward, sometimes to death, but always to victory." -Dale Carnegie', '"We know that no one ever seizes power with the intention of relinquishing it." -George Orwell', '"We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty." -Maya Angelou', '"Peace begins with a smile." -Mother Teresa', '"In the long run, the sharpest weapon of all is a kind and gentle spirit." -Anne Frank', '"A jack of all trades is master of none"', '"April is the cruelest month - T.S. Eliot"', '"Absence makes the heart grow fonder"', '"My soul has grown deep like the rivers" - Langston Hughes', '"The grass is always greener on the other side"', '"Life is short, eat dessert first" - Jacques Torres', '"Necessity is the mother of invention"', '"Nothing gold can stay" - Robert Frost', '"Children should be seen and not heard"', '"Knowledge is power"', '"Love conquers all"'];

let types = [concrete, abstract, quote];

let all = new Set(concrete.concat(abstract, quote));

let listsLen = [concrete.length, abstract.length, quote.length];

var given = new Set();


btn.addEventListener('click', function(){

  var indexes = [];
  
  for (let i = 0; i < 3; i += 1) {

    while (indexes.length != i+1) {
      
      var randIndex = Math.floor(Math.random() * listsLen[i]);
      
      if (!(given.has(types[i][randIndex]))) {
        indexes.push(randIndex);
        given.add(types[i][randIndex]);
      }
    }
  }

  if (given == all) {
    given = new Set()
  }
  
  output.innerHTML = `${concrete[indexes[0]]},
   ${abstract[indexes[1]]}, ${quote[indexes[2]]}`;
  
})
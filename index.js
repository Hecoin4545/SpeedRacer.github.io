let changingParaTag = [
    'He was a round little man with a red face and a whole box of tools with dials and wires. He smiled at Margie and gave her an apple, then took the teacher apart.',


    'This experiment shows that just a few crystals of potassium permanganate can colour a large volume of water (about 1000 L). So we conclude that there must be millions of tiny particles in just one crystal of potassium permanganate, which keep on dividing themselves into smaller and smaller particles.',

    'The original oranges from Southeast Asia were a tangerine-pomelo hybrid, and they were actually green. In fact, oranges in warmer regions like Vietnam and Thailand still stay green through maturity. For more interesting facts, find out which “orange” came first: the color or the fruit.',

    'You can even buy its meat in at least 21 states. Don’t miss these other random facts about your favorite foods.' ,

    'Zimbabwe attained independence from White minority rule in 1980. Since then the country has been ruled by ZANU-PF, the party that led the freedom struggle. Its leader, Robert Mugabe, ruled the country since independence. Elections were held regularly and always won by ZANU-PF. '  ,


    'In Pakistan, General Pervez Musharraf led a military coup in October 1999. He overthrew a democratically elected government and declared himself the ‘Chief Executive’ of the country. Later he changed his designation to President and in 2002 held a referendum in the country that granted him a fiveyear extension.'  ,

    'Yes, it actually is a wrong path. What has democracy brought to our country? Seven decades of democracy and there is so much poverty in the country.'  ,

    'Who decided to issue this Memorandum? Clearly, such a big decision could not have been taken by the person who signed that document. The officer was merely implementing the instructions given by the Minister of Personnel, Public Grievances and Pensions, of which the Department was a part.' ,

    'They appealed to the courts to declare the order invalid and stop its implementation. The Supreme Court of India bunched all these cases together. This case was known as the ‘Indira Sawhney and others Vs Union of India case’. Eleven judges of the Supreme Court heard arguments of both sides.' ,

    'A web server commonly known as HTTP server or application server is a program that serves content using the HTTP protocol. This content is generally in the form of HTML documents, images, and other web resources, but can include any type of file. The content served by the web server can be pre-existing (static content) or generated on the fly (dynamic content). ' ,

'The collection of web pages on the World Wide Web that is accessed by its own Internet address is called a Web site. Thus, a Web site is a collection of related Web pages. Each Web site contains a home page and contains other additional pages. Each Web site is owned and updated by an individual, company, or an organization. Web is a dynamically moving and changing entity, today web sites generally change on a daily or even hourly basis. ' , 
 
'The first step in constructing a website is to decide about the web hosting provider for your site. ' ,

'Rohit Sharma is currently in the A+ Grade of players as specified by the BCCI, which pays him an annual salary of INR & crore. Rohit Sharma is also paid a sum of INR 15 lakh per Test match, INR 6 lakh per ODI and INR 3 lakh per T20I match played as his match fee from the BCCI.' , 

'Virat Kohli and Rohit Sharma along with Jasprit Bumrah will earn Rs 7 crore a year as their BCCI salary.' , 

'Despite losing hundreds of thousands of players, PUBG is not dead yet. It is still far ahead from most battle royale games like Ring of Elysium and Z1 Battle Royale. ' ,

'Main purpose of education is to educate individuals within society, to prepare and qualify them for work in economy as well as to integrate people into society and teach them values and morals of society. '  ,

'One primary function of a school is to socialize children. This means that, in the society of their peers, children learn acceptable behavior, reciprocal relationships, the norms of society, and appropriate conflict resolution.' , 

'A child gets the education from his experiences outside the school as well as from those within on the basis of these factors. There are three main types of education, namely, Formal, Informal and Non-formal. Each of these types is discussed below.' , 

'Richer is the most suitable word . Grammatically, they are both “correct”, being alternative versions of the comparative of te adjective “rich”. However, “more rich” is seldom used. More rich is the comparative form of rich.'  ,

'Colors that are created by mixing together many colors tend to be richer. ... A color that is richer tends to relate better, or be in harmony with other colors in your art simply because that color has been created with a small amount of all those other colors.' ,

'DISH Network Corporation is an American television provider based in Englewood, Colorado.' ,

'Total revenues for the full-year 2020 were $15.49 billion, compared with $12.81 billion in 2019. ... Net income for the full year was $1.76 billion, up from $1.4 billion in 2019. Customer numbers, however, were not so rosy' , 

'The form of Para you are referring to is the verb parar which means to stop. When commanding something or someone to stop!' ,

'A story is the telling of an event, either true or fictional, in such a way that the listener experiences or learns something just by the fact that he heard the story. A story is a means of transferring information, experience, attitude or point of view. ' ,

'Apparently his first words to her were "Will you marry me?" or so the story goes (= that is what people say happened).' ,

'The precursors of short story were legends, mythic tales, folk tales, fairy tales, fables and anecdotes which were present in various ancient communities across the world.' ,

'Short stories date back to oral storytelling traditions which originally produced epics such as the Ramayana, the Mahabharata, Homer is Iliad and Odyssey. Oral narratives were often told in the form of rhyming or rhythmic verse, often including recurring sections or, in the case of Homer, ' ,

'The contemporary sport of ice hockey was developed in Canada, most notably in Montreal, where the first indoor hockey game was played on March 3, 1875. ' ,

'A wealth of historic edifices in India is testament to the rich heritage of the country. India is amongst the top 10 countries in the world in terms of the number of World Heritage Sites.' ,

' Sharma holds the world record for the highest individual score by a batsman playing in a one-day international match, having scored 264 against Sri Lanka at Eden Gardens, Kolkata, on 13 November 2014. ' ,

'Hello I my Self Het. Want to be a good coder and this is the first step of my coding journey' ,

'The limited-overs \vice-captain said he likes to get 9-10 hours of sleep which is the reason why he is mostly late to have breakfast. ' , 

'The Mumbai batsman is the most successful player in the 14-year history of the league in other words he is Baap of IPL. As a captain, Rohit has the highest win percentage (59.82). He leads his team from the front with the bat.' ,

'something that actually exists; reality; truth: Your fears have no basis in fact. something known to exist or to have happened: Space travel is now a fact. ' 
]

let toggleButton = document.querySelector('#btn2');
let changingJsText = document.querySelector('#changingTextJs');
let mainText = document.querySelector('#MainText')



function StartingFunction() {
    let randomTextGenerator = Math.floor(Math.random() * changingParaTag.length);
    let textGenerator = changingParaTag[randomTextGenerator]
        changingJsText.innerHTML = textGenerator;
        date = new Date();
        starting = date.getTime();
}

function endFunction() {
    date = new Date();
    ending = date.getTime();
    totalNo =(ending - starting) / 1000;
    valueTypeByUser = mainText.value;
    splid = valueTypeByUser.split(' ').length;
    wordPerMin = Math.round((splid / totalNo) * 60);
    
}

function total() {
  words1 = mainText.value;
  words2 = changingJsText.innerText;  
 words1 =  words1.split(" ");
//   console.log(words1);
  words2 =  words2.split(" ");
//   console.log(words2);
count = 0;
  words2.forEach(function(e,index){
      if(e == words1[index]){
          count++
      }
      errorr = (words2.length - count);

  })
}
function lastfunc() {
    
}
function reset() {
    changingJsText.innerHTML = 'your speed is about' + ' ' + wordPerMin + ' ' + 'WPM' +' ' + 'and errors are' + ' ' + errorr + ' ' + 'out of ' + words2.length + ' ' + 'words'
}
toggleButton.addEventListener('click', function(){
    if(toggleButton.innerHTML == 'Start'){
        mainText.disabled = false;
        toggleButton.innerHTML = 'Done'
        StartingFunction()
    }else if(toggleButton.innerHTML == 'Done'){
      
        mainText.disabled = true;
        toggleButton.innerHTML = 'Start'
endFunction()
total()
lastfunc()
reset()
    }
})

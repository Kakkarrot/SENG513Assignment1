// Code credits: this code was written by Dr. Pavol Federl for the SENG 513 course at the UofC
// https://codepen.io/pfederl/pen/JEMKwB


function getStats(txt) {
    // you need to write your own code here

   let wordCount = 0;
   //getting rid of new lines
   let split = txt.replace(/[\r\t\n]+/g," ");
   //splitting numbers and letters
   split = split.replace(/[^0-9](?=[0-9])/g, '$& ');
   //stripping all special characters
   split = split.replace(/[^0-9a-zA-Z\s]/g, '');
   //getting word count where words are not empty
   split = split.split(" ").filter(i => i);

   

    return {
        nChars: txt.length,
        nWords: split.length,
        nLines: 10,
        nNonEmptyLines: 22,
        averageWordLength: 3.3,
        maxLineLength: 33,
        tenLongestWords: ["xxxxxxxxx", "123444444"],
        tenMostFrequentWords: ["a", "this", "the"]
    };

}

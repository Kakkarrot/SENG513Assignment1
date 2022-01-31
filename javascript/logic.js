// Code credits: this code was written by Dr. Pavol Federl for the SENG 513 course at the UofC
// https://codepen.io/pfederl/pen/JEMKwB


function getStats(txt) {
    // you need to write your own code here

    //Getting word count below using regex
    //getting rid of new lines
    let nWords = txt.replace(/[\r\t\n]+/g, " ");
    //splitting numbers and letters
    nWords = nWords.replace(/[^0-9](?=[0-9])/g, '$& ');
    //stripping all special characters
    nWords = nWords.replace(/[^0-9a-zA-Z\s]/g, '');
    //getting word count where words are not empty
    nWords = nWords.split(" ").filter(i => i);

    let nLines = txt.split("\n")
    let nNonEmptyLines = nLines.filter(i => i)

    let averageWordLength = 0
    for (let word in nWords) {
        averageWordLength += word.length
    }
    averageWordLength = averageWordLength/nWords.length

    let maxLineLength = 0
    for (let line in nNonEmptyLines) {
        if (line.length > maxLineLength) {
            maxLineLength = line.length
        }
    }

    nWords.sort(function(a, b){
        return b.length - a.length;
    });

    let occurrences = {};
    nWords.forEach(function (x) { occurrences[x] = (occurrences[x] || 0) + 1; });
    let sorted = Object.keys(occurrences).sort(function(a,b){return occurrences[b]-occurrences[a]})

    return {
        nChars: txt.length,
        nWords: nWords.length,
        nLines: nLines.length,
        nNonEmptyLines: nNonEmptyLines.length,
        averageWordLength: averageWordLength,
        maxLineLength: maxLineLength,
        tenLongestWords: nWords.slice(0, 10),
        tenMostFrequentWords: sorted.slice(0, 10)
    };

}

function reverseWord(sentence) {
    
    const words = sentence.split(' ');
  
 
    const reversedWords = words.map(word => {
    
      return word.split('').reverse().join('');
    });
  

    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  

  const inputSentence = "This is Wrong Statement";
  const reversedSentence = reverseWord(inputSentence);
  console.log(reversedSentence);
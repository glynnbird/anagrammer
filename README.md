# Anagrammer

A simple anagram solving application. Very simple documents containing only the word to be indexed, are stored in Cloudant e.g.

```
  {
     "_id": "astronomer"
   }
```

A MapReduce index is created to index the letters of the words in alphabetical order:

```
function(doc) {
  var generateDigest = function(str) {
    str = str.toLowerCase().replace(/[\-',\./%\? ]/g,"");
    return str.split("").sort().join("");
  };  
  emit( generateDigest(doc._id), null);
}

```

which produces keys like this:

```
  "aemnoorrst" ---> null
```

We can then query the view, with a pre-processed string to find the solution to an anagram:

```
curl 'https://reader.cloudant.com/anagrammer/_design/fetch/_view/byDigest?key="aemnoorrst"'

```

This repository contains

* the text files used to make the dictionary
* the code required to make a BlueMix application which queries the database

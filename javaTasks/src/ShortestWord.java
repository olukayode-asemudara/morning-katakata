//pseudo algorithm
//step 1- Write a method that takes a string sentence and returns a string of the shortest word in the sentence
//step 2- Inside your method, write a loop that goes through each word and when it space it means thats a new word. Store it in an array
// step 3- Get the first one as the shortest, compare it with the next word you find.

public class ShortestWord {
    static String shortestWord(String sentence){
        String[] array = sentence.split(" ");

        int smallestLength = array[0].length();
        String smallestWord = array[0];
        for(String element : array) {
            if(element.length() < smallestLength) {
                smallestLength = element.length();
                smallestWord = element;
            }
        }

        return smallestWord;
    }
}

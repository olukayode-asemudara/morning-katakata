import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ShortestWordTest {
    @Test
    public void testThatICanFindTheShortestWord(){
        ShortestWord word = new ShortestWord();
        String sentence = "Hello Olukayode Asemudara";
        assertEquals("Hello", word.shortestWord(sentence));
    }

    @Test
    public void testThatICanFindTheShortestOneTwoLetterWord(){
        ShortestWord word = new ShortestWord();
        String sentence = "if they are in good spirit";
        assertEquals("if", word.shortestWord(sentence));
    }

    @Test
    public void testForTwoLetterFrenchWord(){
        ShortestWord word = new ShortestWord();
        String sentence = "oui ouya babi boo";
        assertEquals("oui", word.shortestWord(sentence));
    }
}

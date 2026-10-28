import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AscendingSquaredArrayTest {

    @Test
    public void testSquaredArray(){
        AscendingSquaredArray sqa = new AscendingSquaredArray();
        int[] array = {3,2,7,1,4};
        int[] expected = {1,4,9,16,49};
        assertArrayEquals(sqa.squaredArray(array),  expected);
    }

    @Test
    public void testSquaredForLengthTwo(){
        AscendingSquaredArray sqa = new AscendingSquaredArray();
        int[] array = {3,2};
        int[] expected = {4,9};
        assertArrayEquals(sqa.squaredArray(array),  expected);
    }

    @Test
    public void testSquaredForNegativeIndexes(){
        AscendingSquaredArray sqa = new AscendingSquaredArray();
        int[] array = {3,2,-1,0,-10};
        int[] expected = {0,1,4,9,100};
        assertArrayEquals(sqa.squaredArray(array),  expected);
    }
}

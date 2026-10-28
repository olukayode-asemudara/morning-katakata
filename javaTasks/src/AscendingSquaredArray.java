import java.util.Arrays;

public class AscendingSquaredArray {
    public static int[] squaredArray(int[] array) {
        int[] newArray = new int[array.length];
        int count = 0;

        for(int number : array){
           newArray[count] = number * number;
           count++;
        }
        System.out.println(Arrays.toString(Arrays.stream(newArray).sorted().toArray()));
        return Arrays.stream(newArray).sorted().toArray();
    }
}

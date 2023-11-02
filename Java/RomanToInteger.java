import java.util.HashMap;

public class RomanToInteger {
    public static void main(String[] args) {
        String romanNumeral = "IV";

        int result = romanToInteger(romanNumeral);
        System.out.println("Integer value of " + romanNumeral + " is: " + result);
    }

    public static int romanToInteger(String s) {
        // Create a HashMap to store the values of Roman numerals
        HashMap<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int result = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);

            if (i < s.length() - 1 && romanMap.get(currentChar) < romanMap.get(s.charAt(i + 1))) {
                result -= romanMap.get(currentChar);
            } else {
                result += romanMap.get(currentChar);
            }
        }

        return result;
    }
}

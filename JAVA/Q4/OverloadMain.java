// Save as OverloadMain.java
public class OverloadMain {

    // 1. JVM Entry Point - This is where execution starts
    public static void main(String[] args) {
        System.out.println("Execution started from: public static void main(String[] args)");
    }

    // 2. Overloaded main() method with an int parameter
    public static void main(int number) {
        System.out.println("Overloaded main(int) called with: " + number);
    }

    // 3. Overloaded main() method with a String parameter
    public static void main(String message) {
        System.out.println("Overloaded main(String) called with: " + message);
    }
}
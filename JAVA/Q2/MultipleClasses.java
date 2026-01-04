// File: MultipleClasses.java

// This is the public class, its name MUST match the file name.
public class MultipleClasses {
    public static void main(String[] args) {
        System.out.println("--- Executing MultipleClasses main() ---");
        System.out.println("This is the main class defined in the file.");
    }
}

// This is a package-private class
class ClassA {
    public static void main(String[] args) {
        System.out.println("--- Executing ClassA main() ---");
        System.out.println("This class is executed independently.");
    }
}

// This is another package-private class
class ClassB {
    public static void main(String[] args) {
        System.out.println("--- Executing ClassB main() ---");
        System.out.println("Another class executed independently.");
    }
}
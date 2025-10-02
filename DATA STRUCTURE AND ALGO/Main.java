import java.util.Stack;

public class Main{
    public static void main(String[] args) {
        Stack<String> stack = new Stack<String>();

        stack.push("genshin impact");
        stack.push("honkai Star Rail");
        stack.push("Wuthering Waves");
        stack.push("Valorant");
        stack.push("League of Legends");
        stack.push("Apex Legends");

        //stack.pop();
        
        System.out.println(stack.peek());
        System.out.println(stack);
        System.out.println("Popped: " + stack.pop());
        System.out.println("Stack after 1st pop: " + stack);
        System.out.println(stack.search("Apex Legends"));  
        }
}


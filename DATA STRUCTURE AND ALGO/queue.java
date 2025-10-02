import java.util.LinkedList;
import java.util.Queue;

public class queue {
    public static void main(String[] args) {

    Queue<String> queue = new LinkedList<String>();

    queue.offer("Karen");
    queue.offer("John");
    queue.offer("Mary");
    queue.offer("Chad");
    queue.poll();                    //remove,dequeue
    queue.offer("MOON");           //adding,enqueue  

    System.out.println(queue);
    System.out.println(queue.peek());
    System.out.println(queue.isEmpty());
    System.out.println(queue.size());

    }
}

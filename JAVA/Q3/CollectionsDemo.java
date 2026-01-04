import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        
        // 1. LIST Interface (Implemented by ArrayList)
        // Assumption: We are storing a list of student names.
        System.out.println("--- 1. List Interface (ArrayList) ---");
        List<String> studentList = new ArrayList<>();
        studentList.add("Amit");
        studentList.add("Rahul");
        studentList.add("Amit"); // Duplicate allowed
        studentList.add("Priya");
        
        System.out.println("List Elements (Ordered, Duplicates allowed): " + studentList);
        System.out.println("Element at index 1: " + studentList.get(1));


        // 2. SET Interface (Implemented by HashSet)
        // Assumption: We are storing unique ID numbers.
        System.out.println("\n--- 2. Set Interface (HashSet) ---");
        Set<Integer> idSet = new HashSet<>();
        idSet.add(101);
        idSet.add(102);
        idSet.add(103);
        idSet.add(101); // Duplicate ignored
        
        System.out.println("Set Elements (Unordered, Unique only): " + idSet);


        // 3. QUEUE Interface (Implemented by LinkedList)
        // Assumption: A line of customers waiting for service.
        System.out.println("\n--- 3. Queue Interface (LinkedList) ---");
        Queue<String> queue = new LinkedList<>();
        queue.offer("Customer 1");
        queue.offer("Customer 2");
        queue.offer("Customer 3");
        
        System.out.println("Queue: " + queue);
        System.out.println("Head of Queue (poll): " + queue.poll()); // Removes first element
        System.out.println("Queue after poll: " + queue);


        // 4. MAP Interface (Implemented by HashMap)
        // Assumption: Storing Country Code (Key) and Country Name (Value).
        System.out.println("\n--- 4. Map Interface (HashMap) ---");
        Map<String, String> countryMap = new HashMap<>();
        countryMap.put("IN", "India");
        countryMap.put("US", "United States");
        countryMap.put("UK", "United Kingdom");
        countryMap.put("IN", "Bharat"); // Duplicate Key overwrites previous value
        
        System.out.println("Map Elements (Key=Value): " + countryMap);
        System.out.println("Value for key 'US': " + countryMap.get("US"));
    }
}
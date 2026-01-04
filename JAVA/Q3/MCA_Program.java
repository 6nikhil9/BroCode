// Implements BOTH interfaces
public class MCA_Program implements IP, Foreign_Collaborations {
    
    // Must implement all methods from IP
    @Override
    public void conductExams() {
        System.out.println("MCA: Conducting exams for " + IP.UNIVERSITY);
    }
    
    // Must implement all methods from Foreign_Collaborations
    @Override
    public void studentExchangeProgram() {
        System.out.println("MCA: Managing student exchange program.");
    }

    @Override
    public void internationalConference() {
        System.out.println("MCA: Organizing AI/ML International Conference.");
    }
}
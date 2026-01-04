// Implements BOTH interfaces
public class MBA_Program implements IP, Foreign_Collaborations {

    @Override
    public void conductExams() {
        System.out.println("MBA: Conducting exams for " + IP.UNIVERSITY);
    }

    @Override
    public void studentExchangeProgram() {
        System.out.println("MBA: Managing student exchange program.");
    }

    @Override
    public void internationalConference() {
        System.out.println("MBA: Organizing Finance International Conference.");
    }
}
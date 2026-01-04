public class MultipleInheritanceDemo {
    public static void main(String[] args) {
        System.out.println("--- MCA Program ---");
        MCA_Program mca = new MCA_Program();
        mca.conductExams();
        mca.studentExchangeProgram();
        mca.internationalConference();
        
        System.out.println("\n--- MBA Program ---");
        MBA_Program mba = new MBA_Program();
        mba.conductExams();
        mba.studentExchangeProgram();
        mba.internationalConference();
    }
}
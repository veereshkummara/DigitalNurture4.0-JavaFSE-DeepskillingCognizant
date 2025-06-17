
class Logger {
	
	private static Logger obj=new Logger(); // private instance
	private Logger() {
		// private constructor
		
	}
	// public method to get the instance of the Logger class
	public static Logger getObj() {
		return obj;
	}
	public void log(String message) {
           System.out.println("Log: " + message);
	}

	
    // Main method to test Singleton
    public static void main(String[] args) {
        Logger logger1 = Logger.getObj();
        Logger logger2 = Logger.getObj();

        logger1.log("First message");
        logger2.log("Second message");

        if (logger1 == logger2) {
            System.out.println("Only one instance exists.");
        } else {
            System.out.println("Multiple instances exist (Singleton failed).");
        }
    }
}
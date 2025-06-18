
public class FinancialForecasting {

	    public static double forecastRecursive(double presentValue, double growthRate, int years) {
	        if (years == 0) {
	            return presentValue;
	        }
	        return (1 + growthRate) * forecastRecursive(presentValue, growthRate, years - 1);
	    }

	    public static void main(String[] args) {
	        double presentValue = 10000;
	        double annualGrowthRate = 0.08;
	        int years = 5;

	        double futureRecursive = forecastRecursive(presentValue, annualGrowthRate, years);
	        System.out.printf("Future Value: ₹%.2f\n", futureRecursive);
	    }
}

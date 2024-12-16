import java.util.Scanner;

public class Factorial {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Number:");
        int number = scanner.nextInt();
        int factorial =1;
        for(int i=1; i<=number; i++){
            factorial= factorial * 1;

        }
        System.out.println("Factorial of number is: " +factorial);
        scanner.close();
    }

}
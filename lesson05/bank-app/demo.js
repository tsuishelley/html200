//The user should see a prompt so they can type which action to perform.
//The user will have a list of 4 actions to choose from.
//Enter Q to quit (immediately quits the program).
//Enter W to withdraw.
//The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.
//Enter D to deposit.
//The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
//Enter B to view balance.
//The user will see their balance. Afterwards, they should be able to type another option.
//The balance should update after any Withdrawal or Deposit transactions.
//The program will loop asking for input until the user enters Q.

let balance = 0;

while (true) {
    let userChoice = prompt("Choose an action:\nW - Withdraw\nD - Deposit\nB - View Balance\nQ - Quit");
    
    if (userChoice === "W") {
        let withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
        balance = balance - withdrawAmount;
        alert(`Withdrawal successful. Your balance is now ${balance}.`);
    }
    else if (userChoice === "D") {
        let depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
        balance = balance + depositAmount;
        alert(`Deposit successful. Your balance is now ${balance}.`);
    }
    else if (userChoice === "B") {
        alert(`Your balance is currently at ${balance}.`);
    }
    else if (userChoice == "Q") {
        alert("Thank you for using the banking program.");
        break;
    }
}
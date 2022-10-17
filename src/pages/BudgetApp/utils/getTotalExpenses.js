// Function which takes all the costs from each of the expenses in the expenses array and add them together. 
export default function getTotalExpenses(expenses){
    // The reduce function returns only a single value from an array. The reduce function goes through the array and adds the cost of each item (each expense) into the total. 
    // This results in the variable totalExpenses having the value of all the expenses combined.
    const totalExpenses = expenses.reduce((total, item) => {
        // Adds the total together with the item's cost
        return (total = total + item.cost)
    }, 0);
    return totalExpenses;
}

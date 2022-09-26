export default function getTotalExpenses(expenses){
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0);
    return totalExpenses;
}

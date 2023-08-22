let companies = [
    {
        name: "InnoTech Solutions",
        budget: 150000,
        tax: 10,
        expensesPerYear: [
            { title: 'Research', total: 20000 },
            { title: 'Development', total: 30000 },
            { title: 'Marketing', total: 25000 },
        ]
    },
    {
        name: "GreenScape Ventures",
        budget: 80000,
        tax: 5,
        expensesPerYear: [
            { title: 'Land Acquisition', total: 15000 },
            { title: 'Sustainable Practices', total: 12000 },
            { title: 'Promotion', total: 8000 },
        ]
    },
    {
        name: "Vitality Vitalizers",
        budget: 120000,
        tax: 8,
        expensesPerYear: [
            { title: 'Ingredients', total: 25000 },
            { title: 'Production', total: 30000 },
            { title: 'Branding', total: 15000 },
        ]
    },
    {
        name: "PixelCraft Studios",
        budget: 75000,
        tax: 6,
        expensesPerYear: [
            { title: 'Graphic Design', total: 12000 },
            { title: 'Software Development', total: 25000 },
            { title: 'Advertising', total: 15000 },
        ]
    },
    {
        name: "EcoFusion Foods",
        budget: 100000,
        tax: 7,
        expensesPerYear: [
            { title: 'Ingredient Sourcing', total: 18000 },
            { title: 'Production', total: 28000 },
            { title: 'Branding', total: 15000 },
        ]
    },
    {
        name: "SkyView Aviation",
        budget: 180000,
        tax: 12,
        expensesPerYear: [
            { title: 'Aircraft Maintenance', total: 40000 },
            { title: 'Fuel', total: 35000 },
            { title: 'Marketing', total: 22000 },
        ]
    },
    {
        name: "Wellness Oasis",
        budget: 90000,
        tax: 6,
        expensesPerYear: [
            { title: 'Spa Equipment', total: 16000 },
            { title: 'Therapist Salaries', total: 25000 },
            { title: 'Promotion', total: 12000 },
        ]
    },
    {
        name: "CineMinds Productions",
        budget: 120000,
        tax: 9,
        expensesPerYear: [
            { title: 'Film Production', total: 35000 },
            { title: 'Equipment Rental', total: 20000 },
            { title: 'Marketing', total: 18000 },
        ]
    },
    {
        name: "FloraFusion Gardens",
        budget: 70000,
        tax: 4,
        expensesPerYear: [
            { title: 'Plant Nursery', total: 12000 },
            { title: 'Landscaping', total: 15000 },
            { title: 'Promotion', total: 8000 },
        ]
    },
    {
        name: "AquaTrek Adventures",
        budget: 110000,
        tax: 8,
        expensesPerYear: [
            { title: 'Equipment Purchase', total: 28000 },
            { title: 'Guides and Staff', total: 32000 },
            { title: 'Marketing', total: 18000 },
        ]
    }
];

console.log(companies.map(company => company.name));

// expenses per month per company
companies.forEach(company => {
    let totalExpenses = 0;

    company.expensesPerYear.forEach(expense => {
        totalExpenses += expense.total;
    });

    const taxAmount = (company.budget * company.tax / 100) / 12;
    const monthlyExpenses = (totalExpenses + taxAmount) / 12;

    console.log(`${company.name} - Monthly Expenses (including tax): $${monthlyExpenses.toFixed(0)}`);
});

// task 1 company with the highest tax payment
let maxTaxCompany = companies.reduce((maxTaxCompany, currentCompany) => {
    const taxAmount = (currentCompany.budget * currentCompany.tax / 100);
    return taxAmount > (maxTaxCompany.taxAmount || 0) ? { ...currentCompany, taxAmount } : maxTaxCompany;
}, {});

console.log(`Company with the highest tax payment: ${maxTaxCompany.name}`);
console.log(`Tax amount: $${maxTaxCompany.taxAmount.toFixed(0)}`);

// task 2 companies expense income ratio
companies.forEach(company => {
    let totalExpenses = 0;

    company.expensesPerYear.forEach(expense => {
        totalExpenses += expense.total;
    });

    const taxAmount = (company.budget * company.tax / 100);
    totalExpenses += taxAmount;

    const totalMonthlyExpenses = totalExpenses / 12;
    const expenseIncomeRatio = (totalMonthlyExpenses / (company.budget / 12)) * 100;

    company.expenseIncomeRatio = expenseIncomeRatio.toFixed(0);
    console.log(`${company.name} - Expense-Income Ratio: ${company.expenseIncomeRatio}%`);
});

// task 3 successful and unsuccessful companies
let successfulCompanies = [];
let unsuccessfulCompanies = [];

companies.forEach(company => {
    let totalExpenses = 0;

    company.expensesPerYear.forEach(expense => {
        totalExpenses += expense.total;
    });

    const taxAmount = (company.budget * company.tax / 100);
    totalExpenses += taxAmount;

    const totalMonthlyExpenses = totalExpenses / 12;
    const remainingBudget = company.budget - totalMonthlyExpenses;

    if (remainingBudget > 0) {
        successfulCompanies.push(company);
    } else {
        unsuccessfulCompanies.push(company);
    }
});

console.log("Успешные компании:", successfulCompanies);
console.log("Неудачные компании:", unsuccessfulCompanies);

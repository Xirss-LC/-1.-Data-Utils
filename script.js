for (let j = 0; j < catNames.length; j++) {
                if (catNames[j] === cat) {
                    found = true;
                    break;
                }
            }
            
            if (found === false) {
                catNames[catNames.length] = cat;
            }
        
        // Считаем статистику для каждой категории
        for (let i = 0; i < catNames.length; i++) {
            let cat = catNames[i];
            let sum = 0;
            let count = 0;
            
            for (let j = 0; j < this.expenses.length; j++) {
                if (this.expenses[j].category === cat) {
                    sum = sum + this.expenses[j].amount;
                    count = count + 1;
                }
            }
            
            categories[cat] = { sum: sum, count: count };
        }
        
        // Выводим статистику
        for (let i = 0; i < catNames.length; i++) {
            let cat = catNames[i];
            console.log(cat + ': ' + categories[cat].count + ' шт., ' + categories[cat].sum + ' руб.');
        }
        
        if (catNames.length === 0) {
            console.log('Нет расходов для статистики');
        }
        
        return categories;

// Пример использования
console.log('=== ТРЕКЕР РАСХОДОВ ===\n');

// Добавляем расходы
addExpense('Кофе', 250, 'еда');
addExpense('Обед', 450, 'еда');
addExpense('Такси', 500, 'транспорт');
addExpense('Кино', 600, 'развлечения');

// Показываем все
printAllExpenses();

// Общая сумма
getTotalAmount();

// Фильтр по категории
getExpensesByCategory('еда');

// Поиск
findExpenseByTitle('кофе');

// Статистика
expenseTracker.showStats();

// Удаление
console.log('\n--- ТЕСТ УДАЛЕНИЯ ---');
expenseTracker.deleteExpense(2);
printAllExpenses();
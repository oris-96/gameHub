import { FormEvent, useRef, useState } from 'react';
import './App.css'

import { ExpenseList, ExpenseFilter, ExpenseForm } from './components'

export const categories = ['Groceries', 'Utilities', 'Entertainment' ];

function App() {

  const [selectedCategory, setSelectedCategory] = useState("")

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 10, category: 'Entertainment' },
    { id: 3, description: 'ccc', amount: 10, category: 'Groceries' },
    { id: 4, description: 'ddd', amount: 10, category: 'Utilities' },
  ])

  const visibleExpenses = selectedCategory ? expenses.filter(expense => expense.category.toLowerCase() === selectedCategory.toLowerCase()) : expenses

   const descriptionRef = useRef<HTMLInputElement>(null);
   const amountRef = useRef<HTMLInputElement>(null);
   const categoryRef = useRef<HTMLSelectElement>(null);

   const expenseForm = { id: 0  , description: '', amount: 0 , category: '' };

   const onSubmitForm = (e: FormEvent): void => {
     e.preventDefault();

     if (descriptionRef.current !== null)
       expenseForm.description = descriptionRef.current.value;
     if (amountRef.current !== null)
       expenseForm.amount = parseInt(amountRef.current.value);
     if (categoryRef.current !== null) {
       expenseForm.category = categoryRef.current.value;
     }

     setExpenses([
       ...expenses,
       { ...expenseForm, id: Math.floor(Math.random() * (100 - 5 + 1)) + 100 },
     ]);

     console.log(expenseForm);
   };
  

  return (
    <div className="App">

      <ExpenseForm onSubmitForm={onSubmitForm} descriptionRef={descriptionRef } amountRef={amountRef} categoryRef={categoryRef} />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App

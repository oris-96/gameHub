
import { FormEvent } from 'react';
import { categories } from '../App';

interface FormData {
  onSubmitForm: (e: FormEvent) => void;
  descriptionRef: React.LegacyRef<HTMLInputElement>;
  amountRef: React.LegacyRef<HTMLInputElement>;
  categoryRef: React.LegacyRef<HTMLSelectElement>;
}

const ExpenseForm = ({descriptionRef, amountRef, categoryRef, onSubmitForm}: FormData) => {

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <label htmlFor="description">Description</label>
        <input ref={descriptionRef} type="text" id="description" name="description " />
      </div>

      <div>
        <label htmlFor="description">Amount</label>
        <input ref={amountRef} type="number" id="amount" name="amount " />
      </div>

      <div>
        <label htmlFor="Category">Category</label>
        <select ref={categoryRef}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
          </div>
          
          <button type='submit'>Submit</button>
    </form>
  );
}

export default ExpenseForm
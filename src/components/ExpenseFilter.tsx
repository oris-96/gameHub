import React from 'react'

import { categories } from '../App'

interface Props {
    onSelectCategory: (category: string) => void
}

const ExpenseFilter = ( {onSelectCategory}: Props) => {
  return (
    <div>
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}> {category} </option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilter
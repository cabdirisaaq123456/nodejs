
# Calculate Total Target

## Description

The `calculateTotalTarget` function computes the monthly targets for a specified period based on a total annual target. It excludes certain days (e.g., Fridays) from the calculation, allowing for a more accurate assessment of achievable targets.

## Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-link>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd <project-directory>
   ```

3. **Run the code**:
   You can run the code in any JavaScript environment (e.g., Node.js, browser console).

4. **Example usage**:
   To use the function, you can copy and paste the following code into your JavaScript environment:
   ```javascript
   console.log(calculateTotalTarget('2024-01-01', '2024-03-31', 5220));
   ```

## Explanation of the Function

### Function Signature

```javascript
function calculateTotalTarget(startDate, endDate, totalAnnualTarget, excludeDays = ['Friday'])
```

### Parameters

- `startDate`: The start date of the target period (format: 'YYYY-MM-DD').
- `endDate`: The end date of the target period (format: 'YYYY-MM-DD').
- `totalAnnualTarget`: The total target amount for the year.
- `excludeDays`: An optional array of weekdays to exclude from the calculation (default: ['Friday']).

### How It Works

1. **Date Initialization**: The function converts the `startDate` and `endDate` into `Date` objects.
2. **Utility Functions**:
   - `daysInMonth(year, month)`: Returns the number of days in a given month.
   - `isExcludedDay(date)`: Checks if the given date falls on an excluded day.
3. **Main Logic**:
   - Loops through each month within the specified date range.
   - Counts valid days that are not in the `excludeDays`.
   - Computes the monthly target based on the valid days relative to the total annual target.

4. **Return Value**: The function returns an object containing:
   - `daysExcludingFridays`: An array of valid days per month.
   - `daysWorkedExcludingFridays`: An array of days worked per month.
   - `monthlyTargets`: An array of calculated monthly targets.
   - `totalTarget`: The total annual target.

## Example of Usage

```javascript
const result = calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
console.log(result);
```

### Output Example
The output will provide details on valid days, worked days, monthly targets, and the total target.

## Assumptions and Limitations

- The function assumes that the input dates are valid and in the correct format ('YYYY-MM-DD').
- It currently only excludes days based on the weekday names in English. Other localizations are not supported.
- The function does not account for public holidays or custom exclusion rules beyond weekdays.

---

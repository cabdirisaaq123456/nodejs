function calculateTotalTarget(startDate, endDate, totalAnnualTarget, excludeDays = ['Friday']) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    
    const isExcludedDay = (date) => excludeDays.includes(date.toLocaleString('en-US', { weekday: 'long' }));

    const daysExcludingFridays = [];
    const daysWorkedExcludingFridays = [];
    const monthlyTargets = [];
    
    let totalValidDays = 0;

    for (let month = start.getMonth(); month <= end.getMonth() + 12; month++) {
        const year = start.getFullYear() + Math.floor(month / 12);
        const monthIndex = month % 12;

        const firstDay = new Date(year, monthIndex, 1);
        const lastDay = new Date(year, monthIndex, daysInMonth(year, monthIndex));

        if (lastDay < start || firstDay > end) {
            continue; // Skip months outside the range
        }

        let validDaysCount = 0;
        let workedDaysCount = 0;

        for (let day = 1; day <= daysInMonth(year, monthIndex); day++) {
            const currentDate = new Date(year, monthIndex, day);

            if (currentDate < start || currentDate > end) {
                continue; // Skip days outside the range
            }

            if (!isExcludedDay(currentDate)) {
                validDaysCount++;
                workedDaysCount++;
            }
        }

        daysExcludingFridays.push(validDaysCount);
        daysWorkedExcludingFridays.push(workedDaysCount);
        totalValidDays += workedDaysCount;
    }

    for (let count of daysExcludingFridays) {
        const targetForMonth = (count / totalValidDays) * totalAnnualTarget;
        monthlyTargets.push(Math.round(targetForMonth * 100) / 100); // Round to two decimal places
    }

    return {
        daysExcludingFridays,
        daysWorkedExcludingFridays,
        monthlyTargets,
        totalTarget: totalAnnualTarget
    };
}

// Example usage
console.log(calculateTotalTarget('2024-01-01', '2024-03-31', 5220));

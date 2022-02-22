function sumSalary(salaries) {
  let sum = 0;
  for (let salary in salaries) {
    const currentSalary = salaries[salary];
    if ((typeof currentSalary === "number") && (isFinite(currentSalary))) {
      sum = sum + currentSalary;
    }
  }
  return sum;
}

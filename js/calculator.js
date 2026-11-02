/**
 * Riotive Autowash Innovations - ROI & Profitability Calculator
 * Calculates daily/monthly revenue, operating costs, net profit, and machine payback period.
 */

document.addEventListener('DOMContentLoaded', () => {
  const bikesPerDayInput = document.getElementById('calcBikesPerDay');
  const pricePerWashInput = document.getElementById('calcPricePerWash');
  
  const bikesValDisplay = document.getElementById('calcBikesVal');
  const priceValDisplay = document.getElementById('calcPriceVal');
  
  const dailyRevDisplay = document.getElementById('calcDailyRev');
  const monthlyRevDisplay = document.getElementById('calcMonthlyRev');
  const monthlyCostDisplay = document.getElementById('calcMonthlyCost');
  const monthlyProfitDisplay = document.getElementById('calcMonthlyProfit');
  const paybackPeriodDisplay = document.getElementById('calcPaybackPeriod');
  
  // Cost per wash benchmark: LKR 95 (chemical + power + water)
  const COST_PER_WASH = 95;
  // Baseline machine investment: Aqua Dragon Bike Wash Plus (LKR 1,517,000)
  const BASE_MACHINE_COST = 1517000;
  
  function formatLKR(amount) {
    return 'LKR ' + Math.round(amount).toLocaleString('en-LK');
  }
  
  function updateCalculations() {
    if (!bikesPerDayInput || !pricePerWashInput) return;
    
    const bikesPerDay = parseInt(bikesPerDayInput.value, 10);
    const pricePerWash = parseInt(pricePerWashInput.value, 10);
    
    if (bikesValDisplay) bikesValDisplay.textContent = `${bikesPerDay} Bikes`;
    if (priceValDisplay) priceValDisplay.textContent = `LKR ${pricePerWash}`;
    
    const dailyRev = bikesPerDay * pricePerWash;
    const monthlyRev = dailyRev * 30;
    const monthlyCost = (bikesPerDay * COST_PER_WASH) * 30;
    const monthlyProfit = monthlyRev - monthlyCost;
    
    // Payback period in months
    const paybackMonths = monthlyProfit > 0 ? (BASE_MACHINE_COST / monthlyProfit).toFixed(1) : 'N/A';
    
    if (dailyRevDisplay) dailyRevDisplay.textContent = formatLKR(dailyRev);
    if (monthlyRevDisplay) monthlyRevDisplay.textContent = formatLKR(monthlyRev);
    if (monthlyCostDisplay) monthlyCostDisplay.textContent = formatLKR(monthlyCost);
    if (monthlyProfitDisplay) monthlyProfitDisplay.textContent = formatLKR(monthlyProfit);
    if (paybackPeriodDisplay) {
      paybackPeriodDisplay.textContent = `Estimated Payback Period: ~${paybackMonths} Months!`;
    }
  }
  
  if (bikesPerDayInput && pricePerWashInput) {
    bikesPerDayInput.addEventListener('input', updateCalculations);
    pricePerWashInput.addEventListener('input', updateCalculations);
    updateCalculations();
  }
});

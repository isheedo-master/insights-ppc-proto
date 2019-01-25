export const dataSample = [
  {
    metric:"profitableCampaigns",
    value: 36,
    valueType:"PC",
    metadata:{
      refreshFrequency:"DAILY"
    }
  },
  {
    metric:"campaignsWithOrders",
    value: 75,
    valueType:"PC",
    metadata:{
      refreshFrequency:"DAILY"
    }
  },
  {
    metric:"campaignsHitting90PCBudget",
    value: 51,
    valueType:"PC",
    metadata:{
      refreshFrequency:"DAILY"
    }
  },
  {
    metric:"campaignsHittingBudget",
    value: 29,
    valueType:"PC",
    metadata:{
      refreshFrequency:"DAILY"
    }
  },
  {
    metric:"productsWithBidIncrease",
    value: 47,
    valueType:"PC",
    metadata:{
      refreshFrequency:"DAILY"
    }
  },
  {
    metric:"productsWithOrders",
    value: 80,
    valueType:"PC",
    metadata:{
      refreshFrequency:"DAILY"
    }
  },
  {
    metric:"profitableProducts",
    value: 59,
    valueType:"PC",
    metadata:{
      refreshFrequency:"DAILY"
    }
  },
  {
    metric:"mostProfitableDayForLastWeek",
    value:"20190116",
    valueType:"DAY",
    metadata:{
      refreshFrequency:"DAILY"
    }
  },
  // {
  //   metric:"mostProfitableDayForLastYear",
  //   value:"20180921",
  //   valueType:"DAY",
  //   metadata:{
  //     refreshFrequency:"WEEKLY"
  //   }
  // },
  // {
  //   metric:"mostProfitableMonthForLastThreeYears",
  //   value:"20170101",
  //   valueType:"MONTH",
  //   metadata:{
  //     refreshFrequency:"WEEKLY"
  //   }
  // },
  {
    metric:"mostProfitableWeekForLastMonth",
    value:"20190107",
    valueType:"WEEK_M",
    metadata:{
      refreshFrequency:"WEEKLY"
    }
  },
  {
    metric:"mostProfitableMonthForLastYear",
    value:"20180401",
    valueType:"MONTH",
    metadata:{
      refreshFrequency:"WEEKLY"
    }
  },
  // {metric:"mostProfitableWeekForLastYear",
  //   value:"20181112",
  //   valueType:"WEEK_M",
  //   metadata:{
  //     refreshFrequency:"WEEKLY"
  //   }
  // },
  {metric:"percentOfAutomatedAdSpend",
    value: 45,
    valueType:"PC",
    metadata:{
      refreshFrequency:"DAILY"
    }
  },
]

export const metricSettings = {
  profitableCampaigns: {
    label: "Profitable campaigns",
    green: 90,
    red: 70,
    order: 1,
  },
  campaignsWithOrders: {
    label: "Campaigns with orders",
    green: 70,
    red: 30,
    order: 2,
  },
  campaignsHitting90PCBudget: {
    label: "Campaigns hitting 90% of budget",
    green: 60,
    red: 80,
    order: 4,
  },
  campaignsHittingBudget: {
    label: "Campaigns hitting budget",
    green: 60,
    red: 80,
    order: 3,
  },
  productsWithBidIncrease: {
    label: "Products with bid increase",
    green: 90,
    red: 70,
    order: 5,
  },
  productsWithOrders: {
    label: "Products with orders",
    green: 75,
    red: 30,
    order: 6,
  },
  profitableProducts: {
    label: "Profitable products",
    green: 70,
    red: 50,
    order: 7,
  },
  mostProfitableDayForLastWeek: {
    label: "your most profitable day of the last week",
  },
  mostProfitableDayForLastYear: {
    label: "your most profitable day of the last year",
  },
  mostProfitableMonthForLastThreeYears: {
    label: "your most profitable month for the last 3 years",
  },
  mostProfitableMonthForLastYear: {
    label: "your most profitable month for the last year",
  },
  mostProfitableWeekForLastMonth: {
    label: "your most profitable week for last month",
  },
  mostProfitableWeekForLastYear: {
    label: "your most profitable week for last year",
  },
  percentOfAutomatedAdSpend: {
    label: "% of automated ad spend",
    green: 40,
    red: 10,
    order: 8,
  },
}

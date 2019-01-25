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
  {
    metric:"mostProfitableDayForLastYear",
    value:"20180921",
    valueType:"DAY",
    metadata:{
      refreshFrequency:"WEEKLY"
    }
  },
  {
    metric:"mostProfitableMonthForLastThreeYears",
    value:"20170101",
    valueType:"MONTH",
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
  {
    metric:"mostProfitableWeekForLastMonth",
    value:"20190107",
    valueType:"WEEK_M",
    metadata:{
      refreshFrequency:"WEEKLY"
    }
  },
  {metric:"mostProfitableWeekForLastYear",
    value:"20181112",
    valueType:"WEEK_M",
    metadata:{
      refreshFrequency:"WEEKLY"
    }
  }
]

export const metricSettings = {
  profitableCampaigns: {
    label: "Profitable campaigns",
    green: 90,
    red: 70,
  },
  campaignsWithOrders: {
    label: "Campaigns with orders",
    green: 70,
    red: 30
  },
  campaignsHitting90PCBudget: {
    label: "Campaigns hitting 90% of budget",
    green: 60,
    red: 80
  },
  campaignsHittingBudget: {
    label: "Campaigns hitting budget",
    green: 60,
    red: 80
  },
  productsWithBidIncrease: {
    label: "Products with bid increase",
    green: 90,
    red: 70
  },
  productsWithOrders: {
    label: "Products with orders",
    green: 90,
    red: 70
  },
  profitableProducts: {
    label: "Profitable products",
    green: 70,
    red: 50
  },
  mostProfitableDayForLastWeek: {
    label: "Most profitable day of the last week",
  },
  mostProfitableDayForLastYear: {
    label: "Most profitable day of the last year",
  },
  mostProfitableMonthForLastThreeYears: {
    label: "Most profitable month for the last 3 years",
  },
  mostProfitableMonthForLastYear: {
    label: "Most profitable month for the last year",
  },
  mostProfitableWeekForLastMonth: {
    label: "Most profitable week for last month",
  },
  mostProfitableWeekForLastYear: {
    label: "Most profitable week for last year",
  },
}

export function percent (numerator, denominator) {
    return 100 * (numerator / denominator)
}

export function adjustedGrossIncome (grossIncome, deductions, exemptions) {
    return grossIncome - deductions - exemptions
}

export function taxable (grossIncome, pretaxInvestment, deduction, exemption) {
    return grossIncome - pretaxInvestment - deduction - exemption
}


export function ficaTaxes (grossIncome, ssi, medicare) {
    return grossIncome * (ssi + medicare)
}


export function pretaxInvestment (salary, pension, pretaxSave) {
    return salary * pension + pretaxSave
}


export function retirementPortion (pretaxInvestment, posttaxSave) {
    return pretaxInvestment + posttaxSave
}


export function governmentPortion (ficaTaxes, fedTaxes, stateTaxes) {
    return ficaTaxes + fedTaxes + stateTaxes
}


export function discretionary_spend (grossIncome, retirementPortion, governmentPortion) {
    return grossIncome - retirementPortion - governmentPortion
}


export function netIncome (grossIncome, ficaTaxes, fedTaxes, stateTaxes) {
    return grossIncome - ficaTaxes - fedTaxes - stateTaxes}

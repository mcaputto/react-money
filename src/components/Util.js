export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
})

formatter.format(2500)


export const medicare = .0145

export const ssi = .062

export function percent (numerator, denominator) {
    return 100 * (numerator / denominator)
}

export function adjustedGrossIncome (grossIncome, deductions, exemptions) {
    return grossIncome - deductions - exemptions
}

export function taxableIncome (grossIncome, pretaxInvestment, deduction, exemption) {
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
    return grossIncome - ficaTaxes - fedTaxes - stateTaxes
}

export function fedTaxes (taxableIncome) {
    if (taxableIncome >= 0 && taxableIncome < 9325) {
        return .1 * taxableIncome
    }
    else if (taxableIncome >= 9325 && taxableIncome < 37950) {
        return 932.50 + .15 * (taxableIncome - 9325)
    }
    else if (taxableIncome >= 37950 && taxableIncome < 91900) {
        return 5226.25 + .25 * (taxableIncome - 37950)
    }
    else if (taxableIncome >= 91900 && taxableIncome < 191650) {
        return 18713.75 + .28 * (taxableIncome - 91900)
    }
    else if (taxableIncome >= 191650 && taxableIncome < 416700) {
        return 46643.75 + .33 * (taxableIncome - 191650)
    }
    else if (taxableIncome >= 416700 && taxableIncome < 418400) {
        return 120910.25 + .35 * (taxableIncome - 416700)
    }
    else if (taxableIncome >= 418400) {
        return 121505.25 + 39.6 * (taxableIncome - 418400)
    }
    else return null
}

export function stateTaxes (taxableIncome) {
    if (taxableIncome >= 0 && taxableIncome < 1472) {
        return 0
    }
    else if (taxableIncome >= 1472 && taxableIncome < 2945) {
        return 23.56 + .036 * (taxableIncome - 1472)
    }
    else if (taxableIncome >= 2945 && taxableIncome < 4417) {
        return 76.57 + .041 * (taxableIncome - 2945)
    }
    else if (taxableIncome >= 4417 && taxableIncome < 5890) {
        return 136.94 + .051 * (taxableIncome - 4417)
    }
    else if (taxableIncome >= 5890 && taxableIncome < 7362) {
        return 212.03 + .061 * (taxableIncome - 5890)
    }
    else if (taxableIncome >= 7362 && taxableIncome < 11043) {
        return 301.85 + .071 * (taxableIncome - 7362)
    }
    else if (taxableIncome >= 11043) {
        return 563.21 + .074 * (taxableIncome - 11043)
    }
    else return null
}

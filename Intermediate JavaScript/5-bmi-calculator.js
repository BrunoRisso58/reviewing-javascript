// weight is in kg and height is in m
function calculateBmi(weight, height) {
    return weight / Math.pow(height, 2);
}

function classifyBmi() {
    let weight = 104;
    let height = 1.84;
    let bmi = calculateBmi(weight, height).toFixed(1);
    let classification;

    if (bmi < 18.5) {
        classification = `Your BMI is ${bmi}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        classification = `Your BMI is ${bmi}, so you have a normal weight.`;
    } else if (bmi > 24.9) {
        classification = `Your BMI is ${bmi}, so you have are overweight.`;
    }

    return classification;
}

console.log(classifyBmi());
let industryData = {};

// 加载行业数据
fetch('data/industry-rates.json')
    .then(response => response.json())
    .then(data => {
        industryData = data;
        const industrySelect = document.getElementById('industry');
        Object.keys(data).forEach(industry => {
            const option = document.createElement('option');
            option.value = industry;
            option.textContent = industry;
            industrySelect.appendChild(option);
        });
    });

document.getElementById('taxForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const industry = document.getElementById('industry').value;
    const revenue = parseFloat(document.getElementById('revenue').value);
    const grossProfit = parseFloat(document.getElementById('grossProfit').value);
    const actualVAT = parseFloat(document.getElementById('actualVAT').value);
    const actualIncomeTax = parseFloat(document.getElementById('actualIncomeTax').value);

    const result = calculateTax(industry, revenue, grossProfit, actualVAT, actualIncomeTax);
    displayResults(result);
});

function calculateTax(industry, revenue, grossProfit, actualVAT, actualIncomeTax) {
    const rates = industryData[industry];
    const theoreticalVAT = (revenue * rates.vatRate) / 100;
    const theoreticalIncomeTax = (grossProfit * rates.incomeTaxRate) / 100;

    const vatDifference = actualVAT - theoreticalVAT;
    const incomeTaxDifference = actualIncomeTax - theoreticalIncomeTax;

    return {
        theoretical: {
            vat: theoreticalVAT,
            vatRate: rates.vatRate,
            incomeTax: theoreticalIncomeTax,
            incomeTaxRate: rates.incomeTaxRate
        },
        actual: {
            vat: actualVAT,
            vatRate: (actualVAT / revenue) * 100,
            incomeTax: actualIncomeTax,
            incomeTaxRate: (actualIncomeTax / revenue) * 100
        },
        difference: {
            vat: vatDifference,
            vatRate: ((actualVAT - theoreticalVAT) / revenue) * 100,
            incomeTax: incomeTaxDifference,
            incomeTaxRate: ((actualIncomeTax - theoreticalIncomeTax) / revenue) * 100
        }
    };
}

function displayResults(result) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="tax-comparison">
            <div class="tax-item">
                <h3>增值税分析</h3>
                <p>理论税负率：${result.theoretical.vatRate.toFixed(2)}%</p>
                <p>实际税负率：${result.actual.vatRate.toFixed(2)}%</p>
                <p class="${result.difference.vatRate < 0 ? 'difference-negative' : 'difference-positive'}">
                    差异：${result.difference.vatRate.toFixed(2)}%
                </p>
            </div>
            <div class="tax-item">
                <h3>所得税分析</h3>
                <p>理论税负率：${result.theoretical.incomeTaxRate.toFixed(2)}%</p>
                <p>实际税负率：${result.actual.incomeTaxRate.toFixed(2)}%</p>
                <p class="${result.difference.incomeTaxRate < 0 ? 'difference-negative' : 'difference-positive'}">
                    差异：${result.difference.incomeTaxRate.toFixed(2)}%
                </p>
            </div>
        </div>
    `;

    displayChart(result);
}

function displayChart(result) {
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['增值税', '所得税'],
            datasets: [{
                label: '理论税负率',
                data: [result.theoretical.vatRate, result.theoretical.incomeTaxRate]
            }, {
                label: '实际税负率',
                data: [result.actual.vatRate, result.actual.incomeTaxRate]
            }]
        }
    });
}

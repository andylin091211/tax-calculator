document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('../docs/data/industry-rates.json');
        const rates = await response.json();
        
        const industrySelect = document.getElementById('industry');
        Object.keys(rates).forEach(industry => {
            const option = document.createElement('option');
            option.value = industry;
            option.textContent = industry;
            industrySelect.appendChild(option);
        });

        document.getElementById('taxForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const industry = industrySelect.value;
            const revenue = parseFloat(document.getElementById('revenue').value);
            
            if (industry && revenue) {
                const { vatRate, incomeTaxRate } = rates[industry];
                const vat = (revenue * vatRate / 100).toFixed(2);
                const incomeTax = (revenue * incomeTaxRate / 100).toFixed(2);
                
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = `
                    <h3>计算结果：</h3>
                    <p>增值税：${vat} 元</p>
                    <p>所得税：${incomeTax} 元</p>
                `;
                resultDiv.style.display = 'block';
            }
        });
    } catch (error) {
        console.error('加载数据失败:', error);
    }
});

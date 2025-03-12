# tax-calculator
企业税负计算器

# 企业税负对比计算工具

一个帮助企业计算并对比行业税负水平的工具。

## 功能特点

- 企业基础信息录入
- 增值税和所得税自动计算
- 与行业标准税负率对比
- 可视化图表展示
- 差异分析报告生成

## 使用方法

1. 选择企业所属行业
2. 输入基础财务数据
   - 销售收入
   - 销售毛利
   - 实际缴纳的增值税
   - 实际缴纳的所得税
3. 点击"计算"按钮生成分析结果

## 项目结构

```
tax/
  ├── docs/              # GitHub Pages 部署目录
  │   ├── css/          # 样式文件
  │   ├── js/           # JavaScript文件
  │   ├── data/         # 行业数据JSON文件
  │   └── index.html    # 主页面
  └── README.md         # 项目说明
```

## 部署方法

1. 创建GitHub账号 (如果还没有)
2. 创建新仓库: `your-username.github.io/tax-calculator`
3. 将代码推送到main分支
4. 在仓库设置中启用GitHub Pages

## 开发环境设置

```bash
# 克隆仓库
git clone https://github.com/your-username/tax-calculator.git

# 进入项目目录
cd tax-calculator

# 使用VSCode打开
code .
```

## 在线访问

访问 https://your-username.github.io/tax-calculator 即可使用本工具
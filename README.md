# 企业税负计算器

一个帮助企业计算和分析税负的在线工具。

## 功能特点

- 支持多行业税率计算
- 可视化税负对比分析
- 实时图表展示
- 支持增值税和所得税分析

## 在线预览

访问 [GitHub Pages](https://[your-username].github.io/tax-calculator/) 查看在线演示

## 开发说明

本项目使用原生 JavaScript 开发，依赖 Chart.js 进行数据可视化。

### 项目结构

```
tax-calculator/
├── docs/              # GitHub Pages 部署目录
│   ├── css/          # 样式文件
│   ├── js/           # JavaScript 文件
│   ├── data/         # 数据文件
│   └── index.html    # 主页面
├── .gitignore        # Git 忽略配置
└── README.md         # 项目说明
```

### 部署方式

本项目使用 GitHub Pages 进行部署，基于 docs 目录。

## 使用方法

1. 选择企业所属行业
2. 输入基础财务数据
   - 销售收入
   - 销售毛利
   - 实际缴纳的增值税
   - 实际缴纳的所得税
3. 点击"计算"按钮生成分析结果

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
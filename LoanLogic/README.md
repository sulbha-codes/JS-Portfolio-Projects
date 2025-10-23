# 💼 LoanLogic — Loan Eligibility Checker  

> **Logic > Magic.**  

🔗 [**Live Demo**](https://loanlogic.vercel.app)  

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-4CAF50?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📘 Note  

📌 *The loan rates and eligibility parameters used in this project are based on realistic reference values from common banking standards, but are intended **for educational and demonstration purposes only**.  
Actual loan offers, rates, and approvals may vary depending on lenders, credit history, and current market conditions.*
---

## 📚 Table of Contents  
1. [Project Overview](#project-overview)  
2. [How It Works](#how-it-works)  
3. [Tech Stack](#tech-stack)  
4. [Key Features](#key-features)  
5. [Eligibility Rules](#eligibility-rules)  
6. [Future Enhancements](#future-enhancements)  
7. [Lessons Learned](#lessons-learned)  
8. [Author](#author)  

---

## 🧩 Project Overview  

**LoanLogic** is a beginner-friendly web app that helps users instantly check their **loan eligibility** based on realistic financial parameters such as **income**, **age**, **credit score**, **desired loan amount**, and **loan type**.  
Each loan type — 🏡 **Home**, 🚗 **Car**, 💼 **Personal**, and 🎓 **Education** — follows distinct eligibility rules and interest rates inspired by real-world banking logic.  
It combines practical **JavaScript-based logic** with a clean **UI design** to deliver an intuitive and professional experience — showcasing how frontend logic can mirror real financial decision-making.

---

## ⚙️ How It Works  

1. Enter **Age**, **Monthly Income**, **Credit Score**, and **Desired Loan Amount**.  
2. Select your **Loan Type** — 🏡 Home, 🚗 Car, or 💼 Personal.  
3. Click **“Check Eligibility”** to see instant results.  
4. The app applies predefined **loan rules** and displays messages such as:  
   - ✅ Approved  
   - ⚠️ Conditional  
   - ❌ Denied  
5. Switch between **Dark / Light themes** — automatically saved via `localStorage`.
6. For approved loans, it also displays the **expected interest rate** based on loan type — mimicking real bank results.

---

## 💻 Tech Stack  

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure of the web app |
| **CSS3** | Styling, themes, and responsiveness |
| **JavaScript (Vanilla)** | Logic, event handling, DOM manipulation |

---

## 🚀 Key Features  

- ✅ **Instant Eligibility Check** — Calculates results dynamically  
- 🌗 **Dark / Light Mode Toggle** — Saved in `localStorage`  
- 💬 **Interactive Result Box** — Animated fade-in with emojis and color feedback  
- 🎨 **Modern UI Design** — Smooth zoom-in effects and card-based layout  
- 📱 **Responsive Design** — Optimized for all screen sizes  
- 📊 **Realistic Bank Criteria** — Uses authentic loan eligibility standards for each loan type  
- 💰 **Dynamic Interest Rate Display** — Shows rate instantly for approved loans

---

## 📏 Eligibility Rules  

| Loan Type | Minimum Salary | Minimum Credit Score | Max Loan (× Income) | Interest Rate |
|------------|----------------|----------------------|----------------------|----------------|
| 🏡 Home Loan | ₹40,000 | ≥ 650 | 15× | 7.5% |
| 💼 Personal Loan | ₹30,000 | ≥ 700 | 10× | 10.6% |
| 🚗 Car Loan | ₹25,000 | ≥ 600 | 12× | 8.2% |


---

## 🌱 Future Enhancements  

- 💰 Add **EMI Calculator** feature  
- 📊 Include **visual charts** for eligibility insights  
- 🧠 Add **AI-based suggestions** for better credit improvement  
- 🏦 Integrate **real bank APIs** for live comparison  
- 🔍 Add credit report simulator to visualize how credit score affects approval  
- 🏦 Extend loan categories with business and education options
---

## 🧠 Lessons Learned  

- Writing clean **conditional logic**  
- Managing **theme persistence** using `localStorage`  
- Designing better **UI feedback** with color and animation  
- Building a smooth **dark/light experience**  
- Understanding how **frontend logic can model real-world financial systems** — mapping data, validation, and decision flow

---

## 👩‍💻 Author  

**Sulbha Rasal**  
📧 [sulbha.rasal79@gmail.com](mailto:sulbha.rasal79@gmail.com)  
💡 *“Financial clarity simplified through code.”*
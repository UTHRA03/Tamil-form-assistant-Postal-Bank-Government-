/* ================= PAGE HANDLING ================= */

const pages = document.querySelectorAll(".page");

function goTo(id) {
  pages.forEach(p => p.classList.remove("active"));
  const page = document.getElementById(id);
  if (page) page.classList.add("active");
}

/* ================= SPLASH → LOGIN (ONLY IF EXISTS) ================= */

if (document.getElementById("splashPage")) {
  setTimeout(() => goTo("loginPage"), 2000);
}

/* ================= LOGIN REDIRECT ================= */

function login() {
  window.location.href = "main.html";
}

/* ================= DATA ================= */

const data = {

  post: {
    title: "Post Office Forms (அஞ்சலகம்)",
    items: [
      { name: "PLI", file: "pli.html" },
      { name: "PPF", file: "ppf.html" },
      { name: "Savings Account", file: "saving.html" },
      { name: "Children Policy", file: "childrenpg1.html" },
      { name: "Loan", file: "loan.html" },
      { name: "Withdrawal", file: "withdrawal.html" },
      { name: "Deposit", file: "postdeposit.html" }
    ]
  },

  govt: {
    title: "Government Services (அரசுத் துறை)",
    items: [
      { name: "First Graduate", file: "first grad.html" },
      { name: "Family Income Certificate", file: "family income.html" },
      { name: "Driving License", file: "license.html" }
    ]
  },

  bankMain: {
    title: "Select Bank (வங்கி தேர்வு)",
    items: [
      { name: "SBI", action: () => openBank("sbi") },
      { name: "Indian Bank", action: () => openBank("indian") },
      { name: "Canara Bank", action: () => openBank("canara") },
      { name: "Others", action: () => openBank("others") }
    ]
  },

  banks: {
    sbi: {
      title: "SBI Forms",
      forms: [
        { name: "PPF", file: "sbippf.html" },
        { name: "Account Opening", file: "sbisavings1.html" },
        { name: "Withdrawal", file: "sbiwithdraw.html" },
        { name: "Deposit", file: "sbideposit.html" }
      ]
    },
    indian: {
      title: "Indian Bank Forms",
      forms: [
        { name: "PPF", file: "indianppf.html" },
        { name: "Account Opening", file: "indiansavings1.html" },
        { name: "Withdrawal", file: "indianwithdraw.html" },
        { name: "Deposit", file: "indiandeposit.html" }
      ]
    },
    canara: {
      title: "Canara Bank Forms",
      forms: [
        { name: "PPF", file: "canarappf.html" },
        { name: "Account Opening", file: "canarasavings1.html" },
        { name: "Withdrawal", file: "canarawithdraw.html" },
        { name: "Deposit", file: "canaradeposit.html" }
      ]
    },
    others: {
      title: "Other Bank Forms",
      forms: [
        { name: "PPF", file: "otherppf.html" },
        { name: "Account Opening", file: "othersavings1.html" },
        { name: "Withdrawal", file: "otherwithdraw.html" },
        { name: "Deposit", file: "otherdeposit.html" }
      ]
    }
  }
};

/* ================= SECTOR CLICK ================= */

function openSector(type) {

  goTo("formPage");

  if (type === "bank") {
    renderButtons(data.bankMain.title, data.bankMain.items, true);
    return;
  }

  const sector = data[type];
  const items = sector.items.map(i => ({
    name: i.name,
    action: () => window.location.href = i.file
  }));

  renderButtons(sector.title, items);
}

/* ================= BANK CLICK ================= */

function openBank(bankKey) {
  const bank = data.banks[bankKey];

  const items = bank.forms.map(f => ({
    name: f.name,
    action: () => window.location.href = f.file
  }));

  renderButtons(bank.title, items, true);
}

/* ================= RENDER ================= */

function renderButtons(title, items, backToSector = false) {

  document.getElementById("sectorTitle").innerText = title;
  const list = document.getElementById("formList");
  list.innerHTML = "";

  items.forEach(i => {
    const btn = document.createElement("button");
    btn.innerText = i.name;
    btn.onclick = i.action;
    list.appendChild(btn);
  });

  /* BACK BUTTON */
  const backBtn = document.createElement("button");
  backBtn.className = "back-btn";
  backBtn.innerText = "⬅ Back";
  backBtn.onclick = () => goTo("sectorPage");
  list.appendChild(backBtn);
}

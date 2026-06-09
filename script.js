const summaryItems = document.querySelector('#summary-items');
const button = document.querySelector('button');
const summaryData = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]

  // Category colours (from style-guide)
  const categoryStyles = {
    "Reaction": { bg: "hsla(0, 100%, 67%, 0.1)", text: "hsl(0, 100%, 67%)" },
    "Memory":   { bg: "hsla(39, 100%, 56%, 0.1)", text: "hsl(39, 100%, 56%)" },
    "Verbal":   { bg: "hsla(166, 100%, 37%, 0.1)", text: "hsl(166, 100%, 37%)" },
    "Visual":   { bg: "hsla(234, 85%, 45%, 0.1)", text: "hsl(234, 85%, 45%)" }
  };

summaryData.forEach((item, index) => {
    console.log(index);
    const summaryItem= document.createElement('div');
    summaryItem.classList.add(`summary-item`);
    summaryItem.style.backgroundColor = categoryStyles[item.category].bg;
    summaryItem.innerHTML = `
        <div class="summary-item-left">
            <img src="${item.icon}" alt="${item.category} icon">
       
            <p style="color: ${categoryStyles[item.category].text};"   >${item.category}</p>
        </div>
            <p><span>${item.score}</span> / 100</p>
        
    `;
    
    summaryItems.appendChild(summaryItem);
});

button.addEventListener('click', () => {
    alert('Your results have been submitted!');
});
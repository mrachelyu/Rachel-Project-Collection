console.log("JS loaded!");
function showPage(pageId) {
    // 隱藏所有頁面
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 移除所有按鈕的 active 樣式
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 顯示選中的頁面
    document.getElementById(pageId).classList.add('active');

    // 點擊 Logo 回首頁時不需要高亮特定按鈕
    if(pageId === 'home') {
        document.querySelector("button[onclick=\"showPage('home')\"]").classList.add('active');
    } else {
        // 找出對應的按鈕並加上 active
        const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(pageId));
        if (activeBtn) activeBtn.classList.add('active');
    }
    
    // 捲動回頂部
    window.scrollTo(0, 0);
}

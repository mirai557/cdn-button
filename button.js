(function () {
  const insertButton = () => {
    // ボタンがすでに存在していれば何もしない
    if (document.querySelector('.cta-button-wrapper')) return;

    const buttonHTML = `
      <div class="cta-button-wrapper" style="text-align:center; margin-top:40px;">
        <a href="#contact" class="cta-button" style="
          display:inline-block;
          background-color:#ff6b6b;
          color:#fff;
          font-size:18px;
          font-weight:bold;
          padding:16px 32px;
          border-radius:50px;
          text-decoration:none;
          box-shadow:0 4px 12px rgba(0,0,0,0.2);
          transition:all 0.3s ease;
          z-index:9999;
          position:relative;
        "
        onmouseover="this.style.backgroundColor='#ff4e4e'; this.style.boxShadow='0 6px 16px rgba(0,0,0,0.25)'; this.style.transform='translateY(-2px)'"
        onmouseout="this.style.backgroundColor='#ff6b6b'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)'; this.style.transform='none'">
          無料相談はこちら
        </a>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', buttonHTML);
  };

  // 1. 初期表示タイミングを逃さない
  if (document.readyState !== 'loading') {
    insertButton();
  } else {
    document.addEventListener('DOMContentLoaded', insertButton);
  }

  // 2. 変化があったら自動再挿入（SPAや干渉対策）
  const observer = new MutationObserver(insertButton);
  observer.observe(document.body, { childList: true, subtree: true });
})();
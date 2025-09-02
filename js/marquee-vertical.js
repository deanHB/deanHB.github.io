

const marqueeContent = document.querySelector('.main-feedback-case-block .case');

    // 暫停跑馬燈
    function stopMarquee() {
      marqueeContent.style.animationPlayState = 'paused';
    }

    // 開始跑馬燈
    function startMarquee() {
      marqueeContent.style.animationPlayState = 'running';
    }
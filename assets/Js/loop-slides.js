$(function () {
    const loop = document.getElementById('elfLoopSlides');
      
      const loopAnim = new TimelineMax({
        repeat: -1 
      });
    
      let loopItem = (window.innerWidth, loop.children[0]);
      loop.appendChild(loopItem.cloneNode(true));
      loop.appendChild(loopItem.cloneNode(true));
      loop.appendChild(loopItem.cloneNode(true));
    
      loopAnim
        .to(loop, 13, { ease: Power0.easeNone, xPercent: -46.66666 })
        .to(loop, 0, { ease: Power0.easeNone, x: 0 });
    
    });
    
  
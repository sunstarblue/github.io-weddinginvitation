/*function openInvite() {
    document.querySelector('.open-btn').addEventListener('click', () => {
        document.querySelector('.envelope').scrollIntoView({
          behavior: 'smooth'
        });
      });
  }*/



  const petalContainer = document.getElementById("petal-container");

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  const size = Math.random() * 8 + 8; // 8–16px
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = Math.random() * 5 + 8 + "s";
  petal.style.animationDelay = Math.random() * 5 + "s";

  petalContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 20000);
}

// Tạo liên tục, rất nhẹ
setInterval(createPetal, 1600);

//MỞ CỬA

  window.addEventListener("load", () => {
    const overlay = document.getElementById("door-overlay");
    const leftDoor = document.querySelector(".door.left");
    const rightDoor = document.querySelector(".door.right");
  
    if (!overlay || !leftDoor || !rightDoor) return;
  
    // mở cửa sau khi load
    setTimeout(() => {
      leftDoor.style.transform = "translateX(-100%)";
      rightDoor.style.transform = "translateX(100%)";
    }, 600);
  
    // fade overlay
    setTimeout(() => {
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity 0.8s ease";
    }, 1000);
  
    setTimeout(() => {
      overlay.style.display = "none";
      overlay.style.transition = "opacity 2s ease";
    }, 2000);
    setTimeout(() => {
      showMusicAfterDoor();
    }, 1000);
  });
  
  
  
  
  

  function openInvite() {
    const target = document.getElementById("envelope");
    if (!target) return;
  
    const startY = window.pageYOffset;
    const targetY = target.getBoundingClientRect().top + startY;
    const distance = targetY - startY;
  
    const duration = 400; // thời gian cuộn (ms) – tăng lên nếu muốn chậm hơn
    let startTime = null;
  
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
  
    function scrollStep(currentTime) {
      if (!startTime) startTime = currentTime;
  
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeOutCubic(progress);
  
      window.scrollTo(0, startY + distance * ease);
  
      if (elapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    }
  
    requestAnimationFrame(scrollStep);
    // Nếu là mobile thì phát nhạc khi bấm nút
  if (isMobile() && music.paused) {
    music.play().then(() => {
      musicBtn.classList.add("playing");
    }).catch(() => {});
  }
  }
  
  
  

  const weddingDate = new Date("2026-02-26T10:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
  
    if (distance < 0) return;
  
    document.getElementById("days").innerText =
      Math.floor(distance / (1000 * 60 * 60 * 24));
  
    document.getElementById("hours").innerText =
      Math.floor((distance / (1000 * 60 * 60)) % 24);
  
    document.getElementById("minutes").innerText =
      Math.floor((distance / (1000 * 60)) % 60);
  
    document.getElementById("seconds").innerText =
      Math.floor((distance / 1000) % 60);
  }
  
  /* Gọi chạy mỗi giây */
  setInterval(updateCountdown, 1000);
  
  /* Chạy ngay khi load */
  updateCountdown();

  document.addEventListener("DOMContentLoaded", function () {
    const albumImages = document.querySelectorAll(".album-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
  
    if (!albumImages.length || !lightbox || !lightboxImg) return;
  
    albumImages.forEach(img => {
      img.addEventListener("click", function () {
        lightboxImg.src = this.src;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden"; // khóa scroll nền
      });
    });
  
    // Click nền để đóng
    lightbox.addEventListener("click", function () {
      lightbox.classList.remove("active");
      document.body.style.overflow = ""; // mở lại scroll
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");
  
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  
    reveals.forEach(el => revealObserver.observe(el));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".album-item");
  
    const rowObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = [...items].indexOf(entry.target);
  
            // 2 ảnh / 1 dòng
            const rowStart = index % 2 === 0 ? index : index - 1;
  
            if (items[rowStart]) items[rowStart].classList.add("show");
            if (items[rowStart + 1]) items[rowStart + 1].classList.add("show");
  
            rowObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    items.forEach(item => rowObserver.observe(item));
  });
  
  [...document.body.querySelectorAll("*")].forEach(el => {
    if (el.scrollWidth > document.documentElement.clientWidth) {
      el.style.outline = "2px solid red";
    }
  });
  
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});


const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");

/* CLICK ICON BẬT / TẮT */
musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.classList.add("playing");
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
  }
});

function isMobile() {
  return window.innerWidth <= 768;
}

function showMusicAfterDoor() {
  musicBtn.classList.add("show");

  // Desktop → phát ngay
  if (!isMobile()) {
    music.play();
    musicBtn.classList.add("playing");
  }
}

/* TỰ ĐỘNG TẮT NHẠC KHI RỜI TRANG */
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    music.pause();
    musicBtn.classList.remove("playing");
  } else {
    music.play();
    musicBtn.classList.add("playing");
  }
});




/* GỌI SAU KHI CỬA MỞ XONG 
function showMusicAfterDoor() {
  // hiện icon
  musicBtn.classList.add("show");

  // bật nhạc
  music.play();
    // nếu trình duyệt chặn autoplay
    musicBtn.classList.add("playing");
}*/



    /* ===== LIGHTBOX ===== 
    const albumImages = document.querySelectorAll(".album-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
  
    albumImages.forEach(img => {
      img.addEventListener("click", function () {
        lightboxImg.src = this.src;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });
  
    lightbox.addEventListener("click", function () {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    });
  
    /* ===== FADE SECTION (HIỆN CẢ ALBUM) ===== 
    const fadeSections = document.querySelectorAll(".fade-section");
  
    function handleFadeSection() {
      fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          section.classList.add("show");
        }
      });
    }
  
    /* ===== FADE 2 ẢNH CÙNG DÒNG ===== 
    const items = document.querySelectorAll(".album-item");
  
    function handleFadeRows() {
      for (let i = 0; i < items.length; i += 2) {
        const item1 = items[i];
        const item2 = items[i + 1];
  
        const rect = item1.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          item1.classList.add("show");
          if (item2) item2.classList.add("show");
        }
      }
    }
  
    window.addEventListener("scroll", () => {
      handleFadeSection();
      handleFadeRows();
    });
  
    /* chạy lần đầu 
    handleFadeSection();
    handleFadeRows();
  
  });*/
  
      
  
  
  
  
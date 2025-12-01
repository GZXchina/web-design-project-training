  // 轮播图功能
  document.addEventListener('DOMContentLoaded', function() {
      const slides = document.querySelector('.slides'); //获取轮播容器
      const slideItems = document.querySelectorAll('.slide'); //获取轮播内容
      const dots = document.querySelectorAll('.dot'); //获取指示点
      const prevBtn = document.querySelector('.prev'); //获取上一张按钮
      const nextBtn = document.querySelector('.next'); //获取下一张按钮

      let currentSlide = 0; //当前幻灯片索引
      const totalSlides = slideItems.length; //幻灯片总数
      let slideInterval; //自动轮播计时器

      // 初始化轮播
      function initCarousel() {
          // 设置轮播图宽度
          slides.style.transform = `translateX(-${currentSlide * 100}%)`; //设置初始位置

          // 更新指示点
          updateDots();

          // 开始自动轮播
          startAutoSlide();
      }

      // 更新指示点
      function updateDots() {
          dots.forEach((dot, index) => {
              dot.classList.toggle('active', index === currentSlide);
          });
      } //更新指示点

      // 切换到指定幻灯片
      function goToSlide(slideIndex) {
          currentSlide = slideIndex;
          slides.style.transform = `translateX(-${currentSlide * 100}%)`;
          updateDots();
      } //切换到指定幻灯片

      // 下一张
      function nextSlide() {
          currentSlide = (currentSlide + 1) % totalSlides;
          goToSlide(currentSlide);
      }

      // 上一张
      function prevSlide() {
          currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
          goToSlide(currentSlide);
      }

      // 开始自动轮播
      function startAutoSlide() {
          slideInterval = setInterval(nextSlide, 3000);
      }

      // 停止自动轮播
      function stopAutoSlide() {
          clearInterval(slideInterval);
      }

      // 事件监听
      nextBtn.addEventListener('click', function() {
          nextSlide();
          resetAutoSlide();
      }); //下一张

      prevBtn.addEventListener('click', function() {
          prevSlide();
          resetAutoSlide();
      }); //上一张

      // 点击指示点切换
      dots.forEach((dot, index) => {
          dot.addEventListener('click', function() {
              goToSlide(index);
              resetAutoSlide();
          });
      });

      // 鼠标悬停停止自动轮播
      const carousel = document.querySelector('.carousel'); //获取轮播图容器
      carousel.addEventListener('mouseenter', stopAutoSlide); //鼠标悬停停止自动轮播
      carousel.addEventListener('mouseleave', startAutoSlide); //鼠标离开开始自动轮播

      // 重置自动轮播计时器
      function resetAutoSlide() {
          stopAutoSlide();
          startAutoSlide();
      }

      //初始化轮播
      initCarousel();
  });

  function navigateTo(url) {
      // 在新窗口中打开百度搜索页面
      window.open(url, '_blank');
  }
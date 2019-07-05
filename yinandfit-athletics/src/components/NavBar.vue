<template>
  <div class="nav-container">
    <div class="mobile-container">
      <nav class="nav-mobile">
        <div class="left-menu">
          <img src="./../assets/images/Ampersand-White-Yin-Fit.png" style="height: 50px;"/>
        </div>
        <div class="right-menu">
          <a href='https://www.instagram.com/yinandfit' target='_blank'><i class="fab fa-instagram" style='color: white;'></i></a>
          <a href='https://open.spotify.com/user/hkkgzaoy96s5pp6gac12fy7zc' target='_blank'><i class="fab fa-spotify" style='color: white;'></i></a>
        </div>
      </nav>
      <div class="mobile-logo">
          <img 
          src="./../assets/images/text-white-yin-fit.png" 
          style="height:100px; display: block; margin: 0 auto;"/>
        </div>
    </div>
    <nav class="nav-desktop">
      <div class="left-menu">
        <img src="./../assets/images/Ampersand-White-Yin-Fit.png" style="height:50px;"/>
      </div>
      <a href="#" class="logo">
        <img src="./../assets/images/text-white-yin-fit.png" style="height:100px;"/>
      </a>
      <div class="right-menu">
        <a href='https://www.instagram.com/yinandfit' target='_blank'><i class="fab fa-instagram" style='color: white;'></i></a>
        <a href='https://open.spotify.com/user/hkkgzaoy96s5pp6gac12fy7zc' target='blank'><i class="fab fa-spotify" style='color: white;'></i></a>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {}
</script>

<style lang='scss' scoped>
  .nav-container {
    width: 100%;
    padding: 1rem 0;
    
    .nav-mobile {
      max-width: 1720px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-menu {
        grid-column: 1;
        padding: 0;
        margin-left: 15px;
        display: flex;
        align-items: center;

      }

      .right-menu {
        grid-column: 2;
        padding: 0;
        margin-left: auto;
        margin-right: 15px;
        display: flex;
        align-items: center;

        .fab {
          font-size: 2rem;
          padding: 0.5rem;
        }
      }
    }

    .mobile-logo {
      max-width: 1720px;
      margin: 0 auto;
    }

    .nav-desktop {
      max-width: 1720px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr auto 1fr;

      .left-menu {
        grid-column: 1;
        padding: 10px 0;
        margin-left: 15px;
        display: flex;
        align-items: center;

      }
      .logo {
        grid-column: 2;
      }

      .right-menu {
        grid-column: 3;
        padding: 10px 0;
        margin-left: auto;
        margin-right: 15px;
        display: flex;
        align-items: center;
      }
    }
  }

  .fab {
    font-size: 2.5rem;
    padding: 0.5rem;
  }

  .fab:hover, .fab:active {
    color: #2aebad !important;
    cursor: pointer;
    transition: 0.3s;
  }

  @media screen and (max-width: 768px) {
    .mobile-container {
      visibility: visible;
    }
    .nav-desktop {
      visibility: hidden;
    }
  }
  
  @media screen and (min-width: 769px) {
    .mobile-container {
      visibility: hidden;
      height: 0;
    }
    .nav-desktop {
      visibility: visible;
    }
  }
</style>


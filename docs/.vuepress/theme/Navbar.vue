<template>
  <header :class="{'shadow':true}" class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
    <div class="con-btns-header">
      <router-link @click.native="changeAds" :to="$localePath" class="home-link">
        <div class="con-logo">
          <img class="logo" v-if="$site.themeConfig.logo" :src="$withBase($site.themeConfig.logo)">
        </div>
        <span class="site-name" v-if="$siteTitle" :class="{ 'can-hide': $site.themeConfig.logo }"></span>
      </router-link>
      <div :class="{'linksColor':!$page.frontmatter.home}" class="links">
        <NavLinks class="can-hide"/>
      </div>
    </div>

    <div class="con-redes-download">
      <a
        title="Github"
        v-if="repoLink"
        :href="repoLink"
        class="repo-link flaticon-github"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },
  data() {
    return {
      color: '#008afb',
      shadow: false
    }
  },
  computed: {
    repoLink() {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`
      }
    },
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      )
    },
    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },
  mounted() {
    if (this.$page.frontmatter.home) {
      window.addEventListener('scroll', e => {
        if (e.target.scrollingElement.scrollTop > 350) {
          this.shadow = true
        } else {
          this.shadow = false
        }
      })
    } else {
      this.shadow = true
    }
  },
  methods: {
    changeAds() {
      if (!document.querySelector('#carbonads')) return
      if (typeof _carbonads !== 'undefined') _carbonads.refresh()
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl';

.st0 {
  fill: #5b5777;
}

.con-redes-download {
  display: flex;
  align-items: center;
  justify-content: center;

  .repo-link {
    &:before {
      font-size: 1.2rem !important;
    }
  }

  a {
    display: flex !important;
    align-items: center;
    justify-content: center;
    padding: 0px 4px;
    transition: all 0.25s ease;
    color: #5b5777;

    &:hover {
      color: $accentColor !important;

      .st0 {
        fill: $accentColor !important;
      }
    }
  }
}

.shadow {
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.04) !important;
}

.logo {
  transition: all 0.3s ease;
}

.visible {
  opacity: 1;
  transform: translate(0);
}

.navbar {
  height: 3rem !important;
  padding: 0.4rem 1rem;
  line-height: $navbarHeight - 1.5rem;
  position: relative;
  background: $background;
  z-index: 1200 !important;
  position: fixed;
  width: calc(100% + 7px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    font-size: 1rem;
  }

  .home-link {
    margin-left: 2.5rem;
    margin-right: 3.5rem;
  }

  .con-btns-header {
    display: flex;
    align-items: center;
  }

  a, span, img {
    display: block;
  }

  .logo {
    height: $navbarHeight - 0.7rem;
    vertical-align: top;
  }

  .site-name {
    font-size: 1.3rem;
    display: none;
    font-weight: 600;
    color: $textColor;
    position: relative;
  }

  .links {
    font-size: 0.9rem;
    position: relative;
    top: 0rem;
    transition: all 0.2s ease;
  }
}

@media (max-width: $MQMobile) {
  .links {
    line-height: 48px;
  }

  .navbar {
    padding-left: 3rem;

    .can-hide {
      display: none;
    }
  }
}
</style>

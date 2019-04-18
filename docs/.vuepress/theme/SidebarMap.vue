<template>
  <div :class="{'activeSuggestion': activeSuggestion}" class="sidebar-map">
    <div class="c-sidebar-map">
      <ul class="sidebar-links-map" v-if="items.length">
        <li v-for="(item, i) in items">
          <!-- <pre>
          {{items}}
          </pre>-->
          <SidebarGroupMap
            v-if="item.type === 'group'"
            v-show="true"
            :item="item"
            :first="i === 0"
            :open="i === openGroupIndex"
            :collapsable="item.collapsable"
            @toggle="toggleGroup(i)"
          />
          <!-- <SidebarLink v-else :item="item"/> -->
        </li>
      </ul>
      <slot name="bottom"/>
    </div>
  </div>
</template>

<script>
import SidebarGroupMap from './SidebarGroupMap.vue'
import SidebarLink, { groupHeaders } from './SidebarLink.vue'
import { isActive, resolveSidebarItems } from './util'

export default {
  components: { SidebarGroupMap, SidebarLink },
  props: ['items'],
  data() {
    return {
      openGroupIndex: 0,
      activeSuggestion: false
    }
  },
  created() {
    this.refreshIndex()
  },
  watch: {
    $route() {
      this.refreshIndex()
    }
  },
  methods: {
    refreshIndex() {
      const index = resolveOpenGroupIndex(this.$route, this.items)
      if (index > -1) {
        this.openGroupIndex = index
      }
    },
    toggleGroup(index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },
    isActive(page) {
      return isActive(this.$route, page.path)
    }
  }
}

function resolveOpenGroupIndex(route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (
      item.type === 'group' &&
      item.children.some(c => isActive(route, c.path))
    ) {
      return i
    }
  }
  return -1
}
</script>

<style lang="stylus">
@import './styles/config.styl';

.no-sidebar {
  .sidebar-map {
    background: transparent;
  }
}

.sidebar-map {
  position: fixed;
  right: 0px;
  background-color: #fdfdfd;
  z-index: 1000;
  bottom: 0px;
  top: $navbarHeight;
  // width 10rem
  // height 100%
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .sidebar-links-map {
    width: 7.5rem;

    .sidebar-group-items {
      >li {
        >a {
          display: none;
        }
      }

      .sidebar-link {
        &.active {
          border-left: 1px solid rgb(0, 0, 0);
          color: rgb(0, 0, 0);
          font-weight: bold;
        }
      }
    }
  }


  ul {
    width: 100%;
    padding-left: 0px;
  }

  li {
    list-style: none;
    position: relative;
    display: block;

    .sidebar-link {
      padding: 5px;
      padding-left: 10px;
      font-size: 0.7rem;
    }
  }

  .sidebar-group {
    margin-top: 0px;

    .sidebar-group-items {
      padding-top: 0px;
      padding-bottom: 0px;
    }
  }
}

@media only screen and (max-width: 1100px) {
  .c-sidebar-map {
    display: none;
  }

  .sidebar .sidebar-sub-headers {
    display: block !important;
  }

  .page {
    width: 100%;
    padding-right: 0px !important;
  }

  .sidebar-map {
    width: 'calc(100% - %s)' % $sidebarWidth;
    height: 140px;
    position: relative;
    margin-left: $sidebarWidth;
  }

  .no-sidebar {
    .carbon {
      margin-bottom: 0px !important;
      width: 330px;

      .carbon-wrap {
        display: flex;

        .carbon-text {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: left;
        }
      }

      .carbon-img {
        img {
          width: auto !important;
        }
      }
    }


    .c-sidebar-map {
      display: none;
    }
  }
}

@media only screen and (max-width: 400px) {
  .sidebar-map {
    height: auto;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>

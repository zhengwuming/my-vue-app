<template>
  <div class="home">
    <div class="header">
      <img
        class="logo"
        src="@/assets/global/hdxrmyy.png"
        alt=""
      />
    </div>
    <img
      class="divider"
      src="@/assets/global/divider.jpg"
    />
    <div class="content">
      <div class="section-item-primary" @click="viewMore">
        <div class="section-item-primary-left">
          <p>心内科入院宣教</p>
          <p>帮助患者及家属了解心内科相关信息</p>
        </div>
      </div>
      <div
        class="section-item-video"
        v-for="(item,index) in promotionalLinksArray"
        :key="index"
      >
        <p class="video-title">{{ item.title }}</p>
        <video
          class="video-player"
          ref="videoPlayerRef"
          webkit-playsinline="true"
          playsinline="true"
          x-webkit-airplay="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          x5-video-orientation="portraint"
          preload
          controls="controls"
          :src="item.videoUrl"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
  data() {
    return {
      promotionalLinksArray: [
        {
          image: '',
          title: '心内科冠心病介入手术宣教',
          videoUrl:
            'http://vod.ma3you.com/sv/461bb01b-17ff46ec545/461bb01b-17ff46ec545.mp4?auth_key=1649073394-2b3e4163a855460eb4dc041886524575-0-63339a4935e7a862c3fb54967569bfc8',
        },
        {
          image: '',
          title: '冠心病',
          videoUrl:
            'https://vod.ma3you.com/sv/37129000-17ff46d8119/37129000-17ff46d8119.mp4?auth_key=1649073304-6695fdbc5744438091cdce3eea86c62d-0-78c547ff5507117ba69bf440f26cef72',
        },
        {
          image: '',
          title: '高血压知识',
          videoUrl:
            'https://vod.ma3you.com/sv/28d7066a-17ff46cb1e2/28d7066a-17ff46cb1e2.mp4?auth_key=1649073249-e40ff573a8444df8b76b63f9562169ac-0-f2041e33ea5f756a6fa0ca82e873f95f',
        },
        {
          image: '',
          title: '慢性心衰病人的日常护理',
          videoUrl:
            'https://vod.ma3you.com/sv/3c1a1561-17ff467acd8/3c1a1561-17ff467acd8.mp4?auth_key=1649073649-2ab64f0f2693441689130a6f857bb2b2-0-4191441a4612ffde5dae2525bd4e6fc2',
        },
        {
          image: '',
          title: '急性型心肌梗死',
          videoUrl:
            'https://vod.ma3you.com/sv/5b8ccf00-17ff464f686/5b8ccf00-17ff464f686.mp4?auth_key=1649073661-db1e91d6bd0d42569dcb0bfd2a597965-0-41cf79b6e953c577961d3795e5307c63',
        },
      ],
    }
  },
  methods: {
    viewMore() {
      window.open('https://s12.aconvert.com/convert/p3r68-cdx67/a7puk-lu7z8.html')
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #fff;

  .header {
    .logo {
      width: 100%;
      padding: 20px 0;
      background: #fff;
    }
  }

  .divider {
    width: 100%;
    padding: 0 32px;
    box-sizing: border-box;
  }

  .content {
    padding: 0 32px;
    color: #fff;

    .section-item-primary {
      position: relative;
      padding: 44px 32px;
      display: flex;
      align-items: center;
      border-radius: 8px;
      background: #205792;

      &-left {
        flex: 1;
        margin: 0 16px;

        > p:first-child {
          font-size: 38px;
          line-height: 48px;
          font-weight: 700;
        }

        > p:last-child {
          font-size: 28px;
          line-height: 42px;
          font-weight: 400;
        }
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 28px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        background-image: url('../../assets/global/angle-right-o.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transform: translateY(-50%);
      }
    }

    .section-item-video {
      margin-top: 40px;
      user-select: none;
      cursor: pointer;
      background-color: #fff;
      box-shadow: 0 16px 40px #999, 0 2px 16px #999;
      border-radius: 16px;
      overflow: hidden;

      .video-title {
        padding: 20px;
        font-size: 28px;
        line-height: 42px;
        font-weight: 600;
        color: #000;
      }

      .video-player {
        display: block;
        width: 100%;
        height: 400px;
      }
    }
  }
}
</style>

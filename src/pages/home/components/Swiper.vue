<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item of list" :key="item.id">
				<img class="swiper-img" :src="item.url" />
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      list: [
        {
          id: '0001',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/4e474ded659cd8e791404278930f48d0.jpg_890x330_54c60781.jpg'
        },
        {
          id: '0002',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/17a38407cea56e121d8d3f45fe9e91c1.jpg_890x330_83dfe460.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
      background: red !important
    .wrapper
      overflow: hidden
      width: 100%
      height: 0
      padding-bottom: 31.25%
      background: #eee
      .swiper-img
        width: 100%
</style>

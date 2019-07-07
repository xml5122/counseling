<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      > </router-link>-->
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.url" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
      return {
		  list: [
		    {
		      id: '0001',
		      url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/4e474ded659cd8e791404278930f48d0.jpg_890x330_54c60781.jpg',
		  	  title: 'hhhhh',
		  	  desc: '我是描述'
		    },
		    {
		      id: '0002',
		      url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/17a38407cea56e121d8d3f45fe9e91c1.jpg_890x330_83dfe460.jpg',
		  	  title: 'gggg',
		  	  desc: '我是描述'
		    }
		  ]
	  }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>

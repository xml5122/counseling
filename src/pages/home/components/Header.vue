<template>
  <div class="header">
    <div class="header-left">
			<span class="iconfont">&#xe624;</span>
		</div>
    <div class="header-mid">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题</div>
    <div class="header-right">
			城市
			<span class="iconfont">&#xe62d;</span>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float:left
      margin-left: .2rem
    .header-mid
      flex: 1
      background: #fff
      border-radius: .1rem
      margin-top: .12rem
      height: .64rem
      line-height: .64rem
      margin-left: .2rem
      padding-left: .2rem
      color: #ccc
    .header-right
      width: 1.24rem
      float:right
      text-align: center
</style>

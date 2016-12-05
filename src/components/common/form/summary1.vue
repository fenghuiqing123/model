<template>
<div>
    <h1 class="page-title"> {{title11}}
		<small>{{smtitle}}</small>
	</h1>
	<div class="row">
		<div class="col-md-12">
			<div class="">
                <div  class="caption news-fonts">
                    <i  class="icon-settings font-red-mint"></i>
                    <span  class="caption-subject font-red-mint bold uppercase">CSS</span>
                </div>
                <div class="news-marginbottom"> 
                    {{cssinclude}}
                </div>
                <div class="caption news-fonts">
                    <i class="icon-settings font-red-mint"></i>
                    <span class="caption-subject font-red-mint bold uppercase ">JS</span>
                </div>
                <div> 
                    {{jsinclude}}
                </div>
            </div>
		</div>
	</div>
</div>
</template>
<script>
export default {
  name:'summary1',
  props: ['title11','smtitle','cssinclude','jsinclude'],
  data(){
    return {
    }
  },
  mounted(){
  }
}
</script>
<template>
<div  class="page-wrapper">
    <nav-menu></nav-menu>
    <div class="page-container">
        <side-menu></side-menu>
        <div class=" page-content-wrapper">
            <div class="view-wrap page-content">
                <div class="">
                    <router-view></router-view>

                </div>
            </div>
        </div>    
    </div>
</div>
</template>

<script>
import NavMenu from 'components/common/navMenu'
import SideMenu from 'components/common/sideMenu'
import InputModel from 'components/common/form/inputModel'
export default {
  name: 'app',
  components: {
    NavMenu,SideMenu,InputModel
  },
  data(){
    return {

    }
  }
}
</script>

<style>
  @import "styles/app.less";
  body{
        font-size: 14px;
    }
  button{
        margin:0;
        padding: 0;
        outline: none;
  }
  .view-wrap{
    margin-left: 245px;
    padding-top: 70px;
  }
  .page-content-wrapper .page-content{
        padding: 25px 10px 10px 60px;
  }
  .alert-success{
        background-color: #FFC4C4;
        border-color: #FFC4C4;
        color:#F95759;
    }
  @media screen and (max-width:991px){
    .view-wrap{
        margin-left:0px;
        padding:5px;
    }
  }
</style>

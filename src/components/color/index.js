import summary1 from 'components/common/form/summary1' 
import colors from 'components/color/color'
export default {
    data(){
        return {
            html:'',
            checkBox:'',
            raDios:'',
            title11:'色彩 ',
            smtitle:' Basic Color',
            cssinclude:'该表单控件基于:bootstrap.min.css 、 font-awesome.min.css',
            jsinclude:'该表单控件基于:jquery.min.js 、 bootstrap.min.js'
            
        }
    },
    components: {
       summary1,colors
    }
//    mounted(){
//        this.html = HTMLFormat($('.form1').html());
//    }
    
}
import InputModel from 'components/common/form/inputModel'
import summary1 from 'components/common/form/summary1'
import button1 from 'components/button/button1'
import button2 from 'components/button/button2'
export default {
    data(){
        return {
            html:'',
            btnhtml:'',
            title11:'按钮',
            smtitle:'Basic Button',
            cssinclude:'该表单控件基于:bootstrap.min.css 、 font-awesome.min.css',
            jsinclude:'该表单控件基于:jquery.min.js 、 bootstrap.min.js'
            
        }
    },
    components: {
        InputModel,summary1,button1,button2
    },
    mounted(){
        this.html = HTMLFormat($('.btn-p').html());
        this.btnhtml = HTMLFormat($('.btn1-p').html());
        
        
    }
    
}
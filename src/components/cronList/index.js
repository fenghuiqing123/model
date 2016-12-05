import InputModel from 'components/common/form/inputModel'
import form1 from 'components/common/form/form'
import summary1 from 'components/common/form/summary1' 
export default {
    data(){
        return {
            html:'',
            checkBox:'',
            raDios:'',
            title11:'输入框',
            smtitle:'Input',
            cssinclude:'该表单控件基于:bootstrap.min.css 、 font-awesome.min.css',
            jsinclude:'该表单控件基于:jquery.min.js 、 bootstrap.min.js'
            
        }
    },
    components: {
        InputModel,form1,summary1
    },
    mounted(){
        this.html = HTMLFormat($('.form1').html());
        
    }
    
}
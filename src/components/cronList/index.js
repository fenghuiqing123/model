import InputModel from 'components/common/form/inputModel'
import form1 from 'components/common/form/form'
import summary1 from 'components/common/form/summary1' 
import default1 from 'components/cronList/default'   
export default {
    data(){
        return {
            html:'',
            default1:'',
            title11:'输入框',
            smtitle:'Form Input',
            cssinclude:'该表单控件基于:bootstrap.min.css 、 font-awesome.min.css',
            jsinclude:'该表单控件基于:jquery.min.js 、 bootstrap.min.js'
            
        }
    },
    components: {
        InputModel,form1,summary1,default1
    },
    mounted(){
        this.html = HTMLFormat($('.form1').html());
        this.default1 = HTMLFormat($(".default1").html());
    }
    
}
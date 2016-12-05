import InputModel from 'components/common/form/inputModel'
import checkBox from 'components/common/form/checkBox'
import summary1 from 'components/common/form/summary1'   
export default {
    data(){
        return {
            html:'',
            readOnly:'',
            checkBox:'',  
            raDios:'',
            title11:'多选框',
            smtitle:'Form Checkbox',
            cssinclude:'该表单控件基于:bootstrap.min.css 、 font-awesome.min.css',
            jsinclude:'该表单控件基于:jquery.min.js 、 bootstrap.min.js'
        }
    },
    components: {
        InputModel,checkBox,summary1
    },
    mounted(){
        this.checkBox = HTMLFormat($('.checkBox').html());
    }
    
}
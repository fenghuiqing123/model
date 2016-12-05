import InputModel from 'components/common/form/inputModel'
import selection from 'components/common/form/select'
import summary1 from 'components/common/form/summary1'
export default {
    data(){
        return {
            selection:'',
            title11:'选择器',
            smtitle:'Form Select',
            cssinclude:'该表单控件基于:bootstrap.min.css 、 font-awesome.min.css',
            jsinclude:'该表单控件基于:jquery.min.js 、 bootstrap.min.js'
        }
    },
    components: {
        InputModel,selection,summary1
    },
    mounted(){
        this.selection = HTMLFormat($('.selection').html());
        
    }
    
}
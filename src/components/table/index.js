import InputModel from 'components/common/form/inputModel'
import summary1 from 'components/common/form/summary1'
export default {
    data(){
        return {
            html:'',
            title11:'表格',
            smtitle:'Data Table',
            cssinclude:'该表单控件基于:bootstrap.min.css 、 font-awesome.min.css',
            jsinclude:'该表单控件基于:jquery.min.js 、 bootstrap.min.js'
        }
    },
    components: {
        InputModel,summary1
    },
    mounted(){
//        this.readOnly = HTMLFormat($('.readOnly').html());
    }
    
}
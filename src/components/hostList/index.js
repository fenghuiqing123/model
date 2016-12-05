import InputModel from 'components/common/form/inputModel'
import raDios from 'components/common/form/raDios'
import summary1 from 'components/common/form/summary1'   
export default {
    data(){
        return {
            html:'',
            readOnly:'',
            checkBox:'',  
            raDios:'',
            title11:'单选框',
            smtitle:'Form Radio',
            cssinclude:'该表单控件基于:bootstrap.min.css 、 font-awesome.min.css',
            jsinclude:'该表单控件基于:jquery.min.js 、 bootstrap.min.js'
        }
    },
    components: {
        InputModel,raDios,summary1
    },
    mounted(){
        this.raDios = HTMLFormat($('.raDios').html());
        
    }
    
}
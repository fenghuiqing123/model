$(function(){
    var object = [
        {
            'innercss':'a, button, code, div, img, input, label, li, p, pre, select, span, svg, table, td, textarea, th, ul{
                '+'border-radius: 0!important;
            '+}
            .control-label{
                margin-top: 1px;
                font-weight: 400;
            }
            .form-control{
                outline:0!important;
            }
            .btn, .form-control{
                box-shadow:none!important;
            }
            .help-block{
                margin-top: 5px;
                margin-bottom: 5px;
            }
            [class*=" fa-"]:not(.fa-stack), [class*=" glyphicon-"], [class*=" icon-"], [class^=fa-]:not(.fa-stack), [class^=glyphicon-], [class^=icon-]{
                display: inline-block;
                line-height: 14px;
                -webkit-font-smoothing: antialiased;
            }
            /*icon样式*/
            .input-group-addon>i{
                color: #c5cdda;
            }
            .input-icon{
                position: relative;
                left: 0;
            }
            .input-icon>i{
                color: #ccc;
                position: absolute;
                margin: 11px 2px 4px 10px;
                z-index: 3;
                width: 16px;
                font-size: 16px;
                text-align: center;
                left: 0;
            }

            .input-icon>.form-control{
                padding-left: 33px;
            }
            /*icon在右侧*/
            .input-icon.right{
                left: auto;
                right: 0;
            }
            .input-icon.right>i{
                left: auto;
                right: 8px;
                float: right;
            }
            .input-icon.right>.form-control{
                padding-right: 33px;
                padding-left: 12px;
            }'
        }
    ];
})
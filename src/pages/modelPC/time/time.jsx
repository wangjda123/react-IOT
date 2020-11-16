import React,{Component} from 'react'
import $ from 'jquery';

// import './time.less'

export default class Time extends Component{
    clocknum(num) {
        $('.digits').empty();
        var html = '';
        var strarr = num.toString().split('');
        var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');
        for(var i=0; i<strarr.length; i++){
            if(strarr[i] == '.'){
                html += '<div class="dot"></div>'
            } else {
                var clasname = digit_to_name[strarr[i]];
                html += '<div class="'+clasname+'">' +
                    '<span class="d1"></span>' +
                    '<span class="d2"></span>' +
                    '<span class="d3"></span>' +
                    '<span class="d4"></span>' +
                    '<span class="d5"></span>' +
                    '<span class="d6"></span>' +
                    '<span class="d7"></span>' +
                    '</div>';
            }
        }
        $('.digits').append(html);
    }
    render() {

        this.clocknum(0.56); //执行
        return (
            <div className="light">
                <div className="digits"></div>
            </div>
        );
    }


}
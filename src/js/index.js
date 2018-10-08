$(function() {
    $.ajax({
        url: "../data/data.json",
        success: function(res) {
            if (res.code === 1) {
                render(res.data);
            }
        }
    });

    function render(data) {
        var lhtml = '';
        data.forEach(function(item, ind) {
            lhtml += `<div id="select">
            <div class="s_head">
                <h3><input type="radio" name="" id="btn"><span>${item.name}</span></h3>
                <b>${item.time}</b>
            </div>
            <div class="s_con">
                <ul>
                    <li>${item.cpu}<span>CPU</span></li>
                    <li>${item.memory}<span>内存</span></li>
                    <li>${item.system}<span>系统盘</span></li>
                    <li>${item.wsx}<span>数据盘</span></li>
                </ul>
            </div>
        </div>       
                `;
        });
        $('main').append(lhtml);
        $("main").on("click", "#select", function() {
            $(this).addClass('active').siblings().removeClass("active");
        })
    }

});
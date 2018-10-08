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
        var html = '';
        data.forEach(function(item) {
            lhtml += `<div class="select">
            <div class="s_head">
                <h3><input type="radio" name="" id="btn"><span>${item.name}</span></h3>
                <b>${item.time}</b>
            </div>
            <div class="s_con">
                <ul>        
                `;
            lhtml += `</ul>
                </div>
            </div>`;
        });

        // data.content.forEach(function(val) {
        //     html += `<li>${val}<span>CPU</span></li>`;
        // });

        $('.main').append(lhtml);
        $('.s_con>ul').append(html);
    }
});
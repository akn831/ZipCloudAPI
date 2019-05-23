$(function() {
    //検索ボタンがクリックされたら
    $("#search-btn").on("click", function() {

        //検索ワードを取得
        let zipCode = $("#search-word").val();

        //ajaxを使ってzipCloudに検索しに行く
        //データ通信をするところ
        $.ajax( {
            url: "http://zipcloud.ibsnet.co.jp/api/search",
            type: "GET",
            datatype: "jsonp",
            data: {
                zipcode: zipCode,
            }

            //通信成功したら
        }).done( (data) => {
            console.log(data);
        //下記処理を行う

        }).fail((error) => {
            //エラーになった時の処理
        })
    })

    
})
// 카카오 지도 API 사용
window.addEventListener("load", () => {
    kakao.maps.load(function () {
        try {
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(38.026206, 127.665741),
                level: 3
            };
            var map = new kakao.maps.Map(container, options);
            
            // 마커가 표시될 위치입니다 
            var markerPosition  = new kakao.maps.LatLng(38.026206, 127.665741); 
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
            
            var iwContent = '<div class="map_marker">레이크192</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(38.026206, 127.665741);  //인포윈도우 표시 위치입니다
            
            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position : iwPosition, 
                content : iwContent 
            });
            
            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker); 
        } catch (err) {
            console.log(err)
        }
    });

    // 카카오맵
    document.querySelector(".kakaomap").addEventListener("click", (event) => {
        event.preventDefault();
        window.open(`https://map.kakao.com/link/to/레이크192,38.026206,127.665741`);
    })
    // 네이버
    document.querySelector(".navermap").addEventListener("click", (event) => {
        event.preventDefault();
        window.open(`https://map.naver.com/p/search/%EB%A0%88%EC%9D%B4%ED%81%AC192/place/1068175750?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp`);
    })
    // 티맵
    document.querySelector(".tmap").addEventListener("click", (event) => {
        event.preventDefault();
        window.open(`https://surl.tmobiapi.com/1367b9fc`);
    })

    $(".btn_copy").on("click", (event) => {
        const number = $(event.target).parent().find(".num").text();
        navigator.clipboard.writeText(number).then(() => {
            alert("계좌번호가 복사되었습니다!")
        }).catch(err => {
            console.log('계좌번호 복사 에러가 발생했습니다. 새로고침 후 다시 이용해주세요', err);
        })
    })
});

$(function(){
    $('.account_area .btn_account').click(function(){
        $('.layer_modal_wrap').fadeIn(200);
    })
    $('.layer_modal_wrap .btn_close').click(function(){
        $('.layer_modal_wrap').fadeOut(200);
    })
})
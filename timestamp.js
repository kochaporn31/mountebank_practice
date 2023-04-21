function (request, response, logger) {
    let time = new Date().toString();
    return {
        'statusCode' : 200,
        'body' : {
            'order_id': 8004359122,
            'total_price': 14.95,
            'notify_message' : "วันเวลาที่ชำระเงิน 1/3/2020 13:30:00 หมายเลขคำสั่งซื้อ 8004359122 คุณสามารถติดตามสินค้าผ่านช่องทาง Kerry หมายเลข 1785261900",
            'timestamp': time
        }
    };
}
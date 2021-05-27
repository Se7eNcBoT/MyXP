//hostname=api.revenuecat.com  
//https:\/\/api\.revenuecat\.com\/v1\/receipts

let obj = JSON.parse($response.body);
obj = {
  "startTime": 991603940132,
  "expiredTime": 991604246399,
  "expired": 0,
  "isPaying": 0,
  "permanent": 0,
  "day": 91,
  "remainTime": 99306196,
  "payingRemainTime": 6,
  "isAutoRenewable": 6,
  "historyAutoRenewable": 6,
  "autoRenewableChannel": 6,
  "autoRenewableTime": 6,
  "autoRenewablePrice": 991900,
  "savedMoney": 9927433,
  "totalFreeReadDay": 6666,
  "remainCoupon": 6666,
  "remainCount": 6666,
  "hintsForRecharge": {
    "predictedSavedMoney": 9910315,
    "predictedChapterPrice": 15,
    "pricePerMonth": 99900,
    "sendCoupons": 6666,
    "buttonTitle": "付费无限卡9元/月 · 限时特惠",
    "buttonSubtitle": "你正在使用免费无限卡 · 升级付费无限卡即可阅读"
  },
  "freeBookIds": [],
  "timestamp": 1603940203,
  "random": 8341,
  "signature": "6b9e4332c1df3c0d5b2d06335a1ff5f53a84a77bd8feb7165fabc3887fbcce19"
};
$done({body: JSON.stringify(obj)});







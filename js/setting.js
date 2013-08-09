/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.haigusyaKoujo = 380000; // 配偶者控除
Taxes.taxRate = 0.06; // 住民税率
Taxes.vatRate = 0.01; // 地方消費税率（消費税4％・地方消費税1％）
Taxes.consumptionSpendingRate = 0.6; // 消費支出割合
Taxes.perCapita = 3000; // 均等割
Taxes.socialInsuranceRate = 0.1006; // 大阪府の平成25年度一般保険料率（http://www.kyoukaikenpo.or.jp/g3/cat330/1936-295）
Taxes.nursingCareInsuranceRate = 0.0155; // 平成25年度の介護保険料率（http://www.kyoukaikenpo.or.jp/g3/cat330/1995-298）

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'suita_city_budget';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* suita cofog */
  // 子育て・教育
  '1': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#935B3B' },
  '101': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#935B3B' }, // 教育費
  // 福祉・健康・環境保全
  '2': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#935B3B' },
  '201': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#935B3B' }, // 民生費
  '202': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#935B3B' }, // 衛生費
  // 産業・仕事
  '3': { icon: 'icons/extras/sangyou3.svg', color: '#C75746', bcolor: '#935B3B' },
  '301': { icon: 'icons/extras/c_nougyou.svg', color: '#C75746', bcolor: '#935B3B' }, // 農業費
  '302': { icon: 'icons/extras/c_syoukougyou.svg', color: '#C75746', bcolor: '#935B3B' }, // 商工費
  '303': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#935B3B' }, // 労働費
  // まちづくり
  '4': { icon: 'icons/extras/machi.svg', color: '#C75746', bcolor: '#935B3B' },
  '401': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#935B3B' }, // 土木費
  // 安全・防災
  '5': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#935B3B' },
  '501': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#935B3B' }, // 消防費
  // 議会
  '6': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' },
  '601': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' }, // 議会費
  // 公債
  '7': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#935B3B' },
  '701': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#935B3B' }, // 公債費
  // その他
  '8': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#935B3B' },
  '801': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' }, // 総務費
  '802': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#935B3B' }, // 諸支出金
  '803': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#935B3B' }, // 予備費

};



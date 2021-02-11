import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params/*, hash*/) {
  let [value,symbol]=params;
  switch (value){
    case 0:
      symbol = '$';
      return symbol;
    default :
      symbol = '€';
      return symbol;
  }
});

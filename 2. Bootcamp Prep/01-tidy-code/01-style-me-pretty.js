function styleMePretty() {
  let truth = '';

  function innerBeauty(count) {
    let result = '';

    while (count > 0) {
      count--;
      if (count===2) {
        result += 'Unformatted code';
      }
    }

    result += ' is difficult to parse';

    return result;
  }

  truth += `${innerBeauty(5)} for humans if not for machines`;

  return truth;
}
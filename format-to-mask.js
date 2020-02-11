
  function formatToMask(mask, number) {
    var s = '' + number,
      r = '';
    for (var im = 0, is = 0; im < mask.length && is < s.length; im++) {
      r += mask.charAt(im) === 'X' ? s.charAt(is++) : mask.charAt(im);
    }
    return r;
  }
  export default formatMask;

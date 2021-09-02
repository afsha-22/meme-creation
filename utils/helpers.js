module.exports = {
    textPositionClass: (position) => {
        let result;
        if (position == 'top') {result = 'top-0'};
        if (position == 'middle') {result = 'top-50'};
        if (position == 'bottom') {result = 'bottom-0'};
      return result;
    }
};
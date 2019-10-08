;
/** add metrics call */
window.mOpen = function () {
  var param = { 'open': true };
  ym(55605811, 'params', param);
  console.log('Metric open');
}

window.mStart = function () {
  var param = { 'start': true };
  ym(55605811, 'params', param);
  console.log('Metric start');
}

window.mFill = function (height, name, email, city) {
  var param = {
    'fill': {
      name: `${name}`,
      height: `${height}`,
      email: `${email}`,
      city: `${city}`,
    }
  };
  ym(55605811, 'params', param);
  console.log('Metric fill');
}

window.mPrize = function (state) {
  var param = {};

  if (state) {
    param = {
      'give_me_the_prize': {
        'success': true,
      },
    };
  }
  else {
    param = {
      'give_me_the_prize': {
        'error': true,
      },
    };
  }
  ym(55605811, 'params', param);
  console.log('Metric send');
}

window.mShare = function (net) {
  var param = {};

  switch (net) {
    case 'vk':
      param = {
        'share': {
          'vk': true,
        },
      };
      break;
    case 'fb':
      param = {
        'share': {
          'fb': true,
        },
      };
      break;
    case 'ok':
      param = {
        'share': {
          'ok': true,
        },
      };
      break;
  }

  ym(55605811, 'params', param);
  console.log('Metric share');
}

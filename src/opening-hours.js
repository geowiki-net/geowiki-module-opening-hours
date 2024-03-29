const Twig = require('twig')

module.exports = {
  id: 'opening-hours'
}

const OpeningHours = require('opening_hours')

Twig.extendFunction('openingHoursState', function (openingHours) {
  try {
    var oh = new OpeningHours(openingHours)
  } catch (err) {
    console.log('Error in opening_hours: ' + err)
    return 'unknown'
  }

  return oh.getStateString(new Date(), true)
})

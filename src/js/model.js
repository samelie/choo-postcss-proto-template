export default (state, emitter) => {

  emitter.on('site-clicked', (label) => {

    state.sites.forEach(site => {
      site.selected = site.label === label
    })

    emitter.emit('render')

  })

  state.sites = [{
    label: 'DeuxTube',
    selected: true,
    url: 'https://samelie.github.io/rad.wtf-deuxtube/'
  },{
    label: 'Alhambra',
    selected: false,
    url: 'https://samelie.github.io/thealhambraproject.com/desktop-tour/'
  },{
    label: 'Mars',
    selected: false,
    url: 'https://samelie.github.io/mars-amenothep/'
  },{
    label: 'Chromegno.me',
    selected: false,
    url: 'https://samelie.github.io/chromegno.me/'
  },{
    label: 'Bushel Hyde//Moon',
    selected: false,
    url: 'https://samelie.github.io/bushel-hyde-moon/'
  }]

  emitter.emit('render')
}

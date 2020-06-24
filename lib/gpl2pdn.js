const pad = s => (s.length === 1 ? '0' : '') + s

const componentToHex = c => pad(c.toString(16))

const gplColorRegex = /^\s*(\d{1,3})\s*(\d{1,3})\s*(\d{1,3})\s*(.+)$/

const parseLine = l => {
  if(l.startsWith('#')) {
    // comment
    return ';' + l.slice(1)
  } else if(l.startsWith('G')) {
    // gimp palette identification line
    return '; ' + l + ' (converted with gpl2pdn.js)'
  } else if(l.trim() === '') {
    // blank line
  } else {
    // color
    const [full, r, g, b] = l.match(gplColorRegex)
    if(r === undefined || g === undefined || b == undefined) throw new Error('failed to parse line')
    const hex = 'ff' + [r, g, b].map(s => Number(s)).map(componentToHex).join('')
    return hex
  }
}

module.exports = { parseLine }

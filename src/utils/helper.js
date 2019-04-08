// 判断 value 是否是 validList 其中之一
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

// 获取颜色
/**
 * 颜色，透明度，
 */
export function getColor(colorx, alphax = 1, defaultx = true) {
  // 16进制字节 转 rgb
  if (/^[#]/.test(colorx)) {
    let c = this.hexToRgb(colorx)
    colorx = `rgba(${c.r},${c.g},${c.b},${alphax})`
  }
  // rgba
  else if (/^rgba/.test(colorx)) {
    // 透明度为非数字时 rgba(1,1,1,.1) 的 .1) 并且 defaultx === false
    if (colorx.search(/.([0-9]\))$/) === -1 && !defaultx) {
      // 用默认的透明度取代 rgba的 a
      colorx = colorx.replace(/.?([0-9]\))$/, `${alphax})`)
    }
  }
  // rgb 转 rgba
  else if (/^(rgb)/.test(colorx)) {
    // change rgb and rgba
    if (alphax != 1) {
      colorx = colorx.replace(/^(rgb)/, `rgba`)
      colorx = colorx.replace(/\)$/, `,${alphax})`)
    }
  }
  return colorx
}

export function hexToRgb(hex) {
  // \d匹配数字
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

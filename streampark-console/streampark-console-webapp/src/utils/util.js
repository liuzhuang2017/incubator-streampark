/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default {
  timeFix () {
    const time = new Date()
    const hour = time.getHours()
    return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
  },
  welcome () {
    const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
  },

  /**
   * 触发 window.resize
   */
  triggerWindowResize () {
    const event = document.createEvent('HTMLEvents')
    event.initEvent('resize', true, true)
    event.eventType = 'message'
    window.dispatchEvent(event)
  },
  handleScrollHeader (callback) {
    let timer = 0
    let beforeScrollTop = window.pageYOffset
    callback = callback || function () {}
    window.addEventListener(
      'scroll',
      event => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          let direction = 'up'
          const afterScrollTop = window.pageYOffset
          const delta = afterScrollTop - beforeScrollTop
          if (delta === 0) {
            return false
          }
          direction = delta > 0 ? 'down' : 'up'
          callback(direction)
          beforeScrollTop = afterScrollTop
        }, 50)
      },
      false
    )
  },

  /**
   * Remove loading animate
   * @param id parent element id or class
   * @param timeout
   */
  removeLoadingAnimate (id = '', timeout = 1500) {
    if (id === '') {
      return
    }
    setTimeout(() => {
      document.body.removeChild(document.getElementById(id))
    }, timeout)
  },
  hasClass(elem, cls) {
    cls = cls || ''
    if (cls.replace(/\s/g, '').length === 0) {
      return false
    }
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ')
  },
  addClass(elem, cls) {
    if (!this.hasClass(elem, cls)) {
      elem.className = elem.className === '' ? cls : elem.className + ' ' + cls
    }
  },
  removeClass(elem, cls) {
    if (this.hasClass(elem, cls)) {
      let newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' '
      while (newClass.indexOf(' ' + cls + ' ') >= 0) {
        newClass = newClass.replace(' ' + cls + ' ', ' ')
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '')
    }
  }
}






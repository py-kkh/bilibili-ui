---
API:
  - name: date
    type: date | string | null
    parameters: null
    description: 日期值，如果未提供，此组件将会运行在自动模式。
    default: 'null'
  - name: onChange
    type: func
    parameters: '(date: Date, text: String) => void'
    description: 日期被选中时将会被调用的回调函数。
    default: noop
  - name: onCancel
    type: func
    parameters: () => void
    description: 选择框被关闭时将会被调用的回调函数。
    default: noop
  - name: show
    type: bool
    parameters: null
    description: 直接控制选择框是否显示。
    default: false
  - name: withClear
    type: bool
    parameters: null
    description: 是否要添加清空功能。
    default: false
  - name: autoOk
    type: bool
    parameters: null
    description: 是否在选择日期后，直接关闭选择框。
    default: false
  - name: format
    type: func
    parameters: date => dateToString(date)
    description: 一个用于格式化日期到字符串的自定义方法，
    default: null
  - name: weekdayNames
    type: array
    parameters: arrayWith7Strings
    description: 用户自定义的周一~周日的名称。
    default: null
  - name: weekdayShortNames
    type: array
    parameters: arrayWith7Strings
    description: 用户自定义的周一~周日的短名称。
    default: null
  - name: monthNames
    type: array
    parameters: arrayWith12Strings
    description: 用户自定义的每个月的名称。
    default: null
  - name: actionNames
    type: shape
    parameters: null
    description: 用户自定义的选择框操作按钮的名称。
    default: null
  - name: yearStart
    type: number
    parameters: null
    description: 可选范围的起始年份。
    default: 1917
  - name: yearEnd
    type: number
    parameters: null
    description: 可选范围的结束年份。
    default: 2200
---

# Date-picker

<box>

## 日期选择器

一个用于选择日期的组件。

若传递了 `date` 属性，就必须确保自己对她的控制。

当日期选择结束后，回调函数 `onChange` 将会被调用

属性 `show` 和 `auto` 使得组件的使用更加灵活。 `show` 可以直接控制日期选择框的打开或关闭。 `autoOk` 代表当日期被成功选择后，是否自动关闭选择框。

而除了默认的格式化之外，提供了一个 `format` 函数，返回一个格式化后的字符串。

`withClear` 属性用于清空已选择的日期。

自动模式，`date`为`null`

<vuecode md center>

</vuecode>
</box>

import React from 'react'
import PropTypes from 'prop-types'

const DropDown = ({gridClassName, value, disable, selectClassName, optionList, onChange, label}) => (
  <div className={gridClassName}>
    <label>{label}</label>
    <select value={value} disabled={disable} onChange={onChange} className={selectClassName}>
      {!disable && <option key='' value='' />}
      {
        optionList.map((item) => {
          return (
            <option key={item.id} value={item.id}>{item.value}</option>
          )
        })
      }
    </select>
  </div>
)
DropDown.PropTypes = {
  value: React.PropTypes.string
}

class DropDownField extends React.Component {
  render () {
    return (
      <div>
      <DropDown
         gridClassName= "col-md-4 col-sm-6 col-xs-12"
         selectClassName= "form-control"
         label="DropDown"
         value=""
         optionList={[{value:'choice1',id:1},{value:'choice2',id:2}]}
      />
      </div>
    )
  }
}

export default DropDownField


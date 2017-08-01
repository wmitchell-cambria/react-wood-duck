import React from 'react';

const Card = () => (
<div className="container-fluid">
    <div className="bg-lightest-grey container">
        <div className="card edit double-gap-top">
        <div className="card-header">
            <span>Profile Information (Edit mode)</span>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <label>
                        First name
                    </label>
                    <input name="first-name" type="text" value="John" className="form-control">
                    </input>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <label>
                        Middle name
                    </label>
                    <input name="middle-name" type="text" value="James"  className="form-control">
                    </input>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <label>
                        Last name
                    </label>
                    <input name="first-name" type="text" value="Smith"  className="form-control">
                    </input>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <label>
                        Gender
                    </label>
                    <select id="state" name="gender" className="form-control">
                        <option value=""></option>
                        <option value="Female">Female</option>
                        <option selected="selected" value="Male">Male</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <label>
                        Date of birth
                    </label>
                    <input name="DOB" type="date" value="02-25-1986" className="form-control">
                    </input>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <label>
                        Social security number
                    </label>
                    <input name="SSN" type="number" value="1586985874" className="form-control">
                    </input>
                </div>
            </div>
            <div className="row">
                <div className="centered">
                    <button className="btn btn-primary">Save</button>
                    <button className="btn btn-default">Cancel</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
)

class Cards extends React.Component {
  render () {
    return (
      <div>
        <Card  />
      </div>
    )
  }
}

export default Cards

import React from 'react'

const PlayDatesContainer = ({ user }) => {
  return (
    <form>
    <div class_name="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <div class_name="form-group">
      <label for="exampleFormControlSelect1">Example select</label>
      <select class_name="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class_name="form-group">
      <label for="exampleFormControlSelect2">Example multiple select</label>
      <select multiple class_name="form-control" id="exampleFormControlSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class_name="form-group">
      <label for="exampleFormControlTextarea1">Example textarea</label>
      <textarea class_name="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </form>
  )
}

export default PlayDatesContainer
import React from 'react'
import moment from 'moment'
import { seekTo } from '../actions/timestamp'
import { connect } from 'react-redux'

const Tip = ({ timestamp, comment, helpfulness, tags, dispatch }) => (
  <div className='border border-primary rounded p-2 mb-1'>
    <p>
      <a
        className='text-warning'
        style={{ cursor: 'pointer' }}
        onClick={(e) => { dispatch(seekTo(timestamp)) }}
        >
          { moment().startOf('day').seconds(timestamp).format('mm:ss') }
      </a>
    </p>
    <p>{ comment }</p>
    <p>{helpfulness[0]} of {helpfulness[0] + helpfulness[1]} found this helpful.</p>
    {
      tags.map((tag, index) => (
        <a
          key={index}
          href='#'
          className='badge badge-pull badge-light text-dark mr-1 mb-2'
          >
          { tag }
        </a>
      ))
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Tip)

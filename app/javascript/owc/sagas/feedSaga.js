import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios-on-rails'
import { newReview, editReview } from '../actions/feed'
import regeneratorRuntime from 'regenerator-runtime'

//POSTs each tip to the server and returns an array with the tips with their new ids.
function *postTips(tips, review_id) {
  return yield tips.map(tip => axios.post('/tips', { ...tip, review_id }).then(response => response.data).catch(error => error))
}

function *postReview(action) {
  try {
    const review = yield axios.post('/reviews', action.payload.review).then(response => response.data)
    
    const tips = yield postTips(action.payload.tips, review.id)

    const reviewer_profile = yield select(state => state.feedReducer.user.profile)

    yield put(newReview({ ...review, tips, reviewer_profile }))

  } catch (e) {
    console.log(e)
  }
}

function *patchTips(tips) {
  return yield tips.map(tip => axios.patch('/tips/' + tip.id, tip).then(response => response.data).catch(error => error))
}

function *patchReview(action) {
  try {
    const review = yield axios.patch('/reviews/' + action.payload.review.id, action.payload.review).then(response => response.data).catch(error => error)

    const patchedTips = yield patchTips(action.payload.tips.filter(tip => tip.hasOwnProperty('id')))
    const postedTips = yield postTips(action.payload.tips.filter(tip => !tip.hasOwnProperty('id')), review.id)
    const tips = [...patchedTips, ...postedTips]

    const reviewer_profile = yield select(state => state.feedReducer.user.profile)

    // console.log({ ...review, tips, reviewer_profile })

    yield put(editReview({ ...review, tips, reviewer_profile }))

  } catch (e) {
    console.log(e)
  }
}

function *feedSaga() {
  yield takeEvery('POST_REVIEW', postReview)
  yield takeEvery('PATCH_REVIEW', patchReview)
}

export default feedSaga
